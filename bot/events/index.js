const initEvent = (bot, name) => {
  const eventPath = './data/' + name;
  const callback = require(eventPath);

  bot.on(name, async (message) => {
    await callback(bot, message);
  });
};

const initEvents = (bot) => {

};

module.exports = { initEvents };
