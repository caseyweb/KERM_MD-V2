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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFBrZ0RlZm0ycmJqaFR5eXNYcjZyTDV6Y2lSZFpzd2lnMjhzMFpIVTYzVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMld4TEFZK0s0eDR6Njd0REFITDVYK20ra1VmdittZjBLV2pjM3RRL3hHND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TnI3dHBoVUczdjV5K1QzSEpaSWNzUlVnKy82TUZkTWozOXk4RGNqamwwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFaXBJcGVFU1hjYndXYzRRMnUyZGpSOFpsTnNGdUg2bld0STBCTWh6cDFjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNLRThjdEUzTnAwMFlUQm5GeTZPbDlXU2pqT0lPL3UvVnRwTGtVWXpYbG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inp6d1V0dytCR3E2NWdLdGN1S1dBTlZzU0E4QnVaN3pQeFEwU0xGNHBjVlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUZkVHg2dFpSWGV4ZjEwZjhFbURiTGE1aGI3cUhmNm9BcDNKL1ZXcFpFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYnhuZ1FEcE5HTmpEaUtUTHVtS0NtVXlLcXJ0QlA3bnp6R2JzVVlBamtGMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im4xOXYzUlhxeFZENEhpUUhCcXFxMndDS0VGUTFaOUgzc1AyRkx0cjVHTkkrdEdXUWJCdldyU042dHVMdXp4cldhY0JMd1hEZmZsaVNJTHBoNWhGMkRBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY5LCJhZHZTZWNyZXRLZXkiOiJJOFgwbnZMTkxjY0luZ2FobHBacEJLandhbkdqNlo1TkthZEliSW1UTENjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDExMjE5MjExOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzRkIwNUNFNTE0ODFFNUQ0NDI1QzQ1NEVCOTE3MjQ5QSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2ODQzMjg0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQxMTIxOTIxMTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDM1QUMyOTcyMzg5NjdFMTcyODE3RjM0RjkxMDcwRkQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNjg0MzI4NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0MTEyMTkyMTE5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNFNUM2ODRDOTIyNTFCMjAyOUQ5MDQxQjA4NEM5NzhDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY4NDMyODZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDExMjE5MjExOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2QzEzMTFGRjgxRjk5OTY2OUM0QkQwQUNGMEJEQzkwRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2ODQzMjg3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJNcklqbTluZ1RaU1VMamtfY0R3TGpnIiwicGhvbmVJZCI6IjgwZmM3MDY5LWY1NGEtNDUxMi04Njc2LThjNGUyODBmOWI4NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTWlHM0QzR29wVHd3U0c1TE83QVpYMmhpVkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmRwWE5qNCtKWlBNVFU4cHhCU3FnTzdzMkk0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijg1VkRBV1BOIiwibWUiOnsiaWQiOiIyNTQxMTIxOTIxMTk6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDYXNleXJob2RlcyDinaTvuI8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ08yUTEvOEJFSVdUdHJjR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InQwR2VKYWNyY3FMWUdrTDNqZlFiL1NlTGpsTFppcDF4MENkQkwrTDhpbEE9IiwiYWNjb3VudFNpZ25hdHVyZSI6InhlVEV5b0NaZWh1OFBDbnVlOHdTVG5ndUYzUDZkREQvY0tjUGtYNVNyNFBkYkpMVnJnajVub2tSeHlMY1YzZHJWcWovaVBlZHRTcDMwakRrNDZYOENnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJLZis1UGRQNU9Fa29QU1hWU1FXczZrUG4rWVJ1ditRSXlzY1dEckFSTjBPSGMva3ZsejBsMDlQalg3WXQwVnF4allhV3haVVFBTlhQVkZraG9rUE1CUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDExMjE5MjExOTozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJkQm5pV25LM0tpMkJwQzk0MzBHLzBuaTQ1UzJZcWRjZEFuUVMvaS9JcFEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjY4NDMyODIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ1hwIn0="
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
