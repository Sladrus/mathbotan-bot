const UserDto = require('../../dto/UserDto');
const BotService = require('./BotService');
const MathbotanApi = require('../../http/api-matchbotan');

const PAY_URL = process.env.PAY_URL;

class UserService {
  async createFollower(msg) {
    const chat_id = msg.chat.id;
    const from_id = msg.from.id;

    const userDto = UserDto.fromUserEntity(msg.from);
    await MathbotanApi.createFollower(userDto.toPlainObject());
    await BotService.sendMessage(
      chat_id,
      `Ваша ссылка на оплату:${PAY_URL}?tg=${from_id}\n\nПосле оплаты бот выдаст приглашение на вступление в чат.`
    );
  }

  async sendLink(user_id, link) {
    await BotService.sendMessage(
      user_id,
      `Thanks!\n\nЗаходите по ссылке: ${link}`
    );
  }

  async joinGroup(msg) {
    const chat_id = msg.chat.id;
    const from_id = msg.from.id;

    const data = await MathbotanApi.getSubscription(from_id);

    if (data?.status === 'ACTIVE')
      return await BotService.approveChatJoinRequest(chat_id, from_id);
    if (data?.status === 'NOT_ACTIVE')
      return await BotService.declineChatJoinRequest(chat_id, from_id);
  }
}

module.exports = new UserService();
