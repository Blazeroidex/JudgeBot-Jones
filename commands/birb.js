const snek = module.require("snekfetch");
const api = "https://random.birb.pw/tweer/random";

module.exports.run = async (bot, message, args) => {
  let msg = await message.channel.send("Generating...");
  
  let file = (await snek.get(api)).body.file;
  if(!file) return message.channel.send("Sorry, couldn't find one this time. Try again!");
  
  console.log(file)
}

module.exports.help = {
  name: "birb",
  description: "Sends a random picture of a birb",
  usage: "!birb"
}