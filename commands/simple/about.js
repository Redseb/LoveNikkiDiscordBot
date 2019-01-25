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
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "This is an embed",
            url: "http://google.com",
            description: "This is a test embed to showcase what they look like and what they can do.",
            fields: [{
                name: "Fields",
                value: "They can have different fields with small headlines."
              },
              {
                name: "Masked links",
                value: "You can put [masked links](http://google.com) inside of rich embeds."
              },
              {
                name: "Markdown",
                value: "You can put all the *usual* **__Markdown__** inside of them."
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© Example"
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