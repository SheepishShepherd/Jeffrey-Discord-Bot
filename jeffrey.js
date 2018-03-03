const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {console.log('Jeffrey is ready to play!');});
client.on('message', message => {if(message.content === '/ping'){message.reply('PONG! :ping_pong:');}});
client.on('message', message => {if(message.content === '/help'){message.reply('Go to the Help Channel ya doofus!');}});

client.login(process.env.BOT_TOKEN);
