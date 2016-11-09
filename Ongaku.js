const Discord = require('discord.js');
const bot = new Discord.Client();
const token = '';

// Ready
bot.on('ready', () => {
  console.log('bot is ready');
});

// listen for test command
bot.on('message', message => {
  if (message.content === '.test') {
    message.channel.sendMessage("it works");
  }
});

// Log in
bot.login(token);

// Auth link 
// discordapp.com/oauth2/authorize?client_id= &scope=bot&permissions=37223488
