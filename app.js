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

//#####################################################################################################################

const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const config = require("./commands/config.json");



bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
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


//#####################################################################################################################

const swears = [
            "FUCK", 
            "NIBBA", 
            "NIGGA", 
            "NIGGER", 
            "SHIT", 
            "-_-", 
            "YIFF", 
            "FAGGOT", 
            "REEE", 
            "MINION HENTAI", 
            "MIDGET PORN", 
            "BITCH", 
            "FUCC", 
            "SANTA ISNT REAL", 
            "NEJ", 
            "NEIN", 
            "NYET", 
            "NIET", 
            "HARAMBE WAS JUST A GORILLA",
            "CUNT"
           ];

//#####################################################################################################################

bot.on('message', async message => {
  
// Word Filter
    const input = message.content.toUpperCase();    
  
    if( swears.some(word => input.includes(word)) ) {
        if(message.author.bot) return;
        if(config.admin.includes(message.author.id)) {
          return;
          }
          else if (message.member.hasPermission(["ADMINISTRATOR"])) return;
        message.delete(1);
        message.reply('That word is banned, please don\'t use it!')
    }
  
  
    if(message.author.bot) return;
    let content = message.content.split(" ");
    let command = content[0];
    let args = content.slice(1);
    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);
    
    var sender = message.author;
    var msg = message.content.toUpperCase();
   
// Ping Commands
    if (msg === prefix + 'PING') {
        message.channel.send('Pong!')
    
    }
  
    if (msg === prefix + 'DING') {
        message.channel.send('Dong!')
    
    }

// Dabbing Garfield Image Command
    if (msg === prefix + 'GARFIELDDAB') {
        message.channel.send({files: ["https://i.imgur.com/pRHaLAH.jpg"]})
      
    }
  
// Fake Ban Command
    if (msg.includes('!BAN')) {
        message.reply('Banned! The user has a day before they are removed.')
      
    } 
    
// Set Status Commands
    if (msg === prefix + 'SETSTATUS INVISIBLE') {
        bot.user.setStatus('invisible')
        message.reply('Status changed to Invisible.')
    }
  
    if (msg === prefix + 'SETSTATUS ONLINE') {
        bot.user.setStatus('online')
        message.reply('Status changed to Online.')
    }
  
    if (msg === prefix + 'SETSTATUS IDLE') {
        bot.user.setStatus('away')
        message.reply('Status changed to Idle.')
    }
  
    if (msg === prefix + 'SETSTATUS DO NOT DISTURB') {
        bot.user.setStatus('dnd')
        message.reply('Status changed to Do Not Disturb.')
    }

    if (msg === prefix + 'SETSTATUS') {
        message.reply('Usage: `!setstatus [invisible/online/idle/do not disturb]`')
    }

  
  
// Replying                                  
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
    
    if (msg.includes('COOL AND GOOD')) {
        message.channel.send({files: ["https://i.imgur.com/q8npRe9.jpg"]})

    }        
});

    bot.on('message', message => {
    var msg = message.content.toUpperCase();
      
    if (msg.includes('HELLO!')) {
        if(message.author.id !== '467203808695549954') return;
        if(message.guild.id == '364148183066083329') return;
        message.channel.send('Wait... this isn\'t Nerd Scouts!')
    }
    });



    bot.on("ready", async () => {
    console.log(bot.user.username + " is online.")
    });

    bot.on("guildCreate", guild => {
    let defaultChannel = "";
    guild.channels.forEach((channel) => {
      if(channel.type == "text" && defaultChannel == "") {
        if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
      defaultChannel = channel;
        }
      }
    })
    defaultChannel.send(`Hello!`)
      console.log(guild.owner.user.username +  " added me to a server named: " + guild.name + "(id: " + guild.id + ")")
        });

    bot.on("guildDelete", guild => {
      console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    });
  


bot.login(config.token)