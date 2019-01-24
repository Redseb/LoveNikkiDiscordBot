# LoveNikkiDiscordBot

This is a discord bot for the popular mobile dress up game "Love Nikki Dress Up Queen"
Discord bot made with node.js, commando

## Command List
### loveNikki
* !event \
... *Description:* Returns name of latest event \
... *File:* commands/loveNikki/lnEvent.js 

* !time \
... *Description:* Sends current Love Nikki server time (UTC - 8) \
... *File:* commands/loveNikki/lnTime.js 

* !remindme \
... *Description:* Sets a reminder, use s,m,h,d to specify seconds, minutes, etc. Don't forget to add reminder content \
... *Parameters:* time (5s, 1m, 2h, 6d), content (Call Grandma) \
... *File:* commands/loveNikki/lnRemind.js 

### simple
* !flip \
... *Description:* Flips a coin, outputs either heads or tails \
... *File:* commands/simple/coinFlip.js 

* !roll \
... *Description:* Rolls a six sided dice \
... *File:* commands/simple/diceRoll.js 

**Note:** Must have own node.js files
