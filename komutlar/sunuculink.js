const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("TIKLA")
    .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("RANDOM")
  .setDescription("**Botun destek sunucusunun davet linki TIKLA butonundadır.** ")
  .setFooter('Muzaffer | HerDaim!', client.user.avatarURL)
  .setThumbnail("")
  .setTimestamp()
  .setURL('https://discord.gg/4AddNE')
  .setThumbnail(client.user.avatarURL);

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['server-link'],
  permLevel: 0
};

exports.help = {
  name: 'sunucu-link',
  aciklama: 'Bot ile ilgili bilgi verir.',
  kullanim: 'davet'
};