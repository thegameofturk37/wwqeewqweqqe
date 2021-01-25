const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.sendEmbed(

     new Discord.RichEmbed()

     .addField(`<a:Basarisizzz:604229772142444554> Bir şey yazmadın ¿`)).then(m => m.delete(5000));

     console.log("/oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
     message.channel.sendEmbed(

       new Discord.RichEmbed()

       .setColor("RANDOM")
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()
       .setFooter('Muzaffer | Her Daim', client.user.avatarURL)

       .addField(`**:Oylama:**`, `**${question}**`)).then(function(message) {

         message.react('604229636750180362');

         message.react('604229772142444554');

       });

     };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['oylama'],

  permLevel: 2
};

exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: '.oylama <oylamaismi>'
};
