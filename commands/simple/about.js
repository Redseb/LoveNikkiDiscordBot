const COMMANDO = require("discord.js-commando");
const DISCORD = require("discord.js");

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
        message.channel.send({embed: {
            color: 0xFF75D5,
            author: {
              name: "MomoBot V1.0",
              icon_url: "https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/30689223_1735998249823727_1293516133759975424_n.jpg?_nc_cat=108&_nc_ht=scontent-amt2-1.xx&oh=3e30c7463f664ffa5845e870abd84f52&oe=5CC9788D"
            },
            title: "FAQ",
            url: "https://github.com/Redseb/LoveNikkiDiscordBot",
            description: "I'm a Discord Bot designed for Love Nikki communities",
            fields: [{
                name: "What can I do?",
                value: "Enter the !help command to see all of my commands"
              },
              {
                name: "How can I request a new feature?",
                value: "You can send an email to mikolajzyzanski@gmail.com to request a new feature for the bot!"
              },
              {
                name: "How can I contribute to this project?",
                value: "You can contribute to this project at https://github.com/Redseb/LoveNikkiDiscordBot and by starring the repo"
              }
            ],
            timestamp: new Date(),
            footer: {
              text: "Love, Mikołaj Zyzański"
            }
          }
        });

        // var aboutMe = `LoveNikkiDiscordBot V1.0
        
        // Hi! I'm a Discord Bot tailor made for Love Nikki communities :D My creator is Miko Zyzanski.
        // To see my available commands enter !help
        // If you're interested in contributing to this project here is the Github Repo: https://github.com/Redseb/LoveNikkiDiscordBot 
        // Please consider starring this repo :)
        // `;


        // message.reply(aboutMe);
    }
}

module.exports = aboutCommand;