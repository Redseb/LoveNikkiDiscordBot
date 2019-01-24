const COMMANDO = require("discord.js-commando");

class coinFlipCommand extends COMMANDO.Command{
    constructor(client){
        super(client,{
            name: 'flip',
            group: 'simple',
            memberName: 'flip',
            description: 'Flips a coin, outputs either heads or tails'
        })
    }

    async run(message, args){
        var chance = Math.floor(Math.random() * 2);
        if(chance == 0){
            message.reply("Heads!");
        } else {
            message.reply("Tails!");
        }
    }
}

module.exports = coinFlipCommand;