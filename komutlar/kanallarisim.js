const Discord = require('discord.js');

exports.run = function (client, message, args) {
let kursat = args.slice(0).join(' ');
if (kursat.length < 1) return message.channel.send(new Discord.RichEmbed()
                    .setTitle('')
                    .setThumbnail('')
                    .addField('<a:Basarisizzz:441186695539326978> **Yanlış Kullandınız**', `Doğru Kullanım: **/kanallar-isim \<Kelime\>**`))
  
  message.guild.channels.forEach(channel => channel.setName())
  message.channel.send(new Discord.RichEmbed()
                       .setTitle('')
                       .setColor('RANDOM')
                       .setThumbnail(message.author.avatarURL)
                       .addField('<a:Basariliii:441186695539326978> İşlem başarılı', `Kanalların İsmi Başarıyla **` +  + `** olarak ayarlandı`))
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'kanallar-isim',
  description: 'Neptune Her Daim!.',
  usage: '.'
};