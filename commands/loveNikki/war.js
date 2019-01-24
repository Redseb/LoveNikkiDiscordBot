const COMMANDO = require("discord.js-commando");

class warCommand extends COMMANDO.Command{
    constructor(client){
        super(client,{
            name: 'war',
            group: 'lovenikki',
            memberName: 'war',
            description: 'Details when the next war should begin'
        })
    }

    async run(message, args){
        
    }
}

module.exports = warCommand;