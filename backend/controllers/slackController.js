const slackClient = require("../config/slackConfig");

const postUserDetailsToChannel = async (user) => {
  const text = `New Login: ${user.name}, Email: ${user.email}, Avatar: ${user.avatar}`;
  try {
    const res = await slackClient.chat.postMessage({
      channel: process.env.SLACK_CHANNEL_ID,
      text: text,
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*New Login:* \nName: *${user.name}*\nEmail: *${user.email}*`,
          },
          accessory: {
            type: "image",
            image_url: user.avatar,
            alt_text: "profile picture",
          },
        },
      ], // This adds a rich layout with the user's name, email, and profile picture.
    });
    return res.ok;
  } catch (error) {
    console.error("Error posting to Slack:", error);
    return false;
  }
};

module.exports = {
  postUserDetailsToChannel,
};
