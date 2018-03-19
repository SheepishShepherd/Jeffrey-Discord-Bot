  const Discord = require('discord.js');
  const client = new Discord.Client();
  const prefix = "/";

  client.on('ready', () => {console.log('Jeffrey is ready to play!');});

  client.on('message', message => {
    if(!message.content.startsWith(prefix)) return;
//If the message does not start with the set prefix, the bot will ignore the message.
    
    var args = message.content.substring(prefix.length).split(" ");
    
    switch(args[0].toLowerCase()) {
    
        case "ping":
        message.reply('PONG! :ping_pong:');
        break;
//Replies "Pong!" if the user uses /ping

        case "help":
        message.channel.sendMessage('If you need help with commands, go to #command-list');
        break;
//Refers the help channel for a command list
                
         case "roll":
        if(args[1] = "6"){
          var rolld6 = Math.floor((Math.random() * 6) + 1);
          if(rolld6 == 1){message.reply('has rolled a 1!', {file: 'https://raw.githubusercontent.com/SheepishShepherd/Jeffrey-Discord-Bot/master/Images/GameProps/D6/d6_1.png'});}
          else if(rolld6 == 2){message.reply('has rolled a 2!', {file: 'https://raw.githubusercontent.com/SheepishShepherd/Jeffrey-Discord-Bot/master/Images/GameProps/D6/d6_2.png'});}
          else if(rolld6 == 3){message.reply('has rolled a 3!', {file: 'https://raw.githubusercontent.com/SheepishShepherd/Jeffrey-Discord-Bot/master/Images/GameProps/D6/d6_3.png'});}
          else if(rolld6 == 4){message.reply('has rolled a 4!', {file: 'https://raw.githubusercontent.com/SheepishShepherd/Jeffrey-Discord-Bot/master/Images/GameProps/D6/d6_4.png'};}
          else if(rolld6 == 5){message.reply('has rolled a 5!', {file: 'https://raw.githubusercontent.com/SheepishShepherd/Jeffrey-Discord-Bot/master/Images/GameProps/D6/d6_5.png'});}
          else if(rolld6 == 6){message.reply('has rolled a 6!', {file: 'https://raw.githubusercontent.com/SheepishShepherd/Jeffrey-Discord-Bot/master/Images/GameProps/D6/d6_6.png'});}}
        else{message.channel.sendMessage('You need a proper dice number!');}
          break;
//User rolls a die
        
        default:
        message.channel.sendMessage("That's not a command, silly!");
//If the user tries to run a command that does not exist, the bot will state so
    }
  });
    
  client.login(process.env.BOT_TOKEN);
