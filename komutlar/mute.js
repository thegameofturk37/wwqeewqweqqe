const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.channel.send("<a:Basarisizzz:604229772142444554> Komudu Kullanmak İçin Üyeleri At Yetkisine Sahip Olmalısın.")
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send(`<a:Basarisizzz:604229772142444554> Kullanıcı bulunamadı`)
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!reason) return message.channel.sendEmbed(new Discord.RichEmbed().setAuthor('Hata').setDecription('<a:Basarisizzz:604229772142444554> Mute Sebebini Yazmadınız').setColor('RANDOM'))
    let muterole = message.guild.roles.find(`name`, "Susturulmuş");
  if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Susturulmuş",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    await (user.addRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor('Yapılan İşlem: Üyeyi Susturma')
            .addField('Susturulan', `<@${user.id}>`)
            .addField('Sebep', `${reason}`)
            .addField('Susturan', `${mod}`)
            .setColor('RANDOM')
        message.channel.send(muteembed)
  
  
}


exports.conf = {
    aliases: ['sustur'],
    permLevel: 2
};

module.exports.help = {
    name: "mute",
    description: "Etiketlenen Kişiye Mute Atar",
    usage: "mute [kullanıcı] [sebep]"
}