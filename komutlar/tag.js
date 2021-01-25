const db = require('quick.db')

module.exports.run = async (client, message, args) => {
  
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('<a:Basarisizzz:604229772142444554> Bu komutu kullanmak için `ADMINISTRATOR` yetkisine sahip olmalısın..')
  if(!args.join(" ").trim()) return message.channel.send('<a:Basarisizzz:604229772142444554> Geçerli bir tag ismi yazınız...')
  
  db.updateText(`tag1_${message.guild.id}`, args.join(" ").trim()).then(tag2 => {
    message.channel.send(`<a:Basariliii:604229636750180362> Tag başarıyla **${tag2.text}** olarak ayarlandı...`)
    
  })
  //Tag devamı bot.js de 
}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['tag-ekle'],
 permLevel: 0
};

exports.help = {
 name: 'tag',
 description: 'tag',
 usage: 'tag'
};       