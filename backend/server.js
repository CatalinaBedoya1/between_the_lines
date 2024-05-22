const express = require("express");
const app = express();
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
require('dotenv').config();

const path = require('path');
const fs = require('fs'); 
const authorize = require('./Server/middleware/authorize');


const cors = require("cors");

app.use(cors());

const pool = require("./Server/db");
app.use(express.json());
app.use(express.static(path.join(__dirname, "uploads")));


const NYT_API_KEY = 've27qt7otDqwAHzuCuLsr9M3inbBinNe';
const GOOGLE_BOOKS_API_KEY = 'AIzaSyCSGZabU9B0s_HlH9cmg7BBCjxFQZl0x3g'; //i dont know why this seems commented out 

//app.use(cors());
app.use(express.json()); //req.body



//voting api routes
app.post('/api/vote', async (req, res) => {
  const { cover_id } = req.body;
  try {
    await pool.query('UPDATE book_votes SET votes = votes + 1 WHERE cover_id = $1', [cover_id]);

    //to show all votes ever recorded i did this query 
    const votesResult = await pool.query('SELECT votes FROM book_votes WHERE cover_id = $1', [cover_id]);
    const votes = votesResult.rows.map(row => row.votes);
    
    res.status(200).json({ message: "Vote recorded successfully!", votes: votes });
  } catch (error) {
    console.error('Error recording vote:', error);
    res.status(500).json({ error: 'An error occurred while recording the vote.' });
  }
});
// API route to fetch initial vote counts for each book
app.get('/api/vote-counts', async (req, res) => {
  try {
    const voteCounts = await getVoteCounts();
    res.status(200).json({ success: true, voteCounts });
  } catch (error) {
    console.error('Error fetching vote counts:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch vote counts.' });
  }
});

// Function to fetch vote counts for each book from the database
const getVoteCounts = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT cover_id, SUM(votes) AS total_votes FROM book_votes GROUP BY cover_id');
    const voteCounts = {};
    result.rows.forEach(row => {
      voteCounts[row.cover_id] = row.total_votes;
    });
    return voteCounts;
  } finally {
    client.release();
  }
};



//WORDLE endpoint
app.get('/wordle-data', (req,res) => {
  const wordleData = require('./wordledata.json');   //read data
  res.json(wordleData);     //send data
})




//ROUTES


//register && login routes
app.use("/authentication", require("./Server/routes/jwtAuth"));

//dashboard routes
app.use("/dashboard", require("./Server/routes/dashboard"));







//book search APIS
app.get('/api/books/:category', async (req, res) => {
  try {
    const category = req.params.category;
    const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${category}.json?api-key=${NYT_API_KEY}`);
    const data = await response.json();
    res.json(data.results.books || []);
  } catch (error) {
    console.error(`Error fetching ${category} books:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/book-cover', async (req, res) => {
  const { bookTitle } = req.query;
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(bookTitle)}`);
    const data = await response.json();
    if (data.items && data.items.length > 0 && data.items[0].volumeInfo && data.items[0].volumeInfo.imageLinks) {
      const thumbnail = data.items[0].volumeInfo.imageLinks.thumbnail;
      res.json({ success: true, thumbnail });
    } else {
      res.status(404).json({ success: false, message: 'Book cover not found' });
    }
  } catch (error) {
    console.error('Error fetching book cover:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Api to create for the forums
const topicList = []; // Mock in-memory topic list

function generateID() {
  return Math.random().toString(36).substr(2, 9);
}

// Create a forum topic
app.post("/api/create/topic", async (req, res) => {
  const { topic, userId, userName, content } = req.body;

  if (!topic || !userId || !userName) {
    return res.status(400).json({ error: "Topic, userId, and userName are required fields." });
  }

  try {
    const result = await pool.query(
      "INSERT INTO topics (topic, user_id, user_name, date, content) VALUES ($1, $2, $3, CURRENT_TIMESTAMP, $4) RETURNING *",
      [topic, userId, userName, content]
    );
    const newTopic = result.rows[0];
    res.status(201).json({ message: "Topic created successfully!", topic: newTopic });
  } catch (error) {
    console.error("Error creating topic:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


// Get paginated list of topics
app.get("/api/topics", async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 5;
  const offset = (page - 1) * limit;

  try {
    const result = await pool.query(
      "SELECT * FROM topics ORDER BY date DESC LIMIT $1 OFFSET $2",
      [limit, offset]
    );
    const totalResult = await pool.query("SELECT COUNT(*) FROM topics");
    const totalCount = parseInt(totalResult.rows[0].count, 10);

    const response = {
      results: result.rows,
      total: totalCount,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page,
    };

    res.json(response);
  } catch (error) {
    console.error("Error fetching topics:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


// Get user details by ID
app.get('/api/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const result = await pool.query('SELECT user_id, user_name FROM users WHERE user_id = $1', [userId]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ error: 'Server error' });
  }
});





// Route to handle profile picture upload
app.get("/profile-pics", async (req, res) => {
  try {
    // Assume you have an array of profile picture URLs stored in your database
    const profilePics = [
      "/profile-pics/pic1.jpg",
      "/profile-pics/pic2.jpg",
      "/profile-pics/pic3.jpg"
    ];
    res.json({ profilePics });
  } catch (error) {
    console.error("Error fetching profile pictures:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


// Route to handle updating user's bio
app.put('/update-bio', authorize, async (req, res) => {
  try {
    const { userId, bio } = req.body;

    const updateBio = await pool.query(
      "UPDATE users SET bio = $1 WHERE user_id = $2 RETURNING bio",
      [bio, userId]
    );

    if (updateBio.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(updateBio.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});