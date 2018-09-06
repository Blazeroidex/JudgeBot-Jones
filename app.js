const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");
const swears = require("./swears.json");

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

jsfile.forEach((f, i) =>{
  let props = require(`./commands/${f}`);
  console.log(`${f} loaded!`);
  bot.commands.set(props.help.name, props);
});

});


bot.on('message', message => {
  
    let content = message.content.split(" ");
    let command = content[0];
    let args = content.slice(1);
    let prefix = config.prefix;
    
    var sender = message.author;
    var msg = message.content.toUpperCase();
   
    if (msg === prefix + 'PING') {
        message.channel.send('Pong!')
    
    }
  
    if (msg === prefix + 'DING') {
        message.channel.send('Dong!')
    
    }

    if (msg === prefix + 'GARFIELDDAB') {
        message.channel.send({files: ["https://i.imgur.com/pRHaLAH.jpg"]})
      
    }

  
    if (msg.includes('/BAN')) {
        if(message.author.id !== config.ownerID) return;
        message.channel.send('kk man gimme a sec')
    
    }

    
  
    if (msg.includes(swears.swear)) {
        message.delete();
        message.reply('That word is banned, please don\'t use it!')
    }
    
    if (msg.includes('-_-')) {
        message.delete();
        message.reply('That word is banned, please don\'t use it!')
    }
    
        if (msg.includes('YIFF')) {
        message.delete();
        message.reply('That word is banned, please don\'t use it!')
    }
    
    if (msg.includes('TRAPS ARE GAY')) {
        message.delete();
        message.reply('That word is banned, please don\'t use it!')
    }
    
    if (msg.includes('THERE IS MORE THAN TWO GENDERS')) {
        message.delete();
        message.reply('That word is banned, please don\'t use it!')
    }
    
    if (msg.includes('FAGGOT')) {
        message.delete();
        message.reply('That word is banned, please don\'t use it!')
    }
    
    if (msg.includes('REEE')) {
        message.delete();
        message.reply('That word is banned, please don\'t use it!')
    }
    
    if (msg.includes('JAKE PAUL')) {
        message.delete();
        message.reply('That word is banned, please don\'t use it!')
    }

    if (msg.includes('MINION HENTAI')) {
        message.delete();
        message.reply('That word is banned, please don\'t use it!')
    }
    
    if (msg.includes('DICC')) {
        message.delete();
        message.reply('That word is banned, please don\'t use it!')
    }
    
    if (msg.includes('SUCCC')) {
        message.delete();
        message.reply('That word is banned, please don\'t use it!')
    }
    
    if (msg.includes('WILLIAM SUCKS')) {
        message.delete();
        message.reply('That word is banned, please don\'t use it!')
    }

    
    if (msg.includes('JUDGEBOT JONES SUCKS')) {
        message.channel.send({files: ["https://i.imgur.com/hp36LBh.jpg"]})
      
    }
  
    if (msg.includes('BOT SUCKS')) {
        message.channel.send({files: ["https://i.imgur.com/hp36LBh.jpg"]})
      
    }
  
    if (msg.includes('NO U')) {
        message.channel.send({files: ["https://i.imgur.com/hp36LBh.jpg"]})
      
    }
  
    if (msg.includes('JUDGEBOT JONES IS COOL')) {
        message.channel.send({files: ["https://i.imgur.com/jwOEBvS.jpg"]})
      
    }
  
    if (msg.includes('I LOVE JUDGEBOT JONES')) {
        message.channel.send({files: ["https://i.imgur.com/jwOEBvS.jpg"]})
      
    }
    
    
    if (msg.includes('THIS SERVER SUCKS')) {
        message.delete();
        message.reply('That word is banned, please don\'t use it!')
    }
    
    
    if (msg.includes('THIS SERVER IS DEAD')) {
        message.delete();
        message.reply('That word is banned, please don\'t use it!')
    }
    
    if (msg.includes('BITCH')) {
        message.delete();
        message.reply('That word is banned, please don\'t use it!')
    }
    
    if (msg.includes('FUCC')) {
        message.delete();
        message.reply('That word is banned, please don\'t use it!')
    }
    
    if (msg.includes('SANTA ISNT REAL')) {
        message.delete();
        message.reply('That word is banned, please don\'t use it!')
    }

    if (msg.includes('NEJ')) {
        if(message.author.id == config.ownerID) return;
        message.delete();
        message.reply('That word is banned, please don\'t use it!')

    }
  
    if (msg.includes('NEIN')) {
        if(message.author.id == config.ownerID) return;
        message.delete();
        message.reply('That word is banned, please don\'t use it!')

    }

    if (msg.includes('NYET')) {
        if(message.author.id == config.ownerID) return;
        message.delete();
        message.reply('That word is banned, please don\'t use it!')

    }
  
    if (msg.includes('NIET')) {
        if(message.author.id == config.ownerID) return;
        message.delete();
        message.reply('That word is banned, please don\'t use it!')

    }
  
    if (msg.includes('OVERCLOCK')) {
        if(message.author.id == config.ownerID) return;
        message.delete();
        message.reply('That word is banned, please don\'t use it!')

    }

    if (msg.includes('GPU')) {
        if(message.author.id == config.ownerID) return;
        message.delete();
        message.reply('That word is banned, please don\'t use it!')

    }
  
    if (msg.includes('DADDY')) {
        if(message.author.id == config.ownerID) return;
        message.delete();
        message.reply('That word is banned, please don\'t use it!')

    }
  
    if (msg.includes('FORTNITE')) {
        if(message.author.id == config.ownerID) return;
        message.delete();
        message.reply('That word is banned, please don\'t use it!')

    }
  
    if (msg.includes('HARAMBE WAS JUST A GORILLA')) {
        if(message.author.id == config.ownerID) return;
        message.delete();
        message.reply('That word is banned, please don\'t use it!')

    }

    if (msg.includes('COOL AND GOOD')) {
        message.channel.send({files: ["https://i.imgur.com/q8npRe9.jpg"]})

    }

    let commandfile = bot.commands.get(command.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);




});

bot.on('ready', () => {
      console.log('Bot Launched!')




});


bot.login(config.token)