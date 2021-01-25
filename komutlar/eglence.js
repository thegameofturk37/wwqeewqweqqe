const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("https://media.discordapp.net/attachments/573180909889519652/614447343948923046/Siber_Suclarla_Mucadele_2.gif")
  .setTitle("**<a:HyperTada:598219950489993217> Eğlence <a:HyperTada:598219950489993217> **")
  .setDescription('')
  .setColor('RANDOM')
  .addField("**Eğlence Komutları**", `.`)
  .addField("**/balıktut = Balık Tutarsınız**", `**/1vs1 = 1 VS 1**`)
  .addField("**/bjk = avatarınıza beşiktaş efekti verir.**", `**/tavsiye = Tavsiyenizi Yapımcıya İletir**`)
  .addField("**/fb = avatarınıza fenerbahçe efekti verir.**", `**/gs = Avatarınıza GS Efekti verir**`)
  .addField("**/kartopu = Etiketldeiğiniz Kişiye kartopu atarsınız.**", `**/öneri = tavsiye var artk**`)
  .addField("**/özlüsöz = yakında**", `**/sik = Etiketlediğiniz kişiyi sikersiniz.**`)
  .addField("**/brilliance = Avatarınıza Brilliance Efekti Verir.**", `**/çekiliş = Sunucudaki Üyeler Arasında Çekiliş Yaparsınız..**`)
  .addField("**/kralol = yakında**", `**/bravery = Avatarınıza Bravery Efekti Verir.**`)
  .addField("**/level = THE KAPALI.**", `**/korkut = İstediğiniz Kişiyi Korkutursunuz**`)
  .addField("**/fakemesaj  = Fake Mesaj Atar**", `**/atatürk-çerçeve = Avatarınıza Ataürk Çerçevesi Ekler.**`)
  .addField("**/trigger  = Avatarınıza Triggered Efekti Verir.**", `**/simit = Simit Yersiniz.**`)
  .addField("**/rastgeleşifre  = Rastgele Şifre Oluşturur.**", `**/bayrak = Bayrak **`)
  .addField("**/kaslı = yakında**", `**/tersrenk = Avatarınızın Rengini Tersine Çevirir.**`)
  .addField("**/sniper = yakında**", `**/wasted = Avatarınıza Wasted Efekti Verir.**`)  
  .addField("**/reklamlar = Rek-lam-lar.**", `**/su = Nitro Çok Susadı! Ona Su Ver**`)  
  .addField("**/kurabiye = yakında**", `**/nahçek = İstediğin Kişiye Nah Çekersin**`)   
  .addField("**/kedi = yakında**", `**/bilezik = Bilezik Alırsınız.**`) 
  .addField("**/ascii**", `**Ascii Yazı Yazmanızı Sağlar.** `) 
  .addField("**/mcbaşarım**", `**Mesajınızı Minecraft Başarımına Dönüştürür.**`) 
  .addField("**/geldim & /afk** = **yakında**", `**/atatürk** = **Atatürk Resimleri Gösterir.**`) 
  .addField("**gizli**", `**/espri = yakında** `) 
  .addField("**/kgif = yakında**", `**/tokat = İstediğiniz Kişiye Tokat Atarsınız**`) 
  .addField("**/slots = Slots Oyunu :YENİ:**", `**/tr** = Avatarınıza TR efekti ekler :YENİ:`)
  .addField("**EĞLENCE KOMUTLARININ DEVAMI İÇİN /eğlence2**", `**-----------**`) 

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['e-komutlar'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Eğlence komutlarını gösterir.',
  usage: 'eğlence'
};
