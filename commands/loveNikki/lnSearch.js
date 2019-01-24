const COMMANDO = require("discord.js-commando");
/* Current Idea: Instead of webscraping, save local copy of website, translate that into a database*/
class lnSearchCommand extends COMMANDO.Command{
    constructor(client){
        super(client,{
            name: 'search',
            group: 'lovenikki',
            memberName: 'search',
            description: 'Returns name of latest event',
            args: [
                {
                    key: 'query',
                    prompt: 'Please enter the Wardrobe item you are searching for',
                    type: 'string'
                }
            ]
        });
    }

    async run(message, {query}){

        const rp = require('request-promise');
        const cheerio = require('cheerio');
        const url = "http://db.lovenikki.world/search.html?find=" + query + "#!/list";
        setTimeout(function(){
            rp(url)
            .then(function(html) {
                const $ = cheerio.load(html);
                var firstItem = $('.generate-tooltip').html(); //Search for event name using cheerio
    
                console.log(firstItem);
    
                //message.reply(firstItem); //Send out message
                message.channel.send(url);
            })
            .catch(function(err) {
            //handle error
            });


            },10000); //Wait 3 seconds before loading the page

    }
}

module.exports = lnSearchCommand;