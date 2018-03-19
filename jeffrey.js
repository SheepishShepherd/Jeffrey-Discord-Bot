  const Discord = require('discord.js');
  const client = new Discord.Client();
  const prefix = "/";

  client.on('ready', () => {console.log('Jeffrey is ready to play!');});

  client.on('message', message => {
    if(!message.content.startsWith(prefix)) return;
//If the message does not start with the set prefix, the bot will ignore the message.
     if(message.content.startsWith(prefix + "ping"){message.reply("PONG!");}
     else{sendMessage("That's not a command!");}) 
  }



  client.login(process.env.BOT_TOKEN);
