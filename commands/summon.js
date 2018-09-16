const Discord = require("discord.js");
const config = require("/app/config.json");

module.exports.run = async (bot, message, args) => {

      const sayMessage = args.join(" ");
      message.channel.send(`I summon ` + sayMessage + `!`);


}

module.exports.help = {
  name: "summon",
  description: "Makes me summon something",
  usage: "!summon [message]"
}