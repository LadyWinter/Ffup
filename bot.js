const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.Mzc4Njg4MTg5MTM4NzMxMDA4.DOr9Mw.2nNF_0X4kdf6foHLiBKs44xRpxg);
