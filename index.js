const { Telegraf } = require('telegraf');
const bot = new Telegraf('5706281913:AAEmHlQFStq4C1vsq5vz8IzuuEg58vnQY3Y');

//method for invoking start command
 
bot.command('start', ctx => {
    console.log(ctx.from);
    bot.telegram.sendMessage(ctx.chat.id, 'hello there! Welcome to my new telegram bot.', {
    });
});

bot.launch();