module.exports = {
    name: "ping",
    aliases: ["ping"],
    cooldown: "5s", 
    cooldownError: "Komutları 5 saniye aralıklarla kullanabilirsiniz!",
    run: async (client, message, args) => {

      message.channel.send("Pong!")
    }
  };



