const Command = require('telegram-command-handler');

const initCommand = async (bot, name) => {
  const commandName = new Command(bot, name);
  const commandPath = './data/' + name;

  const callback = require(commandPath);

  commandName.on('receive', async (msg, args) => {
    await callback(bot, msg, args);
  });
};

const initCommands = async (bot) => {
  await initCommand(bot, 'start');
};

module.exports = { initCommands };
