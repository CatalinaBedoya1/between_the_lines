const pool = require("../db");
const { validate: uuidValidate } = require("uuid");


exports.getUserProfile = async (req, res) => {
    try {
      const { userId } = req.params;
  
      // Check if userId is provided and is a valid UUID
      if (!userId || !uuidValidate(userId)) {
        return res.status(400).json({ error: 'Invalid user ID' });
      }
  
      const query = 'SELECT * FROM user_profiles WHERE user_id = $1';
      const { rows } = await pool.query(query, [userId]);
  
      if (rows.length === 0) {
        return res.status(404).json({ error: 'User profile not found' });
      }
  
      return res.json(rows[0]);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };


exports.updateUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const { bio, profile_picture } = req.body;

    // Check if userId is provided and is a valid UUID
    if (!userId || !uuidValidate(userId)) {
      return res.status(400).json({ error: 'Invalid user ID' });
    }

    const query = 'UPDATE user_profiles SET bio = $1, profile_picture = $2 WHERE user_id = $3';
    await pool.query(query, [bio, profile_picture, userId]);

    return res.json({ message: 'User profile updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

