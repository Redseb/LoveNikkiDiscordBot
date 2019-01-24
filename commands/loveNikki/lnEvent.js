const COMMANDO = require("discord.js-commando");

class lnEventCommand extends COMMANDO.Command{
    constructor(client){
        super(client,{
            name: 'event',
            group: 'lovenikki',
            memberName: 'event',
            description: 'Returns name of latest event'
        });
    }

    async run(message){

        const rp = require('request-promise');
        const cheerio = require('cheerio');
        const url = "https://ln.nikkis.info/stages/events/";
        
        rp(url)
        .then(function(html) {
          const $ = cheerio.load(html);
          var latestEvent = $('.collapsible-header').last().text(); //Search for event name using cheerio
          latestEvent = latestEvent.substring(15, latestEvent.length); //Get rid of "import_contacts" string

          message.reply("The latest event is: " + latestEvent); //Send out message
          message.channel.sendMessage(url);
        })
        .catch(function(err) {
          //handle error
        });


        }


}

module.exports = lnEventCommand;
