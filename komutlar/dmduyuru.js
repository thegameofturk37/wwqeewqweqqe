const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('<a:Basarisizzz:604229772142444554> Millete ne yazcam amq');
  message.delete();
      const mesajat = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('' + mesaj + '')

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dd','dmd','dm'],
  permLevel: 4
};

exports.help = {
  name: 'dmduyuru',
  description: 'Tüm Herkese Mesaj Atar.',
  usage: '*dmduyuru [duyurmak istediğiniz şey]'
};