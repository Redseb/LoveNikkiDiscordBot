const COMMANDO = require("discord.js-commando");

class diceRollCommand extends COMMANDO.Command{
    constructor(client){
        super(client,{
            name: 'roll',
            group: 'simple',
            memberName: 'roll',
            description: 'Rolls a six sided dice'
        })
    }

    async run(message, args){
        var diceRoll = Math.floor(Math.random() * 6) + 1;
        message.channel.sendMessage("*Rolling* \n " + message.author + " Your dice landed on:" + diceRoll);
    }
}

module.exports = diceRollCommand;