  const Discord = require('discord.js');
  const client = new Discord.Client();
  const prefix = "/";

  client.on('ready', () => {console.log('Jeffrey is ready to play!');});



  client.login(process.env.BOT_TOKEN);
