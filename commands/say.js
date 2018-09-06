const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(message.author.id !== '231933442273574913') return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);

}

module.exports.help = {
  name: "say"
}