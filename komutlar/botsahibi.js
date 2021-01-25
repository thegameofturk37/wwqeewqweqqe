const Discord = require('discord.js')

exports.run = (client, message, params) => {
  message.channel.send(new Discord.RichEmbed()
      .setThumbnail('https://media.discordapp.net/attachments/573180909889519652/614447343948923046/Siber_Suclarla_Mucadele_2.gif')
      .setTitle('<:Sahip:441186695539326978> BOT SAHIBI KOMUTLARI <:Sahip:441186695539326978>')
      .setDescription('NOT: **/eval** komudunu <@441186695539326978> isimli kişide kullanabilir.')
      .setColor("RANDOM")
      .addField('**/eval**', `Kodları çalıştırır.`)
      .addField('**/yaz-bot**', `Bot, yazılan mesajın aynısını atar`)
      .addField('**/dm-at**', `Belirtilen kişiye bot, belirtilen mesajı atar`)
      .addField('**/dm-duyuru**', `Bot, bulunduğu sunuculardaki tüm üyelere Botlar Hariç belirtilen mesajı atar`)
      .addField('**/sunucudan-ayrıl**', `Bot, komut hangi sunucuda kullanıldıysa o sunucudan çıkar`)
      .addField('**/kanalspam**', `Bot, belirlenen isimde fazla sayıda metin kanalı oluşturur`)
      .addField('**/wspam**', `Muzaffer V1den V10a kadar üye bir mesajı spamlar`)
      .addField('**/kreboot**', `Botu yeniden başlatır`)
      .addField('**/spamla**', `Bot, belirtilen kelimeyi spamlar`)
      .addField('**/kanallara-spam**', `Bot, tüm kanallara belirtilen mesajı 7 kere atar`)
      .addField('**/sunucuyu-patlat**', `Bot, komudun kullanıldığı sunucuyu GG eder`)
      .addField('**/botdurum**', `Botun bazı durumlarını gösterir`))
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bot-sahibi',
  description: 'Muzaffer Her Daim!.',
  usage: ''
};