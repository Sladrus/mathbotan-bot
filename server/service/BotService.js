const mathbotanBot = require('../../bot');

class BotService {
  async createLink(chat_id, user_id) {
    const link = await mathbotanBot.createChatInviteLink(chat_id, {
      creates_join_request: true,
    });
    return link;
  }

  async sendMessage(chat_id, text, options) {
    const message = await mathbotanBot.sendMessage(chat_id, text, options);
    return message;
  }

  async approveChatJoinRequest(chat_id, user_id) {
    const message = await mathbotanBot.approveChatJoinRequest(chat_id, user_id);
    return message;
  }

  async declineChatJoinRequest(chat_id, user_id) {
    const message = await mathbotanBot.declineChatJoinRequest(chat_id, user_id);
    return message;
  }

  async replyToMessage(message_id, text, chat_id) {
    const message = await mathbotanBot.sendMessage(chat_id, text, {
      reply_to_message_id: message_id,
      disable_web_page_preview: true,
    });
    return message;
  }
}

module.exports = new BotService();
