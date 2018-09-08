const Discord = require("discord.js");
const config = require("/app/config.json");

module.exports.run = async (bot, message, args) => {
const admin = ["231933442273574913", "283444510107762698"]

if(admin.includes(message.author.id)) {} else if (message.member.hasPermission(["ADMINISTRATOR"])) {} else return message.reply('you can\'t do that command!');
      
      async function purge() {
        message.delete();
    
        if(config.admin.includes(message.author.id)) {} else if (message.member.hasPermissions(["ADMINISTRATOR"])) {} else return;
      }
      
      if(isNaN(args[0])) {
        message.channel.send('Please list how many messages!');
        return;
      }
      
      const fetched = await message.channel.fetchMessages({limit: args[0]});
      console.log(fetched.size + ' messages found, deleting...');
      
      message.channel.bulkDelete(fetched)
        .catch(error => message.channel.send('Error: ${error}'));
      
}

module.exports.help = {
  name: "purge",
  description: "Deletes a certain amount of messages.",
  usage: "!purge [number]"
}