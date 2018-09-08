const Discord = require("discord.js");
const ms = require("ms");
const config = require("/app/config.json");

module.exports.run = async (bot, message, args) => {

if(config.admin.includes(message.author.id)) {} else if (message.member.hasPermission(["MANAGE_MESSAGES"])) {} else return message.reply('you can\'t do that command!');
  //!tempmute @user 1s/m/h/d
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("I couldn't find that user.");
  let muterole = message.guild.roles.find(`name`, "muted");
  if(tomute.roles.has(muterole.id)) {} else return message.reply("that user isn\'t muted.");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.reply(`unmuted <@${tomute.id}>!`);
  });


//end of module
}

module.exports.help = {
  name: "unmute",
  description: "Unmutes a user.",
  usage: "!unmute [user]"
}