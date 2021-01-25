const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('<a:Basarisizzz:604229772142444554> Hata: klog İsimli Kanal Nerde Havayamı Uçtu¿', '`kick` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'klog');
  if (!modlog) return message.reply('<a:Basarisizzz:604229772142444554> klog Kanalı Nerde Havayamı Uçtu¿', '`klog` **Senin gözüne girsin oldumu**');
  if (reason.length < 1) return message.reply('<a:Basarisizzz:604229772142444554> Sebep nerde.');
  if (message.mentions.users.size < 1) return message.reply('<a:Basarisizzz:604229772142444554> Kimi sunucudan atıcağımı yazmadın.').catch(console.error);

  if (!message.guild.member(user).kickable) return message.reply('<a:Basarisizzz:604229772142444554> Rolümden Yüksek Yetkiye Sahip Olanları Atamam.');
  message.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Yapılan İşlem', 'Sunucudan atma <a:Bannnnnned:599595959172857894>')
    .addField('Atılan:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Atan:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep: ', reason)
    .setImage(`https://resimag.com/p1/829aa9bb38e.gif`);
  
  return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['at'],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kick [kullanıcı] [sebep]'
};
