const pool = require('../db');

// Controller function to create a reply
const createReply = async (req, res) => {
    const { content, user_id, topic_id } = req.body;
    try {
        const newReply = await pool.query(
            'INSERT INTO replies (content, user_id, topic_id) VALUES ($1, $2, $3) RETURNING *',
            [content, user_id, topic_id]
        );
        res.status(201).json(newReply.rows[0]);
    } catch (error) {
        console.error('Error creating reply:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller function to get replies for a specific topic
const getRepliesByTopic = async (req, res) => {
    const topicId = req.params.topicId;
    try {
        const replies = await pool.query(
            'SELECT * FROM replies WHERE topic_id = $1',
            [topicId]
        );
        res.json(replies.rows);
    } catch (error) {
        console.error('Error fetching replies:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    createReply,
    getRepliesByTopic
};
