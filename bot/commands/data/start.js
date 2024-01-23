module.exports = async function startCommand(bot, msg, args) {
  const chat_id = msg.chat.id;
  const from_id = msg.from.id;

  const PAY_URL = process.env.PAY_URL;

  try {
    await bot.sendMessage(chat_id, `${PAY_URL}?tg=${from_id}`);
  } catch (e) {
    console.log(e?.response?.data);
  }
};
