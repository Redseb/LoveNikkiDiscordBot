const COMMANDO = require("discord.js-commando");

class lnSearchCommand extends COMMANDO.Command{
    constructor(client){
        super(client,{
            name: 'search',
            group: 'lovenikki',
            memberName: 'search',
            description: 'Searches Nikkis info for specified item',
            args: [
                {
                    key: 'category',
                    prompt: 'What category should I search for?',
                    type: 'string'
                }, 
                {
                    key: 'itemName',
                    prompt: 'What is the name of the item that I should look for?',
                    type: 'string'
                }
            ]
        })
    }

    async run(message, {category, itemName}){

        const rp = require('request-promise');
        const cheerio = require('cheerio');
        var categoryUrl;

        //Clean up string inputs
        category = category.toLowerCase();
        itemName = titleCase(itemName); //Capitalize first letter of each word

        /* Selects proper url to scavenge depending on category given */
        switch(category){
            case "hair":
              categoryUrl = "https://ln.nikkis.info/wardrobe/hair/";
              break;
            case "dress":
              categoryUrl = "https://ln.nikkis.info/wardrobe/dress/";
              break;
            case "coat":
              categoryUrl = "https://ln.nikkis.info/wardrobe/coat/";
              break;
            case "top":
              categoryUrl = "https://ln.nikkis.info/wardrobe/top/";
              break;
            case "bottom":
              categoryUrl = "https://ln.nikkis.info/wardrobe/bottom/";
              break;
            case "hosiery":
              categoryUrl = "https://ln.nikkis.info/wardrobe/hosiery/";
              break;
            case "shoes":
              categoryUrl = "https://ln.nikkis.info/wardrobe/shoes/";
              break;
            case "makeup":
              categoryUrl = "https://ln.nikkis.info/wardrobe/makeup/";
              break;
            case "accessory":
              categoryUrl = "https://ln.nikkis.info/wardrobe/accessory/";
              break;
            case "soul":
              categoryUrl = "https://ln.nikkis.info/wardrobe/soul/";
              break;
            case "suit":
              categoryUrl = "https://ln.nikkis.info/wardrobe/suit/" + spaceToDash(itemName);
              console.log(categoryUrl);
              break;
            default:
              categoryUrl = null;
              break;
        }


        /* Every category but suits */

        if(categoryUrl != null && category != "suit"){
        
            rp(categoryUrl)
            .then(function(html) {
            const $ = cheerio.load(html);
            // var item = $('span:contains(\"' + itemName + '\")').html();
            var item = $('span.title.truncate:contains(\"' + itemName + '\")').first();
            var itemHtml = item.parent().html();

            const filtered = cheerio.load(itemHtml);

            var itemNumber = filtered('p.grey-text.text-darken-1').text();
            itemNumber = itemNumber.replace(/\D/g,''); //Replace all non digits with ''

            var itemImage = "https://ln.nikkis.info/preview/" + category + itemNumber + ".jpg"

            var itemDescription;
            var itemAttributesGrade;
            var itemAttributes;
            var itemTags;

                rp(categoryUrl + itemNumber)
                .then(function(html) {
                    const specificPage = cheerio.load(html);

                    itemDescription = specificPage('p.flow-text').first().text(); //Description of item
                    itemAttributesGrade = specificPage('span.cloth-grade').text(); //Rank of attribute (A+)
                    itemAttributes = specificPage('span.cloth-attr').text(); //Attribute name (Cute)
                    //itemTags = specificPage('a.chip').text(); //Tags

                    specificPage('a.chip').each(function(i, elem) {
                        itemTags[i] = specificPage(this).text();
                      });
                      
                      itemTags.join(', ');

                    itemAttributesGrade = itemAttributesGrade.split("\n");
                    itemAttributes = itemAttributes.split("\n"); //splits attributes into an array



                    message.channel.send({embed: {
                        color: 0xFF75D5,
                        title: item.text(),
                        url: categoryUrl + itemNumber,
                        description: itemDescription,
                        image:{
                            url: itemImage
                        },
                        fields: [{
                            name: "Item Number",
                            value: itemNumber
                          }, {
                              name: itemAttributes[0],
                              value: itemAttributesGrade[0]
                          },{
                              name: itemAttributes[1],
                              value: itemAttributesGrade[1]
                          },{
                              name: itemAttributes[2],
                              value: itemAttributesGrade[2]
                          },{
                              name: itemAttributes[3],
                              value: itemAttributesGrade[3]
                          },{
                              name: itemAttributes[4],
                              value: itemAttributesGrade[4]
                          }, {
                              name: "Attributes",
                              value: itemAttributes[0] + ": " + itemAttributesGrade[0] + "\n" + itemAttributes[1] + ": " + itemAttributesGrade[1] + "\n" + itemAttributes[2] + ": " + itemAttributesGrade[2] + "\n" + itemAttributes[3] + ": " + itemAttributesGrade[3] + "\n" + itemAttributes[4] + ": " + itemAttributesGrade[4] + "\n"
                          }, {
                              name: "Tags",
                              value: itemTags
                          }
                        ],
                        timestamp: new Date(),
                      }
                })
                .catch(function(err) {
                    //handle errors
                });
            });
            })
            .catch(function(err) {
            //handle error
            });

            /* For suits */

            } 
            else if(category != null && category == "suit"){
            //     rp(categoryUrl)
            //     .then(function(html) {
            //     const $ = cheerio.load(html);
            //     var item = $('a.title.truncate').text();

            //     message.channel.sendMessage(item);
            //     });
            //     .catch(function(err) {
            //     //handle error
            //     });

            message.channel.sendMessage("I am currently working on the ability to search through suits, thank you for understanding");

            // /* Invalid category */
            } 
            else {
                console.log("Invalid Category Name");
            }
        }
}

function titleCase(str) { //Capitalize first letter of each word
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
 }

 function spaceToDash(str) { //Replace all spaces with dashes (-)
    return str.replace(/\s+/g, '-').toLowerCase();
 }

module.exports = lnSearchCommand;