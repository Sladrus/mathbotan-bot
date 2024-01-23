require('dotenv').config();

const MatchbotanBot = require('./bot');

try {
  const bot = new MatchbotanBot();
  bot.init();
  console.log('Bot started.');
} catch (e) {
  console.log('Bot not started. Error:\n', e);
}
