const router = require("express").Router();
const authorize = require("../middleware/authorize");
const pool = require("../db");

// In your dashboard endpoint
router.get("/", authorize, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT user_id, user_name, profile_pic_url, bio FROM users WHERE user_id = $1",
      [req.user.id]
    ); 

    if (user.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});


module.exports = router;
