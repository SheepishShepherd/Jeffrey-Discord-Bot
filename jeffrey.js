  const Discord = require('discord.js');
  const client = new Discord.Client();
  const prefix = "/";

  client.on('ready', () => {console.log('Jeffrey is ready to play!');});

  client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
    else{message.reply('Oh hi!')}
  }

  client.login(process.env.BOT_TOKEN);
