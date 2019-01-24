const COMMANDO = require("discord.js-commando");

class aboutCommand extends COMMANDO.Command{
    constructor(client){
        super(client,{
            name: 'about',
            group: 'simple',
            memberName: 'about',
            description: 'Displays information about the bot'
        })
    }

    async run(message){
        var aboutMe = `LoveNikkiDiscordBot V1.0
        
        Hi! I'm a Discord Bot tailor made for Love Nikki communities :D My creator is Miko Zyzanski.
        To see my available commands enter !help
        If you're interested in contributing to this project here is the Github Repo: https://github.com/Redseb/LoveNikkiDiscordBot 
        Please consider starring this repo :)
        `;


        message.reply(aboutMe);
    }
}

module.exports = aboutCommand;