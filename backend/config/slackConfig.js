const { WebClient } = require("@slack/web-api");

const slackClient = new WebClient(process.env.SLACK_TOKEN);

module.exports = slackClient;
