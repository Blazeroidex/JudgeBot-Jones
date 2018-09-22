const Discord  = require("discord.js");
const superagent = require("superagent");
const config = require("/app/config.json");

module.exports.run = async (bot,message,args) => {
  
  let {body} = await superagent
  .get(`http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=false`);
  
  let embed = new Discord.MessageEmbed()
  .setColor("ff9900")
  .setTitle("Birb")
  .setImage(body.url);
  
  message.channel.send(embed);
    
}

module.exports.help = {
  name: "birb",
  description: "Sends a random picture of a birb",
  usage: "!birb"
}