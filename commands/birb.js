const Discord  = require("discord.js");
const config = require("/app/config.json");

module.exports.run = async (bot,message,args) => {
  

  
  const birbembed = new Discord.RichEmbed()
  .setColor("ff9900")
  .setTitle("Birb")
  .setImage(`http://shibe.online/api/birds?count=1`);
  
  message.channel.send(birbembed);
  
}

module.exports.help = {
  name: "birb",
  description: "Sends a random picture of a birb",
  usage: "!birb"
}