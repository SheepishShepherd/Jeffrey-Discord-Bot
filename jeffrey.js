const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {console.log('Jeffrey is ready to play!');});

client.on('message', message => {
  if(message.content.charAt(0) !== '/'){return;}
  
  else if(message.content === '/ping'){message.reply('PONG! :ping_pong:');}
  
  else if(message.content === '/help'){message.reply('Go to the Help Channel ya doofus!');}
  
  else if(message.content === '/roll d6'){
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    if(randomNumber = 1){files: [/Images/GameProps/D6/d6_1.jpg]}
    if(randomNumber = 2){files: [/Images/GameProps/D6/d6_2.jpg]}
    if(randomNumber = 3){files: [/Images/GameProps/D6/d6_3.jpg]}
    if(randomNumber = 4){files: [/Images/GameProps/D6/d6_4.jpg]}
    if(randomNumber = 5){files: [/Images/GameProps/D6/d6_5.jpg]}
    if(randomNumber = 6){files: [/Images/GameProps/D6/d6_6.jpg]}
    else {return randomNumber;}}
  
  else {message.reply("That's not a command, silly!").then(msg => {msg.delete(10000)})
    .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);}
});

client.login(process.env.BOT_TOKEN);
