const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {console.log('Jeffrey is ready to play!');});

client.on('message', message => {
  if(message.content.indexOf(config.prefix) !== 0){return;}
  else if(message.content === '/ping'){message.reply('PONG! :ping_pong:');}
  else if(message.content === '/help'){message.reply('Go to the Help Channel ya doofus!');}
  else {message.reply("That's not a command, silly!") .then(msg => {msg.delete(10000)})
  .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);}
});

client.login(process.env.BOT_TOKEN);
