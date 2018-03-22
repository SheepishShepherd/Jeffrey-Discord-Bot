  const Discord = require('discord.js');
  const bot = new Discord.Client();
  const prefix = "!";

  bot.on('ready', () => {console.log('Jeffrey is ready to play!');});

//Gives new users the "Sheep" role
  bot.on('guildMemberAdd', member => {
    var sheepRole = member.guild.roles.find("name", "Sheep");
    member.addRole(sheepRole); 
  });

//If the message does not start with the set prefix, the bot will ignore the message.
  bot.on('message', message => {
    if(!message.content.startsWith(prefix)) return;
    if(message.author.equals(bot.user)) return;
    
    var args = message.content.substring(prefix.length).split(" ");
    switch (args[0].toLowerCase()) {  
        
//Replies "Pong!" if the user uses /ping
        case "ping":
          message.reply('PONG! :ping_pong:');
          break;

//Refers the help channel for a command list
        case "help":
          message.channel.send('If you need help with commands, go to #command-list');
          break;

//TEST COMMAND
        case "test":
          message.reply('Test test 123');
          break;
//Show a user their ID Card in the form of an Embed
        case "profile":
            var roleA = message.guild.roles.find("name", "The Shepherd");
            var roleB = message.guild.roles.find("name", "Bot");
            var roleC = message.guild.roles.find("name", "Shepherd Helpers");
            var roleD = message.guild.roles.find("name", "Sheep Companions");
            var roleE = message.guild.roles.find("name", "The Sheep");
            var roleColor = "0xfffeda";
            var roleName = "Sheep";
          if(!args[1]){
            //If the user does NOT mention anyone, it defaults to themselves
            var nickNameP = message.member.nickname;
            if (message.member.roles.has(roleA.id)) {roleColor = "0xffaa00"; roleName = "The Shepherd";}
              else if (message.member.roles.has(roleB.id)) {roleColor = "0xff6464"; roleName = "Bot";}
              else if (message.member.roles.has(roleC.id)) {roleColor = "0x80b6e5"; roleName = "Sheep Helper";}
              else if (message.member.roles.has(roleD.id)) {roleColor = "0xd9b3ff"; roleName = "Sheep Companion";}
              else {roleColor = "0xfffeda"; roleName = "Sheep";}
            if (nickNameP == null){nickNameP = "No Nickname";}
            var prof = new Discord.RichEmbed()
              .addField(message.author.username, nickNameP)
              .addField("PlaceHolder1", "PlaceHolder2")
              .setFooter(roleName)
              .setColor(roleColor)
              .setThumbnail(message.author.avatarURL)
            message.channel.sendEmbed(prof);
          }
          else if(args[1]){
            //If the user does mention anyone, pulls the mentioned user's data
            var mentM = message.mentions.members.first();
            var mentU = message.mentions.users.first();
            var nickNameMP = mentM.nickname;
            if (mentM.roles.has(roleA.id)) {roleColor = "0xffaa00"; roleName = "The Shepherd";}
              else if (mentM.roles.has(roleB.id)) {roleColor = "0xff6464"; roleName = "Bot";}
              else if (mentM.roles.has(roleC.id)) {roleColor = "0x80b6e5"; roleName = "Sheep Helper";}
              else if (mentM.roles.has(roleD.id)) {roleColor = "0xd9b3ff"; roleName = "Sheep Companion";}
              else {roleColor = "0xfffeda"; roleName = "Sheep";}
            if (nickNameMP == null){nickNameMP = "No Nickname";}
            var prof = new Discord.RichEmbed()
              .addField(mentU.username, nickNameMP)
              .addField("PlaceHolder1", "PlaceHolder2")
              .setFooter(roleName)
              .setColor(roleColor)
              .setThumbnail(mentU.displayAvatarURL)
            message.channel.sendEmbed(prof);
          }
          else{message.channel.send("I broke...");}
        break;

//Flips a coin that lands on either heads or tails
        case "flip":
          var flip = Math.floor((Math.random() * 2) + 1);
          if(flip == 1){message.reply("got heads!");}
          else if(flip == 2){message.reply("got tails!");}
          else{message.reply("flipped a coin!");}
          break;
        
//Rolls a die based on inputs of the user
        case "roll":
          if(!args[1]){
            var roll = Math.floor((Math.random() * 6) + 1);
            var rolln = roll.toString();
            message.reply("rolled a " + rolln + "!");}

          else if(args[1]){
            if(args[1] == "6"){
              var d6roll = Math.floor((Math.random() * 6) + 1);
              var roll6 = d6roll.toString();
              message.reply("rolled a " + roll6 + "!");
            
            else if(args[1] == "20"){
              var d20roll = Math.floor((Math.random() * 20) + 1);
              var roll20 = d20roll.toString();
              message.reply("rolled a " + roll20 + "!");
            
            else{message.channel.send("That's not a valid number!");}}
        
          else{return;}
          break;
        
//If the user tries to run a command that does not exist, the bot will state so
        default:
          message.channel.send("That's not a command, silly!").then(msg => {msg.delete(10000)}).catch();
    }
  });
    
  bot.login(process.env.BOT_TOKEN);
