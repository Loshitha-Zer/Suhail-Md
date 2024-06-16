const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""  // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  = process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website= process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "94727760245" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94727760245";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false", // disable bot in pm when public mode
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text", // set IMAGE/VIDEO links here
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_57_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzksXG4gICAgICAgIDY2LFxuICAgICAgICA3NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDk4LFxuICAgICAgICA0LFxuICAgICAgICA5MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA2NCxcbiAgICAgICAgNDksXG4gICAgICAgIDk1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNixcbiAgICAgICAgMjE4LFxuICAgICAgICA2MSxcbiAgICAgICAgODQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg3LFxuICAgICAgICA3OSxcbiAgICAgICAgNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDY3LFxuICAgICAgICA2OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDk5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQxLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA2MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDU3LFxuICAgICAgICA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgODAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQsXG4gICAgICAgIDIyLFxuICAgICAgICAwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDM2LFxuICAgICAgICA0NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDcyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTE0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA1LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicUo4eGdQMXByejhtSXo5L0JrQStXNjBhZ1VBck1OQ3dvRHk3aGd3ZGcxcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLXNyU01ldjJRR3FOWlYycUZLdG1qd1wiLFxuICBcInBob25lSWRcIjogXCJkMjdkNWMzOS00MzBiLTQ1OTItODhlNC05ODAyZjY4Y2E1NjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODMsXG4gICAgICAxOTUsXG4gICAgICAyMDcsXG4gICAgICAxOTAsXG4gICAgICAxOCxcbiAgICAgIDc3LFxuICAgICAgOTIsXG4gICAgICAxNjMsXG4gICAgICAyMTAsXG4gICAgICAxNTAsXG4gICAgICAxMSxcbiAgICAgIDEwMixcbiAgICAgIDQ1LFxuICAgICAgMjQwLFxuICAgICAgMjA3LFxuICAgICAgMTQwLFxuICAgICAgMTQ4LFxuICAgICAgNTEsXG4gICAgICAyMjMsXG4gICAgICAzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MyxcbiAgICAgIDc0LFxuICAgICAgMTM1LFxuICAgICAgMjUsXG4gICAgICAxMDQsXG4gICAgICAxOTYsXG4gICAgICAyMjIsXG4gICAgICAyMjUsXG4gICAgICAxNjQsXG4gICAgICAyMTksXG4gICAgICA4NixcbiAgICAgIDIzNixcbiAgICAgIDI0NSxcbiAgICAgIDIyNyxcbiAgICAgIDIwMixcbiAgICAgIDcyLFxuICAgICAgMTMxLFxuICAgICAgMCxcbiAgICAgIDExNyxcbiAgICAgIDE4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2S0I1UktZWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3Mjc3NjAyNDU6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkwgzpggz54gzpcgzpkgzqQgzpcgzptcIixcbiAgICBcImxpZFwiOiBcIjEyNzQ3MDg4ODAzODQyNDo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BDTS9wd0NFS1cvdmJNR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ2VCWUxZUCttRjVjUkZoRXJBQ0p2NXdpTlVxUmduaGdJT2dnRlNzMWRtQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPbzZ6djhFR0FvYjZzOTlCdFlIdEUxYmtGeVdkQkdGTkxYbWhzcHRtK1Q5Q0twTXZZZGpTNjJoS2I1aVIzVU9tell3R3BEd2ViM1pGbjd3bzB5L3RCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlT1MyMXNQek5TbHQ2VU1HMUxiUnNPSEdsVFVwUC9BaXd2ZnBwMXZVZmlHQWFvWVdXMzNCS2txbjZiMlNjb0Y3QkpVUnZnQSs4T2tKUEhVMldSN1FBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcyNzc2MDI0NTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg1NzUwMTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPeFVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU94VS5qc29uIjogIntcImtleURhdGFcIjpcIk1RVHhCWVBjZDgwRGNwRWk3ZGdtckkxWjNJT2xkR3Rna1FZd2puRHo0UmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTk3NjU3MjAwLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDIsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "L Θ Ϟ Η Ι Τ Η Λ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};

























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
 
