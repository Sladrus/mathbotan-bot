const TelegramBot = require('node-telegram-bot-api');

const { initCommands } = require('./commands');
const { initEvents } = require('./events');
const { initRegExpCommands } = require('./regExpCommands');

const BOT_TOKEN = process.env.BOT_TOKEN;

class MatchbotanBot {
  constructor() {
    this.bot = null;
  }

  init() {
    this.bot = new TelegramBot(BOT_TOKEN, { polling: true });

    initCommands(this.bot);
    initEvents(this.bot);
    initRegExpCommands(this.bot);
  }
}

module.exports = MatchbotanBot;
