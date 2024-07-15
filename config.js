const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_25_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzgsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NixcbiAgICAgICAgNzYsXG4gICAgICAgIDk3LFxuICAgICAgICA3MixcbiAgICAgICAgMTU3LFxuICAgICAgICAwLFxuICAgICAgICA0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMxLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3LFxuICAgICAgICA2NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEwLFxuICAgICAgICA0MixcbiAgICAgICAgMTExLFxuICAgICAgICAxMjksXG4gICAgICAgIDgzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDY5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDc4LFxuICAgICAgICA2MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDM5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA5NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzksXG4gICAgICAgIDY0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjgsXG4gICAgICAgIDIyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA5MyxcbiAgICAgICAgOSxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI5LFxuICAgICAgICA4NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDUyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEwLFxuICAgICAgICA2MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjksXG4gICAgICAgIDg0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDkxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODksXG4gICAgICAgIDc1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI3LFxuICAgICAgICA2MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlh0b1ZqVlRFdXlWQ1BDS3ROc3cweG5TY05uRW5hYXNPeWhqaGZxaUY5Zk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdVSTg2RGt6VHFDRHF4Qm93N0d3NWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmI2OTI4MzUtMmY5Yi00YTBjLTliNGItNDBiZTU5OTRjZDdiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgyLFxuICAgICAgMTc5LFxuICAgICAgNDQsXG4gICAgICAxMCxcbiAgICAgIDM5LFxuICAgICAgMTIyLFxuICAgICAgNDUsXG4gICAgICAyMzMsXG4gICAgICAxNCxcbiAgICAgIDEzMixcbiAgICAgIDEzMCxcbiAgICAgIDIzMyxcbiAgICAgIDE4NSxcbiAgICAgIDEwNyxcbiAgICAgIDE0MCxcbiAgICAgIDE1MixcbiAgICAgIDM1LFxuICAgICAgMjcsXG4gICAgICA2NixcbiAgICAgIDI0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDIsXG4gICAgICA2NixcbiAgICAgIDIxNSxcbiAgICAgIDE0MixcbiAgICAgIDE3OSxcbiAgICAgIDIxNSxcbiAgICAgIDI0MyxcbiAgICAgIDE5NixcbiAgICAgIDEwOCxcbiAgICAgIDE1NixcbiAgICAgIDE2MixcbiAgICAgIDg0LFxuICAgICAgMTI2LFxuICAgICAgMTQ0LFxuICAgICAgMTg3LFxuICAgICAgMjMwLFxuICAgICAgNjcsXG4gICAgICA5OCxcbiAgICAgIDI1MSxcbiAgICAgIDUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNGUllFNkdBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcyNzc2MDI0NTozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkwgzpggz54gzpcgzpkgzqQgzpcgzptcIixcbiAgICBcImxpZFwiOiBcIjEyNzQ3MDg4ODAzODQyNDozMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQT00vcHdDRUpQeTA3UUdHQmtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImdlQllMWVArbUY1Y1JGaEVyQUNKdjV3aU5VcVJnbmhnSU9nZ0ZTczFkbUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwid0tlZTM5Mkc0NnRrUnN2WXhnV2xoa2szQkJBU1dDT1hSSW93RXRIVzM1RWltOU84b3d2K2VXOEUxWGJGbzJHODJ3QjRyZmpOOGZQUlBXUVZOVWR1QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL3NkcjQ0L01HZG1JKytGWEhuNTNzUFpPdm9iN05NNHdmRlRCWmFXMEFXMEN5M1AyQzkxWHlhVXVhcVM0T2QvQmNvRjFSb2ZYbUFXTkYwV2pzREh0Z1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3Mjc3NjAyNDU6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3Mjc3NjAyNDU6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTAzOTEyNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU82bVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTzZtLmpzb24iOiAie1wia2V5RGF0YVwiOlwiS2tnTjBSTmw4dkFKYmlEWWU3Z09HMUZUR2xHSVg1SEU1K1I1Vit0eGJOOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1OTc2NTcyMDMsXCJjdXJyZW50SW5kZXhcIjoyMSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDIwLDIxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
