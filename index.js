const Discord = require('discord.js'); //import client from discord
const keep_alive = require('./keep_alive.js')

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    // check if message isn't from us
    if (msg.author == client.user) {
      return;
    }
    else if (msg.content === 'ping') {
      msg.reply('Pong!');
    }
  else if (msg.content === 'What is Formula X') {
      msg.reply('Formula X is a custom Formula Series that drives on custom and real tracks');
    }
});

client.login(process.env.TOKEN); //login bot using token
