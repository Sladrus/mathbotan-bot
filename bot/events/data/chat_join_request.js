const UserService = require('../../../server/service/UserService');

module.exports = async function chatJoinRequestEvent(msg) {
  try {
    await UserService.joinGroup(msg);
  } catch (e) {
    console.log(e);
  }
};
