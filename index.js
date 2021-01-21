const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '1558457946:AAE_Ue2qxe-IUx_g01TkrHwAZJlmqTAD8EU'

const bot = new TelegramBot(TOKEN, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
})

// bot.on('message', (msg) => {
//     const { id } = msg.chat
//
//     bot.sendMessage(id, msg.text)
//         .then(() => {
//             console.log("message has been send")
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// })


bot.onText(/\/start/, msg => {
    const { id } = msg.chat

    bot.sendMessage(id, 'you just send start command')
})

bot.onText(/\/help (.+)/, (msg, arr) => {
    const { id } = msg.chat

    bot.sendMessage(id, 'you just send help command')
})

