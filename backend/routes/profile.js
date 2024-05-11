const express = require("express");
const router = express.Router();

// Ensure you have some form of middleware to protect this route
router.get("/profile", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: "User not authenticated" });
  }
  // Assuming req.user contains the user object after successful authentication
  if (req.user) {
    res.cookie("email", req.user.email, { secure: true });
    res.cookie("name", req.user.name, { secure: true });
    res.cookie("avatar", req.user.avatar, { secure: true });
    res.cookie("id", req.user._id, { secure: true });
  }
  res.redirect("http://localhost:3000/profile");
});

module.exports = router;
