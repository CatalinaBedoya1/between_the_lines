// profileRoutes.js

const express = require('express');
const router = express.Router();
const pool = require('../db');

// Update user bio
router.put('/:id/bio', async (req, res) => {
  const { id } = req.params;
  const { bio } = req.body;
  try {
    // Update user's bio in the database
    const updatedUser = await pool.query(
        'UPDATE users SET bio = $1 WHERE user_id = $2 RETURNING *',
      [bio, id]
    );
    res.json(updatedUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
