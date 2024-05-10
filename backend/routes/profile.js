const express = require("express");
const router = express.Router();

// Ensure you have some form of middleware to protect this route
router.get("/profile", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: "User not authenticated" });
  }
  // Assuming req.user contains the user object after successful authentication
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
    avatar: req.user.avatar,
  });
});

module.exports = router;
