const Discord = require("discord.js");
const config = require("/app/config.json");

module.exports.run = async (bot, message, args) => {

if(config.ownerID !== message.author.id) return message.reply('you can\'t do that command!');

      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);

}

module.exports.help = {
  name: "realsay",
  description: "Makes me say a message.",
  usage: "!realsay [message]"
}