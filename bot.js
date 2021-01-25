const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(`Bot Tekrar Açıldı`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 210000);
// GEREKLİ YERLER
// -------------------------------------------------------------
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const db = require('quick.db');
const Jimp = require('jimp');          fs

require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;


const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(aliases => {
      client.aliases.set(aliases, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

  client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  if(!message.guild) {
  return; }
  let permLevel = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permLevel = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permLevel = 3;
  if (message.author.id === ayarlar.sahip) permLevel = 4;
  return permLevel
  };

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});



   

//level sistemi
////////////////////////////////////////////////////XİR///////////////////////////////////////////////////////////

let points = JSON.parse(fs.readFileSync('./level.json', 'utf8'));

var f = [];
function factorial (n) {
  if (n == 0 || n == 1 || n == 2)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
};
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

client.on("message", async message => {
    if (message.channel.type === "dm") return;

  if (message.author.bot) return;

  var user = message.mentions.users.first() || message.author;
  if (!message.guild) user = message.author;

  if (!points[user.id]) points[user.id] = {
    points: 0,
    level: 0,
  };

  let userData = points[user.id];
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    userData.level = curLevel;
        var user = message.mentions.users.first() || message.author;
				const bg = await Jimp.read("https://cdn.discordapp.com/attachments/458732340491845633/473603413243068437/fs.png");
				const userimg = await Jimp.read(user.avatarURL);
				var font;
				if (user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
				else if (user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_632_BLACK);
				else font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
				var font2;
				if (user.tag.length < 15) font2 = await Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);
				else if (user.tag.length > 15) font2 = await Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);
				else font2 = await Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);
				await bg.print(font2, 17, 50, `LEVEL`);
				await bg.print(font, 27, 70, `${userData.level}`);
				await userimg.resize(35, 35);
				await (!userimg.resize(35, 35));
        await bg.composite(userimg, 25, 15).write("./img/level/" + client.user.id + "-" + user.id + ".png");
				  setTimeout(function () {
message.channel.send(`:up: **| ${user.username} level atladı!**`)
						message.channel.send(new Discord.Attachment("./img/level/" + client.user.id + "-" + user.id + ".png"));
				  }, 1000);
				  setTimeout(function () {
					fs.unlink("./img/level/" + client.user.id + "-" + user.id + ".png");
				  }, 10000);
    }
fs.writeFile('./level.json', JSON.stringify(points), (err) => {
    if (err) console.error(err)
});
    if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if (message.content.indexOf(ayarlar.prefix) !== 0) return;
    const args = message.content.substring(ayarlar.prefix.length).split(" ");
     var Durum = message.author.presence.status;
        var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        var durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdisi") : (Durum == "idle" ? ("Bosta") : (Durum == "dnd" ? ("Rahatsiz Etmeyin") : ("Bilinmiyor/bulunamadi.")))))
    const command = args.shift().toLowerCase();
     if (command === 'profil' || command === 'level') {
      message.channel.startTyping()
        var user = message.mentions.users.first() || message.author;
        let memberID = await db.fetch(`memberID_${user.id}`);
        if (memberID == null) memberID = 'Aciklama mesaji ayarlanmamis.'
        let membername = await db.fetch(`membername_${user.id}`);
        if (membername == null) membername = `${user.tag}`
        let memberBadge = await db.fetch(`memberBadge_${user.id}`);
        if (memberBadge == null) memberBadge = `https://cdn.discordapp.com/attachments/461622592688619520/472923575049781268/profile.png`
        let memberBadge4 = await db.fetch(`memberBadge4_${user.id}`);
        if (memberBadge4 == null) memberBadge4 = `https://cdn.discordapp.com/attachments/461622592688619520/472923575049781268/profile.png`
				const bg = await Jimp.read("https://i.postimg.cc/ZYDZmVBr/xirprofil.png");
				const userimg = await Jimp.read(user.avatarURL);
				const onay = await Jimp.read(`${memberBadge}`);
				const mod = await Jimp.read(`${memberBadge4}`);
				var font;
				if (membername.length < 12) font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
				else if (membername.length > 12) font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
				else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHİTE);
				var font2;
				if (user.tag.length < 15) font2 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
				else if (user.tag.length > 15) font2 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
				else font2 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
				var font3;
				if (user.tag.length < 34) font3 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
				else if (user.tag.length > 34) font3 = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
				else font3 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
				var font4;
				if (user.tag.length < 15) font4 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
				else if (user.tag.length > 15) font4 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
				else font4 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
				await bg.print(font, 270, 70, `${membername}`);
				await bg.print(font4, 40, 300, `Level: ${userData.level}`);
				await bg.print(font2, 40, 340, `GP: ${userData.points}`);
				await bg.print(font3, 40, 380, `Aciklama: ${memberID}`);
        await bg.print(font3, 40, 420, `Durum: ${durm}`);
				await userimg.resize(200, 200);
				await (!userimg.resize(210, 210));
				await onay.resize(32, 32);
				await mod.resize(32, 32);
        await bg.composite(onay, 270, 120).write("./img/onay/" + client.user.id + "-" + user.id + ".png");
        await bg.composite(mod, 390, 120).write("./img/mod/" + client.user.id + "-" + user.id + ".png");
        await bg.composite(userimg, 40, 40).write("./img/userimg/" + client.user.id + "-" + user.id + ".png");
				  setTimeout(function () {  
message.channel.send(`:pencil: **| ${user.username} adlı kullanıcının profil kartı**`)
						message.channel.send(new Discord.Attachment("./img/userimg/" + client.user.id + "-" + user.id + ".png"));
				  }, 1000);
				  setTimeout(function () {
					fs.unlink("./img/userimg/" + client.user.id + "-" + user.id + ".png");
				  }, 10000);
      message.channel.stopTyping()
    }
  if (command === "açıklamaayarla" || command === "açıklama") {
        if (args.join(' ').length > 35) return message.channel.send(`${process.env.basarisiz} En fazla 35 karakter girebilirsiniz.`)
        if (!args.join(" ") && args.join(" ").toLowerCase() === `none`)
            return message.channel.send(`Uyarı: Geçerli bir yazı yazmalısın.\nDoğru kullanım: ${ayarlar.prefix}biyografi XiR candır.`)
        let newMessage;
        if (args.join(" ").toLowerCase() === `none`) newMessage = '';
        else newMessage = args.join(" ").trim();
        db.set(`memberID_${message.author.id}`, newMessage).then(i => {
            return message.channel.send(`**Yeni biyografin ayarlandı.**`)
        })
    }
});

////////////////////////////////////////////////////XİR///////////////////////////////////////////////////////////

//emojili sa-as

client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam hoşgeldin :heart:');
    await msg.react('🇦');
    msg.react('🇸');
  }
  });

//afk komutu 
client.on("message", message => { 
    let afk_kullanici = message.mentions.users.first() || message.author;
    if(message.content.startsWith(ayarlar.prefix+"afk")) return; //
  if (message.author.bot === true) return;
   

    //let afk_kullanici = message.mentions.users.first() || message.author;
   //var p = denetim[member.guild.id] ? denetim[member.guild.id].prefix : "*"
   //if (!denetim[member.guild.id]) return;
  //  if(message.content.startsWith(p+"afk")) return; //! yazan yeri kendi botunuzun prefixi ile değiştirin.
  //if (message.author.bot === true) return;
     if(message.content.includes(`<@${afk_kullanici.id}>`))
         if(db.has(`afks_${afk_kullanici.id}`)) {
             const afksuan = new Discord.RichEmbed()
                     .setColor("RANDOM")
                     .setDescription(`**${client.users.get(afk_kullanici.id).tag}** adlı kullanıcı şuanda AFK! \n**Sebep:** \n${db.fetch(`afks_${afk_kullanici.id}`)}`)
                     message.channel.send(afksuan)
                 //message.channel.send(`**${bot.users.get(afk_kullanici.id).tag}** adlı kullanıcı şuanda AFK! \n**Sebep:** \n${db.fetch(`afks_${afk_kullanici.id}`)}`)
         }
   
         if(db.has(`afks_${message.author.id}`)) {
             const basarili = new Discord.RichEmbed()
                 .setColor("RANDOM")
                 .setDescription("<@"+`${message.author.id}`+">"+"Başarıyla AFK modundan çıktın")
                 //message.reply("başarıyla AFK modundan çıktın!")
                message.channel.send(basarili)
             db.delete(`afks_${message.author.id}`)
         } 

       });


//sayaç sistemi 

client.on("message", async message => {
    let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
    if(sayac[message.guild.id]) {
        if(sayac[message.guild.id].sayi <= message.guild.members.size) {
            const embed = new Discord.RichEmbed()
                .setDescription(`Tebrikler ${message.guild.name}! Başarıyla **${sayac[message.guild.id].sayi}** kullanıcıya ulaştık! Sayaç sıfırlandı!`)
                .setColor(ayarlar.renk)
                .setTimestamp()
            message.channel.send({embed})
            delete sayac[message.guild.id].sayi;
            delete sayac[message.guild.id];
            fs.writeFile("./ayarlar/sayac.json", JSON.stringify(sayac), (err) => {
                console.log(err)
            })
        }
    }
})

client.on("guildMemberAdd", async member => {
    let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
    const channel = member.guild.channels.find("name", "sayaç")
    channel.send(`**${member.user.tag}** Katıldı 😎 **${sayac[member.guild.id].sayi}** olmamıza son **${sayac[member.guild.id].sayi - member.guild.members.size}** üye kaldı!`)
})

client.on("guildMemberRemove", async member => {
    let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
    const channel = member.guild.channels.find("name", "sayaç")
    channel.send(`**${member.user.tag}** Ayrıldı 🙁 **${sayac[member.guild.id].sayi}** olmamıza son **${sayac[member.guild.id].sayi - member.guild.members.size}** üye kaldı!`)
})
//XiR
 
client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "sunucu-kur") {
  if (message.guild.channels.find(channel => channel.name === "xd4")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  message.channel.send(`Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`)
      if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Komudu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
    .then((collected) => {
   message.guild.createChannel('🌐》SUNUCU《🌐', 'category', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])



        
 message.guild.createChannel('《📖》kurallar', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🌐》SUNUCU《🌐")));
 message.guild.createChannel('《🚪》gelen_giden', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
       channel.setParent(message.guild.channels.find(channel => channel.name === "🌐》SUNUCU《🌐")));
       message.guild.createChannel('《⏳》sayaç', 'text', [{
        id: message.guild.id,
        deny: ['SEND_MESSAGES']
      }])
.then(channel =>
             channel.setParent(message.guild.channels.find(channel => channel.name === "🌐》SUNUCU《🌐")));
             message.guild.createChannel('klog', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
            .then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === "🌐》SUNUCU《🌐")));
            message.guild.createChannel('《📢》duyuru', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🌐》SUNUCU《🌐")));

       }) 
       .then((collected) => {
        message.guild.createChannel('💬》GENEL《💬', 'category', [{
       id: message.guild.id,
     }]);
             
      message.guild.createChannel(`《💬》sohbet`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "💬》GENEL《💬")));
     message.guild.createChannel(`《💻》komut_kullanım`, 'text')
     .then(channel =>
            channel.setParent(message.guild.channels.find(channel => channel.name === "💬》GENEL《💬")));
     message.guild.createChannel(`《📷》fotoğraf_paylaşım`, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "💬》GENEL《💬")));
     message.guild.createChannel(`《💡》şikayet`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "💬》GENEL《💬")));

      message.guild.createChannel(`《🔱》Kurucu Odası`, "voice")
      .then(channel =>
        channel.setParent(message.guild.channels.find(channel => channel.name === "🎶》SES《🎶")))
      .then(c => {
        let role = message.guild.roles.find("name", "@everyone");
        let role2 = message.guild.roles.find("name", "👑》Kurucu");
        
        c.overwritePermissions(role, {
            CONNECT: false,
        });
        c.overwritePermissions(role2, {
            CONNECT: true,
            
        });
    })

    message.guild.createChannel('🎶》SES《🎶', 'category', [{
      id: message.guild.id,
    }]);

    message.guild.createChannel(`🔱》Yönetici Odası`, "voice")
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "🎶》SES《🎶")))
    .then(c => {
      let role = message.guild.roles.find("name", "@everyone");
      let role2 = message.guild.roles.find("name", "👑》Kurucu");
      let role3 = message.guild.roles.find("name", "🔱》Üst Yetkili");
      c.overwritePermissions(role, {
          CONNECT: false,
      });
      c.overwritePermissions(role2, {
          CONNECT: true,
      });
      c.overwritePermissions(role3, {
          CONNECT: true,
      });
  })

  message.guild.createChannel(`📞》Sohbet`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})

message.guild.createChannel('🎮》OYUN《🎮', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`《🎮》LOL`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》OYUN《🎮")))
 message.guild.createChannel(`《🎮》ZULA`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》OYUN《🎮")))
 message.guild.createChannel(`《🎮》COUNTER STRİKE`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》OYUN《🎮")))
 message.guild.createChannel(`《🎮》PUBG`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》OYUN《🎮")))
  message.guild.createChannel(`《🎮》FORTNİTE`, 'voice')
  .then(channel =>
   channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》OYUN《🎮")))
   message.guild.createChannel(`《🎮》MİNECRAFT`, 'voice')
   .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》OYUN《🎮")))
    message.guild.createChannel(`《🎮》ROBLOX`, 'voice')
    .then(channel =>
     channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》OYUN《🎮")))
     message.guild.createChannel(`《🎮》WOLFTEAM`, 'voice')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "🎮》OYUN《🎮")))



      message.guild.createRole({
        name: '👑》Kurucu',
        color: 'RED',
        permissions: [
            "ADMINISTRATOR",
    ]
      })

      
      message.guild.createRole({
        name: '🔱》Üst Yetkili',
        color: 'dc1b18',
        permissions: [
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES"
    ]
      })

      message.guild.createRole({
        name: '🔰》Yetkili',
        color: '04fe12',
        permissions: [
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES"
    ]
      })

      message.guild.createRole({
        name: '❤》Değerliler',
        color: '00ffff',
      })

      message.guild.createRole({
        name: '👤》Üye',
        color: 'fbf601',
      })

      message.guild.createRole({
        name: '💻》Bot',
        color: '7b289b',
      })

       message.author.send("Gerekli Herşey Tamlandı!")
     
            })   
    
}
}); 

 


client.login (ayarlar.token)