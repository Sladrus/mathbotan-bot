const TelegramBot = require('node-telegram-bot-api');

const { initCommands } = require('./commands');
const { initEvents } = require('./events');
const { initRegExpCommands } = require('./regExpCommands');

const BOT_TOKEN = process.env.BOT_TOKEN;

class MathbotanBot {
  constructor() {
    this.bot = null;
  }

  init() {
    this.bot = new TelegramBot(BOT_TOKEN, { polling: true });
    initCommands(this.bot);
    initEvents(this.bot);
    initRegExpCommands(this.bot);
  }

  async sendMessage(chat_id, text, options) {
    return await this.bot.sendMessage(chat_id, text, options);
  }

  async createChatInviteLink(chat_id, options) {
    return await this.bot.createChatInviteLink(chat_id, options);
  }

  async approveChatJoinRequest(chat_id, user_id) {
    return await this.bot.approveChatJoinRequest(chat_id, user_id);
  }

  async declineChatJoinRequest(chat_id, user_id) {
    return await this.bot.declineChatJoinRequest(chat_id, user_id);
  }
}

module.exports = new MathbotanBot();
