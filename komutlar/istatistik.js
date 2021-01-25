const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")
   const istatistikler = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('Neptune | Her Daim!', client.user.avatarURL)
  .addField("<a:buyuh:599593917121560589> Bot Yapımcısı",  "<@441186695539326978>")
  .addField("<a:buyuh:599593917121560589> Bellek kullanımı", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB", true)
  .addField("<a:buyuh:599593917121560589> Çalışma süresi", duration)
  .addField("<a:buyuh:599593917121560589> Sunucu sayısı", client.guilds.size.toLocaleString(), true)
  .addField("<a:buyuh:599593917121560589> Kanal sayısı", client.channels.size.toLocaleString(), true)
  .addField("<a:buyuh:599593917121560589> Discord.JS sürüm", "V "+Discord.version, true)
  .addField("<a:buyuh:599593917121560589> Gecikme süresi", client.ping+" ms", true)
  .addField("<a:buyuh:599593917121560589> Bağlantılar", `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=617982732877692937&scope=bot&permissions=805829694)` + "** | **" + `[Destek Sunucusu](https://discord.gg/FZE4hA5)`, false);
  return msg.channel.send(istatistikler);
  };


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'c',
  usage: 'istatistik'
};