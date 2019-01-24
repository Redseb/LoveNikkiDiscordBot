const COMMANDO = require("discord.js-commando");

class diceRollCommand extends COMMANDO.Command{
    constructor(client){
        super(client,{
            name: 'roll',
            group: 'simple',
            memberName: 'roll',
            description: 'Rolls a n sided dice, user must specify number of sides (!roll 6)',
            args: [
                {
                    key: 'sides',
                    prompt: 'How many sides should the dice have?',
                    type: 'integer'
                }
            ]
        })
    }

    async run(message, {sides}){
        var diceRoll = Math.floor(Math.random() * sides) + 1;
        message.channel.sendMessage("*Rolling* \n " + message.author + " Your dice landed on:" + diceRoll);
    }
}

module.exports = diceRollCommand;