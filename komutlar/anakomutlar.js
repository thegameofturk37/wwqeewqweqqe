const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("https://media.discordapp.net/attachments/573180909889519652/614447343948923046/Siber_Suclarla_Mucadele_2.gif")
  .setTitle("**<a:Yildiz:599593819171717140> BOT Ana Komutları <a:Yildiz:599593819171717140> **")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**/*reklamtaraması**", `Oynuyor yerine reklam yapan varmı diye tarama yapar.`)
  .addField("**/*sunucular**", `Botun bulunduğu sunucuları gösterir.`)
  .addField("**/*yardım**", `Bot komutlarını gösterir.`)
  .addField("**/*bilgi**", `Bot, bilgilerini gösterir.`)
  .addField("**/*ping**", `Botun gecikme süresini öğrenirsiniz.`)
  .addField("**/*davet**", `Botun davet linkini gösterir.`)
  .addField("**/*istatistik**",` Bot istatistiklerini gösterir.`)
  
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
  aliases: ['ana-komutlar'],
  permLevel: 0
};

exports.help = {
  name: 'anakomutlar',
  description: 'Ana komutları gösterir.',
  usage: 'anakomutlar'
};