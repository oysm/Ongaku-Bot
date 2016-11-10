const Discord = require('discord.js');
const bot = new Discord.Client();
var Config;

try {
  Config = require('./config.json')
} catch (e) {
  console.log('\n\'config.json\' not found.')
  process.exit()
}


// Ready
bot.on('ready', () => {
  console.log('bot is ready');
});

// listen for test command
bot.on('message', message => {
  if (message.content === '.test') {
    message.channel.sendMessage("it works");
    message.delete('message', 1500);
  }
});

// Log in
bot.login(Config.bot.token);

// Auth link 
// discordapp.com/oauth2/authorize?client_id= &scope=bot&permissions=37223488
