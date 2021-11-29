const { Collection, Client, Discord, MessageEmbed, Message } = require('discord.js');
const client = new Client({
    disableMention: 'everyone'
});
require('discord-buttons')(client);
const path = require('path')
const fs = require('fs')
const discordbuttons = require('discord-buttons')
const { MessageButton, MessageActionRow } = require("discord-buttons")
const config = require('./config.json');
client.prefix = config.prefix;

client.on('clickButton', async (button) => {
    if (button.id == 'AddVerifiedRole') {
        button.reply.send(`You have been verified!`, true) // Message that is sent when you press the button
        const role = button.guild.roles.cache.get(config.roleid)
        const member = button.clicker.member
        await member.roles.add(role)
    }{}
})

client.on('ready', () => {
    console.log('✅ Verification button is operational') // Console message that lets you know that the bot is operational
})

client.on('message', async (message) => {
    if (message.content.startsWith('.verify')) {
        const embed = new MessageEmbed()
            .setTitle('TITLE') // Embed title
            .setColor("GREEN") // Embed color
            .setDescription('DESCRIPTION') // Embed Description
            .setImage("") // Embed image
        const add = new MessageButton()
            .setStyle("green") // Button Color
            .setLabel("✅ Verify") // Button Text
            .setID("AddVerifiedRole") // Button ID as seen in line 14

        const row = new MessageActionRow()
            .addComponent([add])


        message.channel.send({ component: row, embed: embed })
    }
})
client.login("BOT_TOKEN"); // Bot Token
