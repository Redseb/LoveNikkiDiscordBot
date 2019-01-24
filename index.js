const COMMANDO = require("discord.js-commando");
const BOT = new COMMANDO.Client();
const TOKEN = process.env.token; //Hidden token on Heroku


BOT.registry.registerGroup('simple', 'Simple');
BOT.registry.registerGroup('lovenikki', 'LoveNikki');
BOT.registry.registerGroup('webscrape', 'WebScrape');
BOT.registry.registerDefaults();
BOT.registry.registerCommandsIn(__dirname + "/commands");

BOT.on("message", function(message){
    if(message.content == "Hello"){
        message.channel.sendMessage("Hello " + message.author + " how are you?");
    }
});

BOT.on("ready", function(){
    console.log("Ready");
});

BOT.login(TOKEN);