const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<a:Basarisizzz:604229772142444554> Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send("<a:Basarisizzz:604229772142444554> **Kaç Tane Mesajı Sileceğimi Unuttun!**");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(` ${args[0]} Adet Mesajı Sildim. <a:Basariliii:604229636750180362>`).then(msg => msg.delete(5000));
    const botunmesajyonet = new Discord.RichEmbed()
    let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
    const sohbetsilindi = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .addField('Yapılan İşlem:', 'Sohbet Temizleme')
    .addField('Temizleyen: ', message.author.username)
    .addField('Sonuç: ', `Başarılı <a:Basariliii:604229636750180362>`)
    .addField('Kaç Adet', + messagecount)
    return message.channel.sendEmbed(sohbetsilindi).then(msg => msg.delete(5000));
    console.log("**Sohbet " + message.member + " tarafından silindi! **").then(msg => msg.delete(5000));

})
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['temizle', 's-temizle', 'sohbet-temizle'],
  permLevel: 2
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'sil <silinicek mesaj sayısı>'
};