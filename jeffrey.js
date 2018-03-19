  const Discord = require('discord.js');
  const client = new Discord.Client();
  const prefix = "/";

//Files for the dice images. d stands for dice and f stands for face.
  var d6f1 = "{file: 'https://raw.githubusercontent.com/SheepishShepherd/Jeffrey-Discord-Bot/master/Images/GameProps/D6/d6_1.png'"};
  var d6f2 = "{file: 'https://raw.githubusercontent.com/SheepishShepherd/Jeffrey-Discord-Bot/master/Images/GameProps/D6/d6_2.png'"};
  var d6f3 = "{file: 'https://raw.githubusercontent.com/SheepishShepherd/Jeffrey-Discord-Bot/master/Images/GameProps/D6/d6_3.png'"};
  var d6f4 = "{file: 'https://raw.githubusercontent.com/SheepishShepherd/Jeffrey-Discord-Bot/master/Images/GameProps/D6/d6_4.png'"};
  var d6f5 = "{file: 'https://raw.githubusercontent.com/SheepishShepherd/Jeffrey-Discord-Bot/master/Images/GameProps/D6/d6_5.png'"};
  var d6f6 = "{file: 'https://raw.githubusercontent.com/SheepishShepherd/Jeffrey-Discord-Bot/master/Images/GameProps/D6/d6_6.png'"};

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
             if(rolld6 == 1){message.reply('has rolled a 1!', d6f1);}
        else if(rolld6 == 2){message.reply('has rolled a 2!', d6f2);}
        else if(rolld6 == 3){message.reply('has rolled a 3!', d6f3);}
        else if(rolld6 == 4){message.reply('has rolled a 4!', d6f4);}
        else if(rolld6 == 5){message.reply('has rolled a 5!', d6f5);}
        else if(rolld6 == 6){message.reply('has rolled a 6!', d6f6);}}
//User rolls a die

      else {message.reply("That's not a command, silly!").then(msg => {msg.delete(10000)})
      .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);}
//If the user tries to use a command that does not exist, the bot will state so.
  });

  client.login(process.env.BOT_TOKEN);
