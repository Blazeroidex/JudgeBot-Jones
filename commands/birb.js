const Discord  = require("discord.js");
const superagent = require("superagent");
const config = require("/app/config.json");

module.exports.run = async (bot,message,args) => {
  
  let {body} = await superagent
  .get(`https://shibe.online/api/shibes`);
  
  let embed = new Discord.RichEmbed()
  .setColor("ff9900")
  .setTitle("Birb")
  .setImage(body.url);
  
  message.channel.send({embed});
    
}

module.exports.help = {
  name: "birb",
  description: "Sends a random picture of a birb",
  usage: "!birb"
}