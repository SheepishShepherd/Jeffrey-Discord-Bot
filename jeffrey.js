const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {console.log('Jeffrey is ready to play!');});

client.on('message', message => {
  if(message.content.charAt(0) !== '/'){return;}
  
  else if(message.content === '/ping'){message.reply('PONG! :ping_pong:');}
  
  else if(message.content === '/help'){message.channel.send('If you need help with commands, go to #jeffrey-commands');}
  
  else if(message.content === '/roll'){
    var rolld6 = Math.floor((Math.random() * 6) + 1);
         if(rolld6 == 1){message.reply('has rolled a 1!');}
    else if(rolld6 == 2){message.reply('has rolled a 2!');}
    else if(rolld6 == 3){message.reply('has rolled a 3!');}
    else if(rolld6 == 4){message.reply('has rolled a 4!');}
    else if(rolld6 == 5){message.reply('has rolled a 5!');}
    else if(rolld6 == 6){message.reply('has rolled a 6!');}}
    
  else {message.reply("That's not a command, silly!").then(msg => {msg.delete(10000)})
    .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);}
});

client.login(process.env.BOT_TOKEN);
