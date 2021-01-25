const Discord = require('discord.js');
const moment = require('moment');
const ms = require('ms')
exports.run = async (client, message) => {
var time = moment().format('Do MMMM YYYY , hh:mm');
var room;
var title;
var duration;
var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
var filter = m => m.author.id === message.author.id;
 
  
  
      message.channel.send(`<a:buyuh:599593917121560589> **Çekilişij hangi kanalda yapılacağını yaz şimdi`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send('<a:buyuh:599593917121560589> **#kanal dedikten sonra # yi silerek gönder**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit('<a:buyuh:599593917121560589> **Şimdide Çekilişin Süresini Belirt (1s, 1m, 1h, 1d, 1w)**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('<a:Basarisizzz:604229772142444554> **Geçersiz süre belirttin**');
            duration = collected.first().content
            collected.first().delete();
            msg.edit('**Şimdi de ödülü yaz bakalım**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setColor("#f558c9")
                  .setDescription(`**Ödül: ${title}** \n <a:HyperTada:598219950489993217> Emojisine tıklayarak katıl \nÇekiliş süresi : ${duration} \n **Ne zaman başladi :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter("Kürşat | HerDaim", message.author.avatarURL);
                  message.guild.channels.find("name" , room).send('@here <a:HyperTada:598219950489993217>《ÇEKİLİŞ ZAMANI》<a:HyperTada:598219950489993217> @here' , {embed: giveEmbed}).then(m => {
                     let re = m.react('598219950489993217');
                     setTimeout(() => {
                       let users = m.reactions.get("598219950489993217").users
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .setColor("#f558c9")
            .setFooter("(KürşatBot çekiliş sistemi)")
                       .addField('||@here||Çekiliş Bitti !<a:HyperTada:598219950489993217>',`Kazanan : ${gFilter} \nBitiş zamanı :`)
                       .setTimestamp()
                     m.edit('**《 <a:HyperTada:598219950489993217> 》 ÇEKİLİŞ BİTTİ**' , {embed: endEmbed});
                       
                       var embedLel = new Discord.RichEmbed()
                        .setColor("#f558c9")
                        .setDescription("Ödülünü alamadıysan gerekli yetkilere ulaş!").setFooter("(KürşatBot çekiliş sistemi)")
                    message.guild.channels.find("name" , room).send(`**Tebrikler ${gFilter}! \`${title}\` kazandın!**` , embedLel)
                }, ms(duration));
            });
                } catch(e) {
                message.channel.send(`<a:Basarisizzz:604229772142444554> **Benim rolümde yönetici izni olmadığından yapamıyorum :(**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çekiliş-yap'],
  permLevel: 2
};
exports.help = {
  name: 'çekiliş',
  description: 'Çekiliş komudu  muzoBot',
  usage: 'çekiliş'
};
   