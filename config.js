//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/D9hokK6OHS5C3eLEwPKjsJ";
global.website = process.env.GURL || "https://chat.whatsapp.com/D9hokK6OHS5C3eLEwPKjsJ";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/254112192119 , https://wa.me/254112192119";
global.sudo = process.env.SUDO || "254112192119";
global.owner = process.env.OWNER_NUMBER || "254112192119";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUNqSU00WEhaZnJaaWNWQWQ1enZvRi9KZTZ5amVqWEZCRUVxcWYwSmtYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ3ZCMDJDdVpKWFp4WXpNaHp5cmpraGZ6cFUvU1M3aFZ1M0d1REVEcy8zOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3QTdjaW5RM1JXVWVIdklyK2pJdzQ3ZEsxRlhJekVuR05xRHdiSWhqS1VBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIraGk2RTdGNWY2bTQwc1V1b08xdVRBWlBwc001aG92WjdZN3BRS3lzQVRFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldQeXBHcmJ0VkEyRU1RNXc4U1hENkIvenVJY0t1YW1zWmw5LzF2eHdCRW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im45YjhnR2hxdzlUSEp2SmU0TlJ2Q1NVYzZaVEkxZHV3ckE3RWIrZjNLQXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME5ldVhzZ2FRb0p5NHluM2Z1VW96ZHAvYXBMcTFHUGMzVlpOeHltYUJVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWpTNm02QXdkV0ducnI3MGxQajMzSUhVUzByK1ZZclMyYVpFSUp3dTFEVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNUc3dvVkxYSFJVWVNsT3N4clNFZ0JmVWhiem1vSGd6bjF5NVlrYTNKcUpNaXNkZkVzUkNjVHNhOVNNb1dxN0czM3NwbWVvVjhLaktXNXVqK2VLSWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU0LCJhZHZTZWNyZXRLZXkiOiJoZjdRVHdXazFQZ055QVJLblU2TzljVk9Yb2dUTjlmZHNJSGwyYi81eXRVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDExMjE5MjExOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0QUI0QkQ3NTBENjIwODUwRTc5M0U5NDgxMURGNDgwQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3MTg3OTEzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItOWMxYzBjS1RVRzZaRGdDQVNQMndRIiwicGhvbmVJZCI6ImIzNWJjMDUyLWM4MTctNDJmMi1hZmU3LTljZjMzNGJlOTA2YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXbUxjOGdqVVVNN0JiNjRFenpjVUxHT0NTNFE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU3U3cTJnb2tMVkN5eXRDS0NORHBXZXBhTmN3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjY0WUs3SlNEIiwibWUiOnsiaWQiOiIyNTQxMTIxOTIxMTk6MzFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ0FTRVlSSE9ERVMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0svbXhQQUJFTG1YeTdjR0dBZ2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InZqdE5XVmwwUFk3TCt2T0dDc0t4dlNJaTUxaGFjOGdNemkxNmNkcWtuQmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkxmbmN3UFVXeit4SjhkNWwzczZvOXV6cTVvd09lTEVJV2RFZFNTSk1rR0xOYm5MekZMa2d0WDdsVzU0c2Fpa3ovVDBvL0prdzhLendoZlA4bXViWUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJRODFwZVZFazVIMHJiQ1dSNTkzSS80NFdGVG1Sb01ZYUVkWVB1dWx3MnZMQ3lUblZjQ0ZIRGV5eVFUWnJjcGRJM2tmTzk5aEZreTAreWw3RjkvRVpqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDExMjE5MjExOTozMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiNDdUVmxaZEQyT3kvcnpoZ3JDc2IwaUl1ZFlXblBJRE00dGVuSGFwSndYIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3MTg3OTExLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9DWSJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ 𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒 TECH⌝☜`",
  author: process.env.PACK_AUTHER || "𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒 TECH",
  packname: process.env.PACK_NAME || "𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒-V2",
  botname: process.env.BOT_NAME || "𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜ 𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒 TECH⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
