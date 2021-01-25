const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("Beni eklemek için tıkla")
    .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("RANDOM")
  .setDescription("**Bu kişiyede saygı babamdır sonuçta: <@441186695539326978>** ")
  .setFooter('Muzaffer | HerDaim!', client.user.avatarURL)
  .setThumbnail("")
  .setTimestamp()
  .setURL('https://discordapp.com/oauth2/authorize?client_id=617982732877692937&scope=bot&permissions=805829694')
  .setThumbnail(client.user.avatarURL);

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  aciklama: 'Bot ile ilgili bilgi verir.',
  kullanim: 'davet'
};