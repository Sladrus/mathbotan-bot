const initEvent = (bot, name) => {
  const eventPath = './data/' + name;
  const callback = require(eventPath);

  bot.on(name, async (message) => {
    await callback(message);
  });
};

const initEvents = (bot) => {
  initEvent(bot, 'chat_join_request');
};

module.exports = { initEvents };
