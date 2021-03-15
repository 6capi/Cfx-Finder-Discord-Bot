//      _                              _ 
//     | |                            (_)
//   __| | _____   __   ___ __ _ _ __  _ 
//  / _` |/ _ \ \ / /  / __/ _` | '_ \| |
// | (_| |  __/\ V /  | (_| (_| | |_) | |
//  \__,_|\___| \_/    \___\__,_| .__/|_|
//                              | |      
//                              |_|      

const Discord = require('discord.js')
const client = new Discord.Client();
const prefix = '-'
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr = new XMLHttpRequest();

client.login('your discord bot token :)');

client.on('ready', () => {
	console.log(`dev by capi`, "ready");	
});

function Main(url, channel) {
	try {
		do {
			var req = new XMLHttpRequest();
			req.open('GET', url, false);
			req.send(null);
			var headers = req.getResponseHeader('x-citizenfx-url');
		}while(headers.includes('https'))
		if(headers.includes('https://')) {				
		} else {
			const location = client.channels.cache.get(channel);
			const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Cfx Finder - Developed by capi')
			.addFields(
			{ name: 'CFX', value: url },
			{ name: 'IP Address', value: headers },
			)
			.setTimestamp()
			.setFooter('lmk capi#7926 | dev');
			location.send(exampleEmbed);
		}		
	} catch(err) {
	}
}

client.on("message", function(message) {
if (!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();
if (command === 'find') {
const link = args[0];
	if (!args.length) {
		const exampleEmbed33 = new Discord.MessageEmbed()
			.setColor('#f00028')
			.setTitle('Error.')
			.setDescription(`You didn't provide any arguments, ${message.author}!`)
			.setTimestamp()
			.setFooter('Error.');
				message.channel.send(exampleEmbed33); 
} else if(link.includes('https://')) {
	const channel = message.channel.id;
	Main(link, channel);
} else {
	const exampleEmbed33 = new Discord.MessageEmbed()
	.setColor('#f00028')
	.setTitle('Error.')
	.setDescription(`Invalid URL, ${message.author}!`)
	.setTimestamp()
	.setFooter('Error.');
	message.channel.send(exampleEmbed33);
}
}
});

//      _                              _ 
//     | |                            (_)
//   __| | _____   __   ___ __ _ _ __  _ 
//  / _` |/ _ \ \ / /  / __/ _` | '_ \| |
// | (_| |  __/\ V /  | (_| (_| | |_) | |
//  \__,_|\___| \_/    \___\__,_| .__/|_|
//                              | |      
//                              |_|     
// All this code has been developed by lmk / capi. Help of? Nobody
// lmk#7926