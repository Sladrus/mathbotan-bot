const BotService = require('../../../server/service/BotService');

module.exports = async function startCommand(msg, args) {
  const chat_id = msg.chat.id;

  try {
    await BotService.sendMessage(chat_id, chat_id);
  } catch (e) {
    console.log(e);
  }
};
