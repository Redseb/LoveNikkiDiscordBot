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
        var myInfo = new DISCORD.RichEmbed()
        .setTitle("Momo Bot V1.0")
        .setAuthor("Mikołaj Zyzański", "https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/30689223_1735998249823727_1293516133759975424_n.jpg?_nc_cat=108&_nc_ht=scontent-amt2-1.xx&oh=3e30c7463f664ffa5845e870abd84f52&oe=5CC9788D")
        /*
        * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
        */
        .setColor([255,117,213])
        .setDescription("Hi! I'm a Discord Bot tailor made for Love Nikki communities :D")
        .setFooter("If you're interested in contributing to this project here is the Github Repo: https://github.com/Redseb/LoveNikkiDiscordBot Please consider starring this repo :)")
        .setImage("http://i.imgur.com/yVpymuV.png")
        .setThumbnail("http://i.imgur.com/p2qNFag.png")
        /*
        * Takes a Date object, defaults to current date.
        */
        .setTimestamp()
        .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
        .addField("To see my available commands enter !help",
            "This is a field value, it can hold 1024 characters.")
        /*
        * Inline fields may not display as inline if the thumbnail and/or image is too big.
        */
        .addField("Inline Field", "They can also be inline.", true)
        /*
        * Blank field, useful to create some space.
        */
        .addBlankField(true)
        .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);
        
        message.channel.send({myInfo});

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