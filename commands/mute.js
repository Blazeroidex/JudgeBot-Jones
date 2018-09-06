const Discord = require("discord.js");
const ms = require("ms");
const config = require("./config.json");

module.exports.run = async (bot, message, args) => {

if(config.admin.includes(message.author.id)) {} else if (message.member.hasPermission(["MANAGE_MESSAGES"])) {} else return message.reply('you can\'t do that command!');

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("I couldn't find that user.");
  if(tomute.hasPermission(["MANAGE_MESSAGES"])) return message.reply("I can't mute them!");
  if(config.admin.includes(tomute.id)) return message.reply("I can't mute them!");
  let muterole = message.guild.roles.find(`name`, "muted");
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
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

  setTimeout(function(){
    if(tomute.roles.has(muterole.id)) {} else return;
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "mute",
  description: "Mutes a user for an amount of time.",
  usage: "!mute [user] [time]"
}