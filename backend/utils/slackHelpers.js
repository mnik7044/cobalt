const slackClient = require("../config/slackConfig");

async function sendSlackMessage(text) {
  try {
    await slackClient.chat.postMessage({
      channel: process.env.SLACK_CHANNEL_ID,
      text: text,
    });
  } catch (error) {
    console.error("Failed to send message to Slack:", error);
  }
}

module.exports = sendSlackMessage;
