const Discord = require('discord.js');
const db = require("quick.db")

module.exports = {
    name: 'ping',
    description: 'This is a ping command!',
    run (client, message, args) {
        message.channel.send(`Pong! \`${client.ws.ping}\``);
    }

}
