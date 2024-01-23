const initRegExpCommand = (bot, name, regExp) => {
  const commandPath = './data/' + name;
  const callback = require(commandPath);

  bot.onText(regExp, async function (msg, match) {
    await callback(bot, msg, match);
  });
};

const initRegExpCommands = (bot) => {

};

module.exports = { initRegExpCommands };
