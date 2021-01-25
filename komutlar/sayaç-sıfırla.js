const Discord = require('discord.js')
const fs = require('fs')

exports.run = async (client, message, args) => {
    let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
        if(!sayac[message.guild.id]) {
            const embed = new Discord.RichEmbed()
                .setDescription(`<a:Basarisizzz:604229772142444554> Sayaç, ayarlanmadığından dolayı sıfırlanamaz!`)
        .setFooter('Kürşat Bot, iyi eğlenceler diler!', client.user.avatarURL)
                .setColor("RANDOM")
                .setTimestamp()
            message.channel.send({embed})
            return
        }
        delete sayac[message.guild.id]
        fs.writeFile("./ayarlar/sayac.json", JSON.stringify(sayac), (err) => {
            console.log(err)
        })
        const embed = new Discord.RichEmbed()
            .setDescription(`<a:Basariliii:604229636750180362> Sayaç, başarılı bir şekilde sıfırlandı!`)
      .setFooter('Neptune asistan, iyi eğlenceler diler!', client.user.avatarURL)
            .setColor("RANDOM")
            .setTimestamp()
        message.channel.send({embed})
        return
    }

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['sayaçsıfırla'],
  permLevel: 0
};

exports.help = {
  name: 'sayaç-sıfırla', 
  description: 'Sayaçı, sıfırlar!',
  usage: 'sayaç-sıfırla'
};
   