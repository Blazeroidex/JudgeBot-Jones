const Discord  = require("discord.js");
const superagent = require("superagent");
const config = require("./config.json");

module.exports.run = async (bot,message,args) => {
  
  let {body} = await superagent
  .get(`https://random.dog/woof.json`);
  
  let dogembed = new Discord.RichEmbed()
  .setColor("ff9900")
  .setTitle("Doggo")
  .setImage(body.url);
  
  message.channel.send(dogembed);
  
}

module.exports.help = {
  name: "doggo",
  description: "Sends a random picture of a doggo",
  usage: "!doggo"
}