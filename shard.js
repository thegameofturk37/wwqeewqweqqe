const Discord = require('discord.js');
const bot = new Discord.Client()
const express = require('express');
const app = express();
const http = require('http');
const scarew = new Discord.ShardingManager('./bot.js', {// Ana dosyanızın adını yazınız.
    totalShards: 'auto',//Burayı değiştirmeyin daha iyi olur sizin için
    token: "NjAyMTcwNzM4Mzg3OTc2MjMz.XTM9Uw.IXloQXeDSXPZwy-9FHhKlXiX9UQ"// Buraya tokeninizi yazınız.
});

scarew.spawn(); 

scarew.on('launch', shard => {
  console.log(`**${shard.id}** ID shard started.`)
});

setTimeout(() => {
    scarew.broadcastEval("process.exit()");
}, 21600000);