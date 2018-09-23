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
const config = require("./config.json");



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
  
    if( swears.some(word => msg.includes(word)) ) {
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
  
    if (msg.includes('MARITAL')) {
        if(message.author.id !== '245361121295335425') return;
        message.reply('Are you sure you didn\'t mean "martial"?')
      
    } 
   
// Ping Commands
    if (msg === prefix + 'PING') {
        message.channel.send('Pong!')
    
    }
  
    if (msg === prefix + 'DING') {
        message.channel.send('Dong!')
    
    }

// Admin List Command
    if (msg === prefix + 'ADMINS') {
        message.channel.send("Admins: " + config.admins)
    
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
  
    if (msg.includes('COOL AND GOOD')) {
        message.channel.send({files: ["https://i.imgur.com/q8npRe9.jpg"]})

    }        
  
    var pingreply = ["no. just no.", "can I not be pinged every day please?", "STOP PINGING ME, PLEASE!", "if you ping me again I will stab your family", "HISSSSSS","huashdosife \n why ping"];
    if (msg.includes('@467203808695549954')) {
      var pingresponse = pingreply[Math.floor(Math.random()*pingreply.length)];
      message.channel.send(pingresponse).then().catch(console.error);
    }
  
  //Brayden Commands
    if (msg.includes('!YIPPEEKIYAY')) {
      message.channel.send({files: ["https://i.imgur.com/OJxtsT0.gif"]})

    }
  
    if (msg.includes('!HOWYADOIN')) {
      message.channel.send({files: ["https://i.imgur.com/DFduXFV.png"]})

    }
  
    if (msg.includes('!YOULLNEVERESCAPE')) {
      message.channel.send({files: ["https://i.imgur.com/7TNttBA.png"]})

    }
  
    if (msg.includes('!YES')) {
      message.channel.send({files: ["https://i.imgur.com/4qEPBoo.png"]})

    }

    if (msg.includes('!LONGLIVETHEKING')) {
      message.channel.send({files: ["https://i.imgur.com/jkavULi.jpg"]})
      
    }
    
    
    if (msg.includes('!CHILD')) {
      message.channel.send('\n          :tophat:\n:ear::skin-tone-2::eye:️:nose::skin-tone-2::eye:️:ear::skin-tone-2:\n          :lips:\n     :muscle::skin-tone-2::shirt::selfie::skin-tone-2:\n          :jeans:\n         :mans_shoe::mans_shoe:')}

//  Loss Memes
    const gradysucks = new Discord.RichEmbed()
    .setTitle("grady you suck")
    .setColor("#a322a7")
    .setImage("https://i.imgur.com/7DdTWOt.png")
    if (msg === prefix + 'GRADY') {
//      bot.users.get("345997846551724033").send(gradysucks)
      message.channel.send(gradysucks)

    }
  
    const margsucks = new Discord.RichEmbed()
    .setTitle("marg you suck")
    .setColor("#9b9b9b")
    .setImage("https://i.imgur.com/6q8AbK0.png")
    if (msg === prefix + 'MARG') {
//      bot.users.get("245361121295335425").send(margsucks)
      message.channel.send(margsucks)

    }
  
    const jbjsucks = new Discord.RichEmbed()
    .setTitle("jbj you suck")
    .setColor("#3da5c9")
    .setImage("https://i.imgur.com/PV0UTWt.png")
    if (msg === prefix + 'JBJ') {
      message.channel.send(jbjsucks)

    }
  
    const braysucks = new Discord.RichEmbed()
    .setTitle("brayden you suck")
    .setColor("#0c0b3b")
    .setImage("https://i.imgur.com/xOBiQeS.png")
    if (msg === prefix + 'BRAYDEN') {
//      bot.users.get("283444510107762698").send(braysucks)
      message.channel.send(braysucks)

    }
  
    const joesucks = new Discord.RichEmbed()
    .setTitle("joseph you suck")
    .setColor("#6f1883")
    .setImage("https://i.imgur.com/leXUc5L.png")
    if (msg === prefix + 'JOSEPH') {
//      bot.users.get("269299243959844865").send(joesucks)
      message.channel.send(joesucks)

    }
  
    const pranavasucks = new Discord.RichEmbed()
    .setTitle("pranava you suck")
    .setColor("#ec9415")
    .setImage("https://i.imgur.com/iSXRmTo.jpg")
    if (msg === prefix + 'PRANAVA') {
//      bot.users.get("380449043614269441").send(pranavasucks)
      message.channel.send(pranavasucks)

    }
  
    const marilynsucks = new Discord.RichEmbed()
    .setTitle("marilyn you suck")
    .setColor("#ec9415")
    .setImage("https://imgur.com/2PoBmT9.png")
    if (msg === prefix + 'MARILYN') {
//      bot.users.get("https://imgur.com/2PoBmT9.png").send(marilynsucks)
      message.channel.send(marilynsucks)

    }
  
    const darylsucks = new Discord.RichEmbed()
    .setTitle("daryl you suck")
    .setColor("#ec9415")
    .setImage("https://i.imgur.com/8PqJpQy.png")
    if (msg === prefix + 'DARYL') {
//      bot.users.get("368250072938315787").send(darylsucks)
      message.channel.send(darylsucks)

    }
  
//  Test
    if (msg === prefix + 'BIRB') {
    message.channel.send("Sorry, I don't do that sort of thing...")
      
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

    bot.on('ready', () => {
      var channel = bot.channels.get('487693544652275713');
      channel.send("`JudgeBot Jones online.`\nHoney! I'm home!\n  ");
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

    bot.on('guildMemberAdd', (guildMember) => {
       guildMember.addRole(guildMember.guild.roles.find(role => role.name === "New Member"));
    });

    const newUsers = [];
    bot.on("guildMemberAdd", (member) => {
      const guild = member.guild;
      if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
      newUsers[guild.id].set(member.id, member.user);

      if (newUsers[guild.id].size > 0) {
        const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
        guild.channels.find("name", "general").send("Welcome to the server, " + userlist + "!");
        newUsers[guild.id].clear();
      }
    });

  


bot.login(config.token)
