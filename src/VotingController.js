const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;
//still need to figure out how the server will collect the voting data
// Create a connection pool to PostgreSQL database
const pool = new Pool({
  user: 'your_postgres_user',
  host: 'localhost',
  database: 'your_database_name',
  password: 'your_database_password',
  port: 5432,
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// API endpoint to handle voting
app.post('/vote', async (req, res) => {
  const { bookId } = req.body;

  try {
    // Execute SQL query to record the vote
    const queryResult = await pool.query('INSERT INTO votes (book_id) VALUES ($1)', [bookId]);
    res.status(200).send('Vote recorded successfully');
  } catch (error) {
    console.error('Error executing SQL query:', error);
    res.status(500).send('Internal server error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
