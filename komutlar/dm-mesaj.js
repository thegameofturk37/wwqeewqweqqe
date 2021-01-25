const Discord = require('discord.js');


exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('<a:Basarisizzz:604229772142444554> Yanlış Kullandınız \nDoğru Kullanım: **/mesajat \<Kişi\> \<Yazı\> ')
let kursatt = message.mentions.users.first()
if (kursatt.length < 1) return message.reply('<a:Basarisizzz:604229772142444554> Yanlış Kullandınız \nDoğru Kullanım: **/mesajat \<Kişi\> \<Yazı\> ');
  
  kursatt.send(new Discord.RichEmbed()
               .setTitle('')
               .setColor('RANDOM')
               .setThumbnail(kursatt.avatarURL)
               .addField('** **',mesaj))
  
  message.channel.send(new Discord.RichEmbed()
                       .setTitle('')
                       .setColor('GREEN')
                       .setThumbnail(message.author.avatarURL)
                       .addField('**<a:Basariliii:604229636750180362> Başarılı <a:Basariliii:604229636750180362>**', kursatt + ` İsimli kullanıcıya **` + mesaj + `** isimli mesaj gönderildi`))
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'mesajat',
  description: 'Muzaffer Her Daim!.',
  usage: ''
};