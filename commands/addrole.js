const Discord = require("discord.js");
const config = require("./config.json");

module.exports.run = async (bot, message, args) => {
const admin = ["231933442273574913", "283444510107762698"]

  //!addrole @andrew Dog Person
if(admin.includes(message.author.id)) {} else if (message.member.hasPermission(["ADMINISTRATOR"])) {} else return message.reply('you can\'t do that command!');
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("I couldn't find that user!");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("I couldn't find that role.");

  if(rMember.roles.has(gRole.id)) return message.reply("they already have that role.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Congrats, you have been given the role ${gRole.name}`)
  }catch(e){
    message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`)
  }
}

module.exports.help = {
  name: "addrole",
  description: "Adds a role to a user.",
  usage: "!addrole [user] [role]"
}