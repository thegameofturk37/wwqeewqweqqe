const Discord = require('discord.js');
exports.run = function(client, message, args) {
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`Profil Fotoğrafınız:`)
.setImage(`${message.author.avatarURL} `)
.setColor(0xf7dc46));
   }


exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'avatarım',
 description: 'Avatarınızı Atar ',
 usage: 'avatarım'
};
