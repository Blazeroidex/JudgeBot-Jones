const config = require("./config.json");

exports.run = (client, message, args) => {

if(config.admin.includes(message.author.id)) {} else return message.reply('you can\'t do that command!');
if (args.length  < 1) return message.reply("You must supply a Guild ID");
client.guilds.get(args.join(" ")).leave()
.then(g => console.log(`Left the guild ${g}`)) .catch(console.error);
  
}

module.exports.help = {
  name: "leave",
  description: "Leaves a server.",
  usage: "!leave [guild id]"
}