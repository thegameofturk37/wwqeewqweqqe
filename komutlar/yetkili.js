const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("https://media.discordapp.net/attachments/573180909889519652/614447343948923046/Siber_Suclarla_Mucadele_2.gif")
  .setTitle("**<a:Anka_:599593672216018964> **Yetkili Komutları <a:Anka_:599593672216018964>**")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**/mlog-ayarla**", `yakında`)
  .addField("**/sunucu-kur**", `Hazır sunucu kurar.`)
  .addField("**/otorol**", `yakında`)
  .addField("**/rol**", `Bir üyeye rol vermenizi sağlar.`)
  .addField("**/mesajküçült**", `Mesajınızı küçültürsünüz.`)
  .addField("**/yasakla**", `Bir kişiyi sunucudan yasaklamanızı sağlar.`)
  .addField("**/at**", `Bir kişiyi sunucudan atmanızı sağlar.`)
  .addField("**/banlananlar**", `Banlananları gosterir`)
  .addField("**/sustur**", `Bir kişiyi susturmanızı sağlar.`)
  .addField("**/oylama**", `Oylama yapmanızı sağlar.`)
  .addField("**/duyuru**", `Seçtiğiniz bir kanalda bot duyuru yapar.`)
  .addField("**/panelkur**", `Yakında.`)
  .addField("**/sunucu-resim-ayarla**", `Belirttiğiniz link bir resim linki ise o resmi sunucu resmi olarak ayarlar.`)
  .addField("**/sunucu-isim-ayarla**", `yakında.`)
  
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
  aliases: ['*yetkili'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Yetkili Komutlarını Gösterir.',
  usage: 'yetkili'
};