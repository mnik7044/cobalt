const { WebClient } = require("@slack/web-api"); // Import WebClient from Slack SDK
const User = require("../models/User"); // Import User model

async function sendMessage(userData) {
  // Function to send message to Slack
  const webClient = new WebClient(process.env.SLACK_TOKEN);
  const message = `User: ${userData.name}, Email: ${userData.email}`;
  try {
    const result = await webClient.chat.postMessage({
      text: message,
      channel: process.env.SLACK_CHANNEL_ID,
    });
    console.log("Message sent", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function sendUserData(user) {
  // Function to send user data to Slack
  try {
    if (user) {
      await sendMessage(user);
    } else {
      console.log("No user found");
    }
  } catch (error) {
    console.error("Error processing user data:", error);
  }
}

module.exports = { sendUserData }; // Export the function
