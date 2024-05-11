const express = require("express");
const router = express.Router(); // Import express and create a router

// Profile route
router.get("/profile", (req, res) => {
  // Define the profile route
  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: "User not authenticated" });
  }

  if (req.user) {
    // Check if user is authenticated
    res.cookie("email", req.user.email, { secure: true });
    res.cookie("name", req.user.name, { secure: true });
    res.cookie("avatar", req.user.avatar, { secure: true });
    res.cookie("id", req.user._id, { secure: true });
  }
  res.redirect("http://localhost:3000/profile");
});

module.exports = router; // Export the router
