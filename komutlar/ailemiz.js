const Discord = require("discord.js")
exports.run = (bot, message) => {
  const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`**${guild.name}** - 》ÜYE SAYISI : **${guild.memberCount}**`, guild.id);
      embed.setColor('#D97634')
      embed.setTitle('Botun Bulunduğu Sunucular')
      embed.setDescription(`Bot şuan **${bot.guilds.size}** tane sunucuda bulunmakta.`)
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ailemiz', 'servers'],
  permLevel: 0
};

exports.help = {
  name: "sunucular",
  description: "Shows all the servers the bot is in.",
  usage: "ailemiz"
};
