const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('<a:Basarisizz:601081455455502366> **Rolleri Yönet iznin varmıda kullanıon**.').setColor(10038562));
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`<a:Basarisizzz:604229772142444554> Lütfen bir kullanıcı ismi gir.\nÖrnek: /rolver [@İsim] [@Yetki]`).setColor(10038562));
    let role = message.mentions.roles.first()

    if (!role) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`<a:Basarisizzz:604229772142444554> Lütfen bir rol ismi gir.\nÖrnek: /rolver [@İsim] [@Yetki]`).setColor(10038562));
    let aRole = message.mentions.roles.first()
    if (!aRole) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`<a:Basarisizzz:604229772142444554> Bu rolü bulamıyorum.\nÖrnek: /rolver [@İsim] [@Yetki]`).setColor(10038562));

    if (rMember.roles.has(aRole.id)) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('<a:Basarisizzz:604229772142444554> Bu kullanıcı zaten bu rolde.').setColor(10038562));
    await (rMember.addRole(aRole.id))
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`<a:Basariliii:604229636750180362> ${rMember} isimli üyeye \`${role.name}\` isimli yetki başarıyla verildi!`).setColor('RANDOM'));

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolver'],
  permLevel: "0"
};

exports.help = {
  name: "rol",
  description: "AÇIKLAMA",
  usage: "rol @kullanıcı @yetli"
};
