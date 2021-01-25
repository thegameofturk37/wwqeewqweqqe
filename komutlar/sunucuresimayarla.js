const Discord = require('discord.js');

exports.run = (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('<a:Basarisizzz:604229772142444554> Bu komutu kullanabilmek için **YÖNETİCİ** iznine sahip olmalısın!');
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('<a:Basarisizzz:604229772142444554> Yanlış Kullandınız \nDoğru Kullanım: /sunucu-resim-ayarla \<ResimLinki\>');
  message.react('s');
  message.guild.setIcon(mesaj);
  message.reply('Başarıyla sunucu resmi ayarlandı')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sunucu-resim-ayarla',
  description: '[Yetkili Komutu]',
  usage: '/sunucu-resim-ayarla [LİNK]'
};