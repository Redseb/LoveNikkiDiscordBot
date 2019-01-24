const COMMANDO = require("discord.js-commando");

class webScrapeCommand extends COMMANDO.Command{
    constructor(client){
        super(client,{
            name: 'webscrape',
            group: 'webscrape',
            memberName: 'webscrape',
            description: 'Sends current Love Nikki server time (UTC - 8)',
            args: [
                {
                    key: 'item',
                    prompt: 'What item would you like to search?',
                    type: 'string'
                }
            ]
        });
    }

    //console.log('Love Nikki time: '+lnTime.toLocaleString());

    async run(message, {item}){

        const rp = require('request-promise');
        const cheerio = require('cheerio');
        const url = 'https://ln.nikkis.info/search/?q=' + item;
        const testUrl = "https://ln.nikkis.info/search/?q=geisha";
        
        rp(testUrl)
        .then(function(html) {
          const $ = cheerio.load(html);
          console.log($('a').text() + "\n");
        //   $('[xml\\:id="search-results"').each(function(i, element){
        //      var a = $(this).next();
        //      console.log(a.text());
        //    });
        })
        .catch(function(err) {
          //handle error
        });


        }


}

module.exports = webScrapeCommand;
