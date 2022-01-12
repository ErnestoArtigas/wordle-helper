const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require('./config.json');

const scoreMap = new Map();
scoreMap.set("1", 20);
scoreMap.set("2", 15);
scoreMap.set("3", 10);
scoreMap.set("4", 8);
scoreMap.set("5", 6);
scoreMap.set("6", 4);
scoreMap.set("X", 2);

client.once('ready', () => {
	console.log('Ready!');
});

client.on("message", message => {
	if (message.author.bot) return;
	let args = message.content.trim().split(/\n/);
	args = args[0].split(" ")

	if (args[0] != "Wordle") return;

	try {
		console.log("arguments : ", args);
		console.log("arguments[2] : ", args[2]);
		let index = args[2].split("/")[0];
		if (scoreMap.get(index) == undefined) return;
		let score = scoreMap.get(index);
		let username = message.author.username;
		let channel = client.channels.cache.find(ch => ch.name === "test-bot");
		if (channel == undefined) return;
		channel.send(`s!points add "${username}" Wordle ${score}`);
	} catch (error) {
		console.log(error);
	}
});

client.login(token);