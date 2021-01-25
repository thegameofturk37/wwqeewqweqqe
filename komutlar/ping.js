const Discord = require('discord.js');


exports.run = function(client, message, args) {
  let botkişi = client.user
  message.channel.send(new Discord.RichEmbed()
                       .setTitle('')
                       .setThumbnail(botkişi.avatarURL)
                       .setColor('RANDOM')
                       .addField('**Bot Pingi**', `Bot Gecikme süresi __` + client.ping + `__ Ms`)
                       .setFooter('Neptune | HerDaim'))
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Neptune Her Daim!.',
  usage: ''
};