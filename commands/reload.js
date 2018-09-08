const config = require("/app/config.json");

exports.run = (bot, message, args) => {
  
  if(config.admin.includes(message.author.id)) {} else return message.reply('you can\'t do that command!');
  
  try {
      delete require.cache[require.resolve(`./${args[0]}.js`)];
  } catch (e) {
      return message.channel.send(`Unable to reload: ${args[0]}`);
  }
  message.channel.send(`Successfully reloaded: ${args[0]}`);
  }

module.exports.help = {
  name: "reload",
  description: "Reloads a command.",
  usage: "!reload [command]"
}