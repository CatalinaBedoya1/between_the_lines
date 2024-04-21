// votingRoutes.js

const express = require('express');
const router = express.Router();
const { query } = require('./db');

// Handle POST request to vote for an image
router.post('/votes1', async (req, res) => {
  const { bookId } = req.body;

  try {
    // Increment the vote count for the specified image ID in the database
    await query('UPDATE votes1 SET count = count + 1 WHERE option = $1', [bookId]);
    res.status(200).json({ success: true, message: 'Vote recorded successfully' });
  } catch (error) {
    console.error('Error recording vote:', error);
    res.status(500).json({ success: false, message: 'Failed to record vote' });
  }
});

// Handle GET request to retrieve vote counts for all images
router.get('/votes1', async (req, res) => {
  try {
    // Fetch vote counts from the database
    const votes = await query('SELECT book_id, count FROM votes1');
  
    // Send the vote counts back as the response
    res.status(200).json({ success: true, votes });
  } catch (error) {
    console.error('Error retrieving votes:', error);
    res.status(500).json({ success: false, message: 'Failed to retrieve votes' });
  }
});

module.exports = router;

