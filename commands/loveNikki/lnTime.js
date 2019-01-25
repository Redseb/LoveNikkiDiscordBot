const COMMANDO = require("discord.js-commando");

class lnTimeCommand extends COMMANDO.Command{
    constructor(client){
        super(client,{
            name: 'time',
            group: 'lovenikki',
            memberName: 'time',
            description: 'Sends current Love Nikki server time (UTC - 8)' //UTC -8 is also Alaskan time
        })
    }

    //console.log('Love Nikki time: '+lnTime.toLocaleString());

    async run(message, args){
        
        var lnTime = new Date().toLocaleTimeString("en-GB", {timeZone: "Pacific/Pitcairn"}); //Display in british style UTC-8/GMT+8 time

        message.reply("Love Nikki Server Time: " + lnTime);
    }
}

module.exports = lnTimeCommand;
