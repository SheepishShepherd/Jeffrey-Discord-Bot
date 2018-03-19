  const Discord = require('discord.js');
  const client = new Discord.Client();
  const prefix = "/";

  client.on('ready', () => {console.log('Jeffrey is ready to play!');});

  client.on('message', function(message) {
    if (!message.content.startsWith(prefix) || message.author.equals(client.user)) return;
//If the message does not start with the set prefix, the bot will ignore the message.
    
    var args = message.content.substring(prefix.length).split(" ");
    
    switch(args[0].toLowerCase()) {
    
        case "ping":
        message.reply('PONG! :ping_pong:');
        break;
        //Replies "Pong!" if the user uses /ping
        
        default:
        message.channel.sendMessage("That's not a command, silly!");
    }

  });

  client.login(process.env.BOT_TOKEN);
