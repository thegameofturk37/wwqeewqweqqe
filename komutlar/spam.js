const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Ne spamlıcam yazmadın.');
  message.delete('');
  message.channel.send(mesaj)
  message.channel.send(mesaj)
  message.channel.send(mesaj)
  message.channel.send(mesaj)
  message.channel.send(mesaj)
  message.channel.send(mesaj)
  message.channel.send(mesaj)
  message.channel.send(mesaj)
  message.channel.send(mesaj)
  message.channel.send(mesaj)
  message.channel.send(mesaj)
  message.channel.send(mesaj)
  message.channel.send(mesaj)
  message.channel.send(mesaj)
  message.channel.send(mesaj)
  message.channel.send(mesaj)
  message.channel.send(mesaj)
  message.channel.send(mesaj)
  message.channel.send(mesaj)
  message.channel.send(mesaj)
  message.channel.send(mesaj)
  message.channel.send(mesaj)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'spamla',
  description: '[Admin Komutu]',
  usage: 'yaz-bot [yazdırmak istediğiniz şey]'
};