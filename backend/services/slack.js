// backend/services/slack.js
async function sendToSlack(message) {
  console.log('[Slack] Sending message:', message);
  // You can implement Slack webhook here
  return true;
}

module.exports = { sendToSlack };
