// In your Express app's router file (e.g., routes/threadRoutes.js)

const express = require('express');
const router = express.Router();
const pool = require('../db');
const threadController = require('../controllers/threadController');


// Endpoint to create a reply
router.post('/api/thread/replies', async (req, res) => {
    try {
        const { reply, topicId, userId } = req.body;

        // Add your logic here to validate input data if needed

        // Insert the reply into the database
        const newReply = await pool.query(
            'INSERT INTO replies (content, topic_id, user_id) VALUES ($1, $2, $3) RETURNING *',
            [reply, topicId, userId]
        );

        res.status(201).json({ reply: newReply.rows[0], message: 'Reply created successfully' });
    } catch (error) {
        console.error('Error creating reply:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/api/topics/:topicId/replies', threadController.getRepliesByTopic);

module.exports = router;
