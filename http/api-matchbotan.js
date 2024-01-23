const url = require('url');
const { mBotanApi } = require('.');

class MathbotanApi {
  constructor() {}

  async createFollower(body) {
    try {
      const response = await mBotanApi.post(`/bot/createFollower`, body);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  async getSubscription(user_id) {
    try {
      const params = new url.URLSearchParams({
        id: user_id,
      });
      const response = await mBotanApi.get(`/bot/getSubscription?${params}`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}
module.exports = new MathbotanApi();
