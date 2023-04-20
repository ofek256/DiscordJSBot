const { Client, IntentsBitField } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is ready`);
})

client.on('messageCreate',(msg) => {
    if (msg.author.bot) {
        return;
    }
    if (msg.content === 'hiya') {
         msg.reply(`${msg.content} abook`);
         console.log (msg.content);
        }
    if (msg.content === 'meow') {
        msg.reply ('shut the fuck up');
    }
} )

client.login(token);