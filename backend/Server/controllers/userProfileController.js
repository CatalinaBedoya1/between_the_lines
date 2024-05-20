const pool = require('../db');

// Get user profile by user ID
const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const userProfile = await pool.query("SELECT * FROM users WHERE user_id = $1", [userId]);
    res.json(userProfile.rows[0]);
  } catch (err) {
    console.error("Error fetching user profile:", err.message);
    res.status(500).json("Server error");
  }
};

// Update user profile
const updateUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const { bio } = req.body;
    console.log("Updating user profile:", userId, bio); // Add this line for logging
    await pool.query("UPDATE users SET bio = $1 WHERE user_id = $2", [bio, userId]);
    const updatedUserProfile = await pool.query("SELECT * FROM users WHERE user_id = $1", [userId]);
    res.json(updatedUserProfile.rows[0]);
  } catch (err) {
    console.error("Error updating user profile:", err.message); // Add more detailed error logging
    res.status(500).json("Server error");
  }
};

module.exports = {
  getUserProfile,
  updateUserProfile
};
