const Discord = require('discord.js');
const db = require("quick.db")

module.exports = {
    name: 'clear',
    description: 'This is a clear command!',
    run (client, message, args) {
        
        let amount = args.join(' ');

        if (!amount) {
            return message.channel.send('Please provide an amount of messages for delete')
        }

        if (amount > 100) {
            return message.channel.send('You cannot clear more than 100 messages at once')
        }

        if (amount < 1) {
            return message.channel.send('You need to delete at least one messages')
        }

        message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages)
        })

        message.channel.send(`Success, \`${amount}\` of messages deleted`).then(m => m.delete({ timeout: 3000 }))
    }

}
