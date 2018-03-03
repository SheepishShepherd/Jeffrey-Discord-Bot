const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {console.log('Jeffrey is ready to play!');});
client.on('message', message => {
  if(message.content.charAt() !== '/'){return;}
  else if(message.content === '/ping'){message.reply('PONG! :ping_pong:');}
  else if(message.content === '/help'){message.reply('Go to the Help Channel ya doofus!');}
  else {message.reply("That's not a command, silly!");}
});

client.login(process.env.BOT_TOKEN);
