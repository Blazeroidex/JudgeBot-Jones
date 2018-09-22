const Discord  = require("discord.js");
const superagent = require("superagent");
const config = require("/app/config.json");

module.exports.run = async (bot,message,args) => {
  
  let {body} = await superagent
  .get(`https://random.dog/woof.json`);
  
  let birbembed = new Discord.RichEmbed()
  .setColor("ff9900")
  .setTitle("Birb")
  .setImage(body.url);
  
  message.channel.send(birbembed);
    
}

module.exports.help = {
  name: "birb",
  description: "Sends a random picture of a birb",
  usage: "!birb"
}