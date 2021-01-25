const Discord = require('discord.js');


exports.run = function(client, message) {

	const embed = new Discord.RichEmbed()
		.setDescription("**Yak Yak Yak**")
		.setImage("https://media.discordapp.net/attachments/588391574057123850/593836016192847933/ss.jpg")
	
	message.channel.send(embed)
  message.react('🚬')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sigara',
  description: 'Sigara iç belki sürpriz olabilir :)',
  usage: 'sigara'
};
