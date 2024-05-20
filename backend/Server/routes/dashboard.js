const router = require("express").Router();
const authorize = require("../middleware/authorize");
const pool = require("../db");

router.get("/", authorize, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT user_id, user_name FROM users WHERE user_id = $1",
      [req.user.id] 
    ); 
    
  //if would be req.user if you change your payload to this:
    
  //   function jwtGenerator(user_id) {
  //   const payload = {
  //     user: user_id
  //   };
    
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});


// Update user profile (including bio)
router.put("/", authorize, async (req, res) => {
  const { bio } = req.body;

  try {
    await pool.query(
      "UPDATE users SET bio = $1 WHERE user_id = $2",
      [bio, req.user.id]
    );

    res.json({ message: "Bio updated successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;