const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send('<a:Basarisizzz:604229772142444554> Yanlış Kulladınız \nÖrnek: /reklamengel aç veya kapay')
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('<a:Basarisizzz:604229772142444554> Bu komutu kullanabilmek için rolünde yönetici izni olmalı!')
  
  if (args[0] == 'aç') {
    db.set(`reklam_${message.guild.id}`, 'acik').then(i => {
      message.channel.send('Reklam Engel başarıyla açıldı! Yönetici yetkisine sahip olanlar`ın reklama engellenmicektir.')
    })
  }
  if (args[0] == 'kapat') {
    db.set(`reklam_${message.guild.id}`, 'kapali').then(i => {
      message.channel.send('Reklam Engel kapatıldı! Artık herkes reklam yapabilir.')
    })
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['r-engel-aç'],
  permLevel: 0
};

exports.help = {
  name: 'reklamengel',
  description: '[Admin Komutu]',
  usage: 'reklam-engelleme'
};