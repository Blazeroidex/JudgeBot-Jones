const Discord = require("discord.js");
const config = require("./config.json");

module.exports.run = async (bot, message, args) => {

if(config.admin.includes(message.author.id)) {} else return message.reply('you can\'t do that command!');

      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);

}

module.exports.help = {
  name: "say",
  description: "Makes me say a message.",
  usage: "!say [message]"
}