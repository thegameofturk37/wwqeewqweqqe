const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");
exports.run = function(client, message, args) {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")
  let oynuyoru = client.user.presence.game.name
  let botping = client.ping
  let durumu = client.user.presence.status
  let botid = client.user.id
  let profilresmi = client.user.avatarURL
  var Durum = message.author.presence.status;
  var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
  var durm = (Durum == "online" ? ("<:aktif:609084520100003877> Çevrimiçi") : (Durum == "offline" ? ("<:cevrimdisi:609084315887992838> Çevrimdışı") : (Durum == "idle" ? ("<:bosta:609084481701281830> Boşta") : (Durum == "dnd" ? ("<:dnd:609084380903637015> Rahatsız Etmeyin") : ("<:Carpi:608070477549797387> Bulunamadı!")))))
  
  message.channel.send(new Discord.RichEmbed()
                       .setTitle('BOT AYARLARI')
                       .setThumbnail(profilresmi)
                       .setColor("RANDOM")
                       .addField('<a:buyuh:599593917121560589> Bot Durumu', durm)
                       .addField('<a:buyuh:599593917121560589> Oynuyoru', oynuyoru)
                       .addField('<a:buyuh:599593917121560589> Bot ID', botid)
                       .addField('<a:buyuh:599593917121560589> Çalışma Süresi', duration)
                       .addField('<a:buyuh:599593917121560589> Gecikme Süresi', botping)
                       .setFooter('《Kodlayan: Muzaffer》'))
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'botdurum',
  description: 'Neptune Her Daim!.',
  usage: ''
};