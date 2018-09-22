const Discord  = require("discord.js");
const config = require("/app/config.json");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {
  
  let {body} = await superagent
  .get(`http://shibe.online/api/birds?count=1`);
  
  const birbembed = new Discord.RichEmbed()
  .setColor("ff9900")
  .setTitle("Birb")
  .setImage(body.url);

  
  message.channel.send({birbembed});
    
}

module.exports.help = {
  name: "birb",
  description: "Sends a random picture of a birb",
  usage: "!birb"
}