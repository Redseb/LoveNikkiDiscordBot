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
        var aboutMe = `Hi! I'm a Discord Bot tailor made for Love Nikki communities :D My creator is Miko Zyzanski. \n 
        To see my available commands enter !help \n \n
        If you're interested in contributing to this project here is the Github Repo: https://github.com/Redseb/LoveNikkiDiscordBot 
        `;


        message.reply(aboutMe);
    }
}

module.exports = aboutCommand;