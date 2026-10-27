const { Telegraf, Markup } = require('telegraf');

// Telegram Bot Token របស់បង (@NexaFxToolBot)
const bot = new Telegraf('7560581899:AAEZ04z0fDmiMiD64ueKjJp9u0wY...');

// ABA PayWay Live Payment Link
const ABA_PAYMENT_LINK = 'https://link.payway.com.kh/ABAPAYWQ556015J';

// ពេលអតិថិជនចុច /start ឬ /pay ក្នុង Telegram Bot
bot.command(['start', 'pay'], (ctx) => {
  ctx.reply(
    `👋 សួស្តី ${ctx.from.first_name}!\n\n` +
    `សូមចុចប៊ូតុងខាងក្រោមដើម្បីទូទាត់ប្រាក់ចំនួន $3.00 USD សម្រាប់ទទួលបានសិទ្ធិប្រើប្រាស់ TradingView Background Overlay (30 ថ្ងៃ)៖`,
    Markup.inlineKeyboard([
      [Markup.button.url('💳 OPEN (ទូទាត់ប្រាក់ $3.00)', ABA_PAYMENT_LINK)]
    ])
  );
});

bot.launch();
console.log('Telegram Bot Nexa FX Tools (Live) ដំណើរការជោគជ័យ...');
