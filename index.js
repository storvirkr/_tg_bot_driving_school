const { from } = require('form-data');
const telegramApi = require('node-telegram-bot-api')


const token = "6350636702:AAEeSg5C2hkyrN7NfynSW2T_jZFjkWzMASw";

const bot = new telegramApi(token, {polling: true})



const chats = {};

const start  = () => {
    bot.setMyCommands( [
        {command: "/start", description: "Starting "},
        {command: "info", description: "User Info"},
        {command: "/number", description: "Your phone number"},
    ])  
    bot.on('message', msg => {
        console.log(msg);
        const text = msg.text;
        const chatId = msg.chat.id;
        //console.log(msg)
        if (text === '/start'){
            return bot.sendMessage(chatId, "Welcome to ...");
        }
        if (text === '/info'){
            return bot.sendMessage(chatId, `This is autoschoolBot, your name is ${msg.from.first_name}`);
        }
        if (text === '/number'){
            bot.sendMessage(chatId, "Enter your phone number:")
            return bot.sendMessage(chatId, "your phone number is:" `${text}`)
            
        }
    
    })
    
}
start()