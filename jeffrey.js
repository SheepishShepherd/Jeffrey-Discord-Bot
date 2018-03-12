  const Discord = require('discord.js');
  const client = new Discord.Client();
  const prefix = "/";

  client.on('ready', () => {console.log('Jeffrey is ready to play!');});

  client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
//If the message does not start with the set prefix, the bot will ignore the message.

    if(message.content.startsWith(prefix + "ping")){message.reply('PONG! :ping_pong:');}
//Replies "Pong!" if the user uses /ping

      else
    if(message.content.startsWith(prefix + "help")){message.channel.send('If you need help with commands, go to #command-list');}
//Redirects a user to the command-list channel for help with the bot.

      else
    if(message.content.startsWith(prefix + "roll")){
        message.delete(1);
        var rolld6 = Math.floor((Math.random() * 6) + 1);
             if(rolld6 == 1){message.reply('has rolled a 1!', {file: "https://raw.githubusercontent.com/SheepishShepherd/Jeffrey-Discord-Bot/master/Images/GameProps/D6/d6_1.png"});}
        else if(rolld6 == 2){message.reply('has rolled a 2!', {file: "https://raw.githubusercontent.com/SheepishShepherd/Jeffrey-Discord-Bot/master/Images/GameProps/D6/d6_2.png"});}
        else if(rolld6 == 3){message.reply('has rolled a 3!', {file: "https://raw.githubusercontent.com/SheepishShepherd/Jeffrey-Discord-Bot/master/Images/GameProps/D6/d6_3.png"});}
        else if(rolld6 == 4){message.reply('has rolled a 4!', {file: "https://raw.githubusercontent.com/SheepishShepherd/Jeffrey-Discord-Bot/master/Images/GameProps/D6/d6_4.png"});}
        else if(rolld6 == 5){message.reply('has rolled a 5!', {file: "https://raw.githubusercontent.com/SheepishShepherd/Jeffrey-Discord-Bot/master/Images/GameProps/D6/d6_5.png"});}
        else if(rolld6 == 6){message.reply('has rolled a 6!', {file: "https://raw.githubusercontent.com/SheepishShepherd/Jeffrey-Discord-Bot/master/Images/GameProps/D6/d6_6.png"});}}
//User rolls a die

      else {message.reply("That's not a command, silly!").then(msg => {msg.delete(10000)})
      .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);}
//If the user tries to use a command that does not exist, the bot will state so.
  });

  client.login(process.env.BOT_TOKEN);
