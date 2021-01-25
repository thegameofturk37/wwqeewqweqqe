const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("https://media.discordapp.net/attachments/573180909889519652/614447343948923046/Siber_Suclarla_Mucadele_2.gif")
  .setTitle("**Eğlence2**")
  .setDescription(' ')
  .setColor(0x00ffff)
  .addField("<a:HyperTada:598219950489993217> **Eğlence Komutları 2** <a:HyperTada:598219950489993217>")
  .addField("**/hayvan = Rastgele Hayvan Gifleri**", `**/stresçarkı = Stres Çarkı Çevirirsiniz**`) 
  .addField("**gizli**", `**/pikaçu = Pikaçhuu <3**`)
  .addField("**/yala = Dondurma Yalarsınız :)**", `**/troll = TROLLL**`)
  .addField("**/şanslısayım = Şanslı Sayınızı Gösterir.**", `**/tekmeat = İstediğiniz Kişiye Tekme Atarsınız**`)
  .addField("**/sarıl = Sarılırsınız!**", `**/opendoor = EfBiAy OPEN THE DOOR!**`)
  .addField("**/tkm = Bestle Taş-Kağıt-Makas Oynarsınız. **", `**/starwars = StarWars izlersiniz.**`) 
  .addField("**/kahkaha = yakında**", `**/sigara = Sigara Sağlığa Zararlıdır! **`) 
  .addField("**/urfagönder = yakında**", `**/sins-aga = yakında**`) 
  .addField("**/arkadaşın = yakında**", `**/söv = İstediğiniz Kişiye Söversiniz.**`) 
  .addField("**/emojiyazı = Mesajınızı Emoji Metnine Dönüştürür. **", `**/8ball = Sihirli 8ball Sorularınızı Yanıtlar.**`) 
  .addField("**/avatarım = Avatarınızı Gösterir.**", `**/banned = yakında**`) 
  .addField("**/koş = Koşarsınız **", `**/çayiç = Çay İçersiniz.**`) 
  .addField("**/çekiç = İstediğiniz Kişiye Çekiç Atarsınız**", `**/yumruh-at = İstediğiniz Kişiye Yumruk Atarsınız**`) 
  .addField("**/sunucubilgi = Sunucu Bilgisini Verir**", `**/kullanıcıbilgim = Kullanıcı Bilginizi Verir.**`) 

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
  aliases: ['ekomutlar2'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence2',
  description: 'Eğlence komutlarını gösterir 2.',
  usage: 'eğlence2'
};
