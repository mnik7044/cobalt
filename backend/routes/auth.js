const express = require("express");
const router = express.Router();
const passport = require("passport");
const slackController = require("../controllers/slackController"); // Import user services to send message to Slack

// Auth with Google
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google auth callback
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  async (req, res) => {
    // Successful authentication, redirect home.
    if (req.user) {
      // Assuming the user is attached to the request object
      try {
        await slackController.sendUserData(req.user); // Send user data to Slack
      } catch (error) {
        console.error("Failed to send user data to Slack:", error);
      }
    }
    res.redirect("/profile");
  }
);

module.exports = router; // Export the router
