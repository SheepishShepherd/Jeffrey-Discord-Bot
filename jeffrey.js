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
          var ment = message.mentions.members.first();
          if(args[1]){message.channel.send(ment.nickname + " // " + 
                                           ment.username + " // " + 
                                           ment + " // " + 
                                           ment.id + " // " +
                                           message.author.username);}
          else{message.channel.send("You need to mention someone!");}
          break;
//Show a user their ID Card in the form of an Embed
        case "profile":
          if(!args[1]){
            //If the user does NOT mention anyone, it defaults to themselves
            var roleA = message.guild.roles.find("name", "The Shepherd");
            var roleB = message.guild.roles.find("name", "Bot");
            var roleC = message.guild.roles.find("name", "Shepherd Helpers");
            var roleD = message.guild.roles.find("name", "Sheep Companions");
            var roleE = message.guild.roles.find("name", "The Sheep");
            var roleColor = "";
            var roleName = "";
            var nickNameP = message.member.nickname;
            if (message.member.roles.has(roleA.id)) {roleColor = "0xffaa00"; roleName = "The Shepherd";}
              else if (message.member.roles.has(roleB.id)) {roleColor = "0xff6464"; roleName = "Bot";}
              else if (message.member.roles.has(roleC.id)) {roleColor = "0x80b6e5"; roleName = "Sheep Helper";}
              else if (message.member.roles.has(roleD.id)) {roleColor = "0xd9b3ff"; roleName = "Sheep Companion";}
              else {roleColor = "0xfffeda"; roleName = "Sheep";}
            if (nickNameP == null){nickNameP = "Nickname not applied";}
            var prof = new Discord.RichEmbed()
              .addField(message.author.username, nickNameP)
              .addField("PlaceHolder1", "PlaceHolder2")
              .setFooter(roleName)
              .setColor(roleColor)
              .setThumbnail(message.author.avatarURL)
            message.channel.sendEmbed(prof);
          }
          //Applied when the user DOES mention another user
          else if(args[1]){
            var roleA = message.guild.roles.find("name", "The Shepherd");
            var roleB = message.guild.roles.find("name", "Bot");
            var roleC = message.guild.roles.find("name", "Shepherd Helpers");
            var roleD = message.guild.roles.find("name", "Sheep Companions");
            var roleE = message.guild.roles.find("name", "The Sheep");
            var roleColor = "";
            var roleName = "";
            if (message.member.roles.has(roleA.id)) {roleColor = "0xffaa00"; roleName = "The Shepherd";}
              else if (message.member.roles.has(roleB.id)) {roleColor = "0xff6464"; roleName = "Bot";}
              else if (message.member.roles.has(roleC.id)) {roleColor = "0x80b6e5"; roleName = "Sheep Helper";}
              else if (message.member.roles.has(roleD.id)) {roleColor = "0xd9b3ff"; roleName = "Sheep Companion";}
              else {roleColor = "0xfffeda"; roleName = "Sheep";}
            var ment = message.mentions.members.first();
            var prof = new Discord.RichEmbed()
              .addField(ment.name, ment.nickname)
              .setFooter(roleName)
              .setColor(roleColor)
              .setThumbnail(ment.avatarURL)
            message.channel.sendEmbed(prof);
          }
          else{message.channel.send("I broke...");}
        break;

//Flips a coin that lands on either heads or tails
        case "flip":
          var roll = Math.floor((Math.random() * 2) + 1);
          if(roll == 1){message.reply("got heads!");}
          else if(roll == 2){message.reply("got tails!");}
          else{message.reply("flipped a coin!");}
          break;
        
//Rolls a die based on inputs of the user
        case "roll":
          if(!args[1]){
            var roll = Math.floor((Math.random() * 6) + 1);
            if(roll == 1){message.reply("rolled a 1!");}
            else if(roll == 2){message.reply("rolled a 2!");}
            else if(roll == 3){message.reply("rolled a 3!");}
            else if(roll == 4){message.reply("rolled a 4!");}
            else if(roll == 5){message.reply("rolled a 5!");}
            else if(roll == 6){message.reply("rolled a 6!");}
            else {message.reply("rolled a six-sided die!");}}

          else if(args[1]){
            if(args[1] == "6"){
              var d6roll = Math.floor((Math.random() * 6) + 1);
              if(d6roll == 1){message.reply("rolled a 1!");}
              else if(d6roll == 2){message.reply("rolled a 2!");}
              else if(d6roll == 3){message.reply("rolled a 3!");}
              else if(d6roll == 4){message.reply("rolled a 4!");}
              else if(d6roll == 5){message.reply("rolled a 5!");}
              else if(d6roll == 6){message.reply("rolled a 6!");}
              else {message.reply("rolled a six-sided die!");}}
            
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
              
              else {message.reply("rolled a twenty-sided die!");}}
            
            else{message.channel.send("That's not a valid number!");}}
        
          else{return;}
          break;
        
//If the user tries to run a command that does not exist, the bot will state so
        default:
          message.channel.send("That's not a command, silly!").then(msg => {msg.delete(10000)}).catch();
    }
  });
    
  bot.login(process.env.BOT_TOKEN);
