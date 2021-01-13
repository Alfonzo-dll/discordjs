const Discord = require('discord.js');
const db = require("quick.db")

module.exports = {
    name: 'prefix',
    description: 'This is a prefix command!',
    run (client, message, args) {

        if (!message.member.permissions.has('ADMINISTRATOR')) {
            return message.channel.send('You don\'t have permissions to use that')
        }

        if (args[0] === 'reset') {
            db.delete(`prefix_${message.guild.id}`)
            message.channel.send('Prefix resetted')
            return
        }

        if (!args[0]) {
            return message.channel.send('Please provide a new prefix')
        }

        db.set(`prefix_${message.guild.id}`, args[0])
        message.channel.send(`Succesfully set new prefix to \`${args[0]}\``)

    }

}