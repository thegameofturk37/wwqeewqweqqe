const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("https://media.discordapp.net/attachments/573180909889519652/614447343948923046/Siber_Suclarla_Mucadele_2.gif")
  .setTitle("<a:Zumrut:599593766218629141> Komutlar <a:Zumrut:599593766218629141> ")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Hazır sunucu kurmak istiyorsan**",  ` /sunucukur Komutunu kullanabilirsin.`)
    .addField("**! Önemli !**  ", `Hata Varsa Yapımcıma Bildir : \)`) 
  .addField(" **Eğlence**", `Eğlence Komutlarını Gösterir. (\`/eğlence\`) `)
  .addField(" **Eğlence 2**", `Eğlence Komutlarının Devamını Gösterir. (\`/eğlence2\`) `) 
  .addField(" **Yetkili**", `Yetkili Komutlarını Gösterir. (\`/yetkili\`) `) 
  .addField(" **ana komutlar**", `Ana Komutları Gösterir. (\`/anakomutlar\`) `)
  .addField(" **Bot Sahibi Komutları**", `Sadece bot sahibinin kullanabileceği komutları gösterir. \(\`/bot-sahibi\`\) `)
  .addField("**Discord Sunucumuz:**",`**/sunucu-link** komudunda`)
   
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
    message.react('598242400976109755')
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
  aliases: ['komutlar'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
 