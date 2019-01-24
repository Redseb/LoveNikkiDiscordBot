const COMMANDO = require("discord.js-commando");
const client = new COMMANDO.Client();


class lnRemindCommand extends COMMANDO.Command{
    constructor(client){
        super(client,{
            name: 'remindme',
            group: 'lovenikki',
            memberName: 'remindme',
            description: 'Sets a reminder, use s,m,h,d to specify seconds, minutes, etc.',
            args: [
                {
                    key: 'time',
                    prompt: 'After how much time would you like me to remind you?',
                    type: 'string'
                },
                {
                    key: 'content',
                    prompt: 'What would you like the reminder to be?',
                    type: 'string'
                }
            ]
        });
    }


    async run(message, {time, content}){
		var msg = message; //Example{ !remindme 5s Test }
        var duration; //just number { 5 }
        var timeSymbol; //symbol s,m,h,d { s }
        
        // Sets the return time
        timeSymbol = time.substring((time.length - 1), (time.length));
        duration = time.substring(0, (time.length - 1));
    
        switch (timeSymbol) { //Based off of symbol changes time duration in milliseconds
            case 's':
                duration = duration * 1000;
                break;
    
            case 'm':
                duration = duration * 1000 * 60;
                break;
    
            case 'h':
                duration = duration * 1000 * 60 * 60;
                break;
    
            case 'd':
                duration = duration * 1000 * 60 * 60 * 24;
                break;
    
            default:
                duration = duration * 1000;
                break;
        }
    
        client.setTimeout(function () { //Sets timer
            message.channel.sendMessage(" " + content); //Replies
        }, duration);

    }

}

module.exports = lnRemindCommand;