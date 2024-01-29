const UserService = require('../../../server/service/UserService');

module.exports = async function messageEvent(msg) {
  try {
    await UserService.sendComment(msg);
  } catch (e) {
    console.log(e);
  }
};
