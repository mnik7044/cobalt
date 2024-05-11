const express = require("express");
const router = express.Router();
const passport = require("passport"); // Make sure to require passport here

// Auth with Google
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google auth callback
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect("/profile");
  }
);

// // Inside your auth.js route file
// router.get("/auth/google/init", (req, res) => {
//   const authUrl =
//     "https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=YOUR_CLIENT_ID";
//   res.redirect(authUrl);
// });

module.exports = router;
