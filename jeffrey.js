  const Discord = require('discord.js');
  const bot = new Discord.Client();
  const prefix = "/";

  bot.on('ready', () => {console.log('Jeffrey is ready to play!');});

  bot.on('message', message => {
    if(!message.content.startsWith(prefix)) return;
    if(message.author.equals(bot.user)) return;
//If the message does not start with the set prefix, the bot will ignore the message.
    
    var args = message.content.substring(prefix.length).split(" ");
    
    switch (args[0].toLowerCase()) {
    
        case "ping":
          message.reply('PONG! :ping_pong:');
          break;
//Replies "Pong!" if the user uses /ping

        case "help":
          message.channel.sendMessage('If you need help with commands, go to #command-list');
          break;
//Refers the help channel for a command list
        
        case "roll":
          if(!args[1]){message.reply("rolled a 6-sided die!");}
          else if(args[1]){message.reply("rolled a n-sided die!");}
          else{message.channel.sendMessage("I'm a little confused...");}
          break;
        
        default:
          message.channel.sendMessage("That's not a command, silly!");
//If the user tries to run a command that does not exist, the bot will state so
    }
  });
    
  bot.login(process.env.BOT_TOKEN);
