const { WebClient } = require("@slack/web-api");
const User = require("../models/User");

async function sendMessage(userData) {
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

module.exports = { sendUserData };
