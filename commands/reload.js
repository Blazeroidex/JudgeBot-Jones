exports.run = (bot, message, args, config) => {
  
  if (message.author.id !== config.ownerID) return message.channel.send('Sorry, you can\t do this command!');
  
  try {
      delete require.cache[require.resolve(`./${args[0]}.js`)];
  } catch (e) {
      return message.channel.send(`Unable to reload: ${args[0]}`);
  }
  message.channel.send(`Successfully reloaded: ${args[0]}`);
}