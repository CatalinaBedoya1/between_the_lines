const express = require("express");
const app = express();
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
require('dotenv').config();


const cors = require("cors");
const pool = require("./Server/db");
app.use(express.json());


const NYT_API_KEY = 've27qt7otDqwAHzuCuLsr9M3inbBinNe';
const GOOGLE_BOOKS_API_KEY = 'AIzaSyCSGZabU9B0s_HlH9cmg7BBCjxFQZl0x3g'; //i dont know why this seems commented out 

app.use(cors());
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


app.listen(4000, () => {
  console.log('Server is running on port 4000');
});




