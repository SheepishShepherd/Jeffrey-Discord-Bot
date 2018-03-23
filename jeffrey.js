  const Discord = require('discord.js');
  const bot = new Discord.Client();
  const prefix = "!";
  const talkedRecently = new Set();

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
          message.channel.send('If you need help with commands, go to #command-list ');
        break;
        
//Pet
        case "pet":
          if(message.channel.id === '426836936489959445'){
            if (talkedRecently.has(message.author.id)) {
              message.channel.send("I like pets and all " + message.author.username + ", but I need a minute.");}
            else{message.channel.send("This will later have a reward...",{files: ["https://raw.githubusercontent.com/SheepishShepherd/Jeffrey-Discord-Bot/master/Images/Jeffrey/cuteJeffrey.jpg"]});
            talkedRecently.add(message.author.id);
            setTimeout(() => {talkedRecently.delete(message.author.id);}, 60000);
            }
          }
          else{
            message.delete(1)).catch();
            var errMessPet = new Discord.RichEmbed()
              .setColor(0xcc0000)
              .setTitle("This command can only be used in #jeffreys-area ")
            message.channel.sendEmbed(errMessPet).then(msg => {msg.delete(10000)}).catch();
          }
        break;

//TEST COMMAND
        case "test":
          var num = 6;
          var numS = num.toString();
          message.channel.send(num);
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
              .addBlankField()
              .setFooter(roleName)
              .setColor(roleColor)
              .setThumbnail(message.author.avatarURL)
            message.channel.sendEmbed(prof);
          }
          else if(args[1] && args[1] == message.mentions.members.first()){
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
              .addBlankField()
              .setFooter(roleName)
              .setColor(roleColor)
              .setThumbnail(mentU.displayAvatarURL)
            message.channel.sendEmbed(prof);
          }
          else{message.channel.send("I don't think that person exists...");}
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
           var roll6 = Math.floor((Math.random() * 6) + 1);
           var roll20 = Math.floor((Math.random() * 20) + 1);
           if(!args[1]){message.reply("rolled a " + roll6 + "!");} 
           else if(args[1]){
             if(args[1] == "6"){message.reply("rolled a " + roll6 + "!");}
             else if(args[1] == "20"){message.reply("rolled a " + roll20 + "!");}
             else{message.channel.send("I don't have a die with that many sides!");}}
           else{return;}
         break;

//Survey
        case "survey":
          if(message.member.roles.has(message.guild.roles.find("name", "The Shepherd").id))
          {message.channel.send("Admin only! That's you!");}
          else{message.channel.send("Sorry! But you aren't allowed to do that!");}
        break;
        
//If the user tries to run a command that does not exist, the bot will state so
        default:
          message.channel.send("That's not a command, silly!").then(msg => {msg.delete(10000)}).catch();
    }
  });
    
  bot.login(process.env.BOT_TOKEN);
