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
          if(!args[1]){
            var d6roll = Math.floor((Math.random() * 6) + 1);
            if(d6roll == 1){message.reply("rolled a 1!");}
            else if(d6roll == 2){message.reply("rolled a 2!");}
            else if(d6roll == 3){message.reply("rolled a 3!");}
            else if(d6roll == 4){message.reply("rolled a 4!");}
            else if(d6roll == 5){message.reply("rolled a 5!");}
            else if(d6roll == 6){message.reply("rolled a 6!");}
            else {message.channel.reply("rolled a six-sided die!");}
          }

          else if(args[1]){
            if(args[1] == "6"){message.channel.sendMessage("You rolled a six-sided die!");}
            else if(args[1] == "20"){message.channel.sendMessage("You rolled a twenty-sided die!");}
            else{message.channel.sendMessage("That's not a valid number!");}}
        
          else{return;}
          break;
//Rolls a die(dice) based on inputs of the user.
        
        default:
          message.channel.sendMessage("That's not a command, silly!").then(msg => {msg.delete(10000)}).catch();
//If the user tries to run a command that does not exist, the bot will state so
    }
  });
    
  bot.login(process.env.BOT_TOKEN);
