const appRoutes = require("./routes/index.js");
const express = require('express');
const cors = require('cors');

const TelegramBot = require('node-telegram-bot-api');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

const bot = new TelegramBot(process.env.TG_TOKEN, { polling: true });
const app = express();

app.use(cors());
app.use(express.json());

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        await bot.sendMessage(chatId, 'Click the button below to play', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Play', web_app: { url: process.env.WEB_APP_URL } }],
                ]
            }
        });
    }


});

appRoutes(app);

app.use((error, res) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
