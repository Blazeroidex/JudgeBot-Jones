const snek = module.require("snekfetch");
const api = "http://shibe.online/api/shibes";

module.exports.run = async (bot, message, args) => {
  let msg = await message.channel.send("Generating...");
  
  let file = (await snek.get(api)).body.file;
  if(!file) return message.channel.send("Sorry, couldn't find one this time. Try again!");
}

module.exports.help = {
  name: "birb",
  description: "Sends a random picture of a birb",
  usage: "!birb"
}