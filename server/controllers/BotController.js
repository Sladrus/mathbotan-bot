const BotService = require('../service/BotService');
const UserService = require('../service/UserService');

const CHAT_ID = process.env.CHAT_ID;

class BotController {
  async createLink(req, res, next) {
    try {
      const { user_id } = req.params;

      const link = await BotService.createLink(CHAT_ID);
      await UserService.sendLink(user_id, link?.invite_link);
      return res.json(link);
    } catch (e) {
      next(e);
    }
  }

  async sendMessages(req, res, next) {
    try {
      const body = req.body;

      await UserService.sendMessages(body);
      return res.json();
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new BotController();
