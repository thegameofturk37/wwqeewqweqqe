const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (message.channel.type !== "group") {
        var Durum = message.author.presence.status;
        var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        var durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
      const kullanicibilgimk = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(Durm)
      .setTimestamp()
      .addField('<a:buyuh:599593917121560589> İsminiz:', message.author.username + '#' + message.author.discriminator)
      .addField('<a:buyuh:599593917121560589> ID:', message.author.id)
      .addField('<a:buyuh:599593917121560589> Kayıt tarihi:', message.author.createdAt)
      .addField('<a:buyuh:599593917121560589> Durum:', durm)
      .addField('<a:buyuh:599593917121560589> Şu an oynadığı oyun:', message.author.presence.game ? message.author.presence.game.name : '<a:Basarisizzz:604229772142444554> Şu an oyun oynamıyor')
      .addField('<a:buyuh:599593917121560589> BOT mu?', message.author.bot ? '\n <a:Basariliii:604229636750180362> Evet' : '<a:Basarisizzz:604229772142444554> Hayır')
      message.react('599596679771193354')
      console.log("<a:buyuh:599593917121560589> kullanıcıbilgim komutu " + message.author.username + " tarafından kullanıldı.")
      return message.channel.sendEmbed(kullanicibilgimk);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kbilgim'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcıbilgim',
  description: 'Komutu kullanan kişi hakkında bilgi verir.',
  usage: 'kullanıcıbilgim'
};
