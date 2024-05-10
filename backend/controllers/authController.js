const getClient = require("../config/googleAuth");
const { google } = require("google-auth-library");
const User = require("../models/User");
const slackController = require("./slackController");

// Define redirectToGoogle function
const redirectToGoogle = (req, res) => {
  const client = getClient();
  const url = client.generateAuthUrl({
    access_type: "offline",
    scope:
      "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
    prompt: "consent",
  });
  res.redirect(url);
};

const handleGoogleCallback = async (req, res) => {
  const client = getClient();
  const { code } = req.query;
  const { tokens } = await client.getToken(code);
  client.setCredentials(tokens);

  const oauth2 = google.oauth2({
    auth: client,
    version: "v2",
  });

  oauth2.userinfo.get(async (err, response) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Authentication Error");
    }

    // Extract user details
    const { email, name, picture } = response.data;

    // Optionally save the user in your database
    const newUser = await User.findOneAndUpdate(
      { email },
      { email, name, avatar: picture },
      { new: true, upsert: true }
    );

    // Send user details to Slack
    await slackController.postUserDetailsToChannel(newUser);

    res.redirect("/profile");
  });
};

module.exports = {
  redirectToGoogle,
  handleGoogleCallback,
};
