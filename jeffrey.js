  const Discord = require('discord.js');
  const bot = new Discord.Client();
  const prefix = "!";

  bot.on('ready', () => {console.log('Jeffrey is ready to play!');});

  bot.on('guildMemberAdd', member => {
    let sheepRole = member.guild.roles.find("name", "Sheep");
    member.addRole(sheepRole); 
  });
//Gives new users the "Sheep" role

  bot.on('message', message => {
    if(!message.content.startsWith(prefix)) return;
    if(message.author.equals(bot.user)) return;
//If the message does not start with the set prefix, the bot will ignore the message.
    
    var args = message.content.substring(prefix.length).split(" ");
    
    switch (args[0].toLowerCase()) {   
        case "ping":
          message.reply('PONG! :ping_pong:');
          break;
//Replies "Pong!" if the user uses /ping

        case "help":
          message.channel.sendMessage('If you need help with commands, go to #command-list');
          break;
//Refers the help channel for a command list
        
        case "profile":
          var prof = new Discord.RichEmbed()
            .addField(message.author.username, message.author.nick)
            .addField("Member")
            .setColor(0X00FFF)
            .setThumbnail(message.author.avatarURL)
          message.channel.sendEmbed(prof);
        break;
        
        case "flip":
          var roll = Math.floor((Math.random() * 2) + 1);
          if(roll == 1){message.reply("got heads!");}
          else if(roll == 2){message.reply("got tails!");}
          else{message.reply("flipped a coin!");}
          break;
//Flips a coin that lands on either heads or tails
        
        case "roll":
          if(!args[1]){
            var roll = Math.floor((Math.random() * 6) + 1);
            if(roll == 1){message.reply("rolled a 1!");}
            else if(roll == 2){message.reply("rolled a 2!");}
            else if(roll == 3){message.reply("rolled a 3!");}
            else if(roll == 4){message.reply("rolled a 4!");}
            else if(roll == 5){message.reply("rolled a 5!");}
            else if(roll == 6){message.reply("rolled a 6!");}
            else {message.reply("rolled a six-sided die!");}
          }

          else if(args[1]){
            if(args[1] == "6"){
              var d6roll = Math.floor((Math.random() * 6) + 1);
              if(d6roll == 1){message.reply("rolled a 1!");}
              else if(d6roll == 2){message.reply("rolled a 2!");}
              else if(d6roll == 3){message.reply("rolled a 3!");}
              else if(d6roll == 4){message.reply("rolled a 4!");}
              else if(d6roll == 5){message.reply("rolled a 5!");}
              else if(d6roll == 6){message.reply("rolled a 6!");}
              else {message.reply("rolled a six-sided die!");}
            }
            else if(args[1] == "20"){
              var d20roll = Math.floor((Math.random() * 20) + 1);
              if(d20roll == 1){message.reply("rolled a 1!");}
              else if(d20roll == 2){message.reply("rolled a 2!");}
              else if(d20roll == 3){message.reply("rolled a 3!");}
              else if(d20roll == 4){message.reply("rolled a 4!");}
              else if(d20roll == 5){message.reply("rolled a 5!");}
              else if(d20roll == 6){message.reply("rolled a 6!");}
              else if(d20roll == 7){message.reply("rolled a 7!");}
              else if(d20roll == 8){message.reply("rolled a 8!");}
              else if(d20roll == 9){message.reply("rolled a 9!");}
              else if(d20roll == 10){message.reply("rolled a 10!");}
              else if(d20roll == 11){message.reply("rolled a 11!");}
              else if(d20roll == 12){message.reply("rolled a 12!");}
              else if(d20roll == 13){message.reply("rolled a 13!");}
              else if(d20roll == 14){message.reply("rolled a 14!");}
              else if(d20roll == 15){message.reply("rolled a 15!");}
              else if(d20roll == 16){message.reply("rolled a 16!");}
              else if(d20roll == 17){message.reply("rolled a 17!");}
              else if(d20roll == 18){message.reply("rolled a 18!");}
              else if(d20roll == 19){message.reply("rolled a 19!");}
              else if(d20roll == 20){message.reply("rolled a 20!");}
              else {message.reply("rolled a twenty-sided die!");}
            }
            else{message.channel.sendMessage("That's not a valid number!");}}
        
          else{return;}
          break;
//Rolls a die based on inputs of the user
        
        default:
          message.channel.sendMessage("That's not a command, silly!").then(msg => {msg.delete(10000)}).catch();
//If the user tries to run a command that does not exist, the bot will state so
    }
  });
    
  bot.login(process.env.BOT_TOKEN);
