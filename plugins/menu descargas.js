//7W7 PORFAVOR  DEJAME CREDITOS NO SEAS MALO XD
let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
let vn = './media/descargas-bot.mp3'
let menu =`
â­âã ðâ¡ï¸ðâ¡ï¸ðâ¡ï¸ðâ¡ï¸ð ãââ®
 â    â¡ _*SAPITO BOT_* â¡
 â ð*Â¡ðola! ${username}* ð
 â
 â âï¸ *_MENÃ DESCARGAS_* âï¸
 âââââââââââââââ
â *<GESTION DE DESCARGAS/>* 
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡
â *<DESCARGAS/>*ââ¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡â¡
â£ â±ð¹ï¸ _${usedPrefix}ytcomment_
â£ â±ð¹ï¸ _${usedPrefix}imagen *texto*_
â£ â±ð¸ï¸ _${usedPrefix}ytsearch *texto*_
â£ â±ð¹ï¸ _${usedPrefix}dlaudio *link yt*_
â£ â±ð¸ï¸ _${usedPrefix}dlvid *link yt*_
â£ â±ð¹ï¸ _${usedPrefix}ytmp3 *link yt*_
â£ â±ð¸ï¸ _${usedPrefix}ytmp4 *link yt*_
â£ â±ð¹ï¸ _${usedPrefix}ytmp4.2 *link yt*_
â£ â±ð¸ï¸ _${usedPrefix}play *titulo del audio*_
â£ â±ð¹ï¸ _${usedPrefix}play2 *titulo del video*_
â£ â±ð¸ï¸ _${usedPrefix}play3 *titulo del audio/video*_
â£ â±ð¹ï¸ _${usedPrefix}play4 *titulo del video*_
â£ â±ð¸ï¸ _${usedPrefix}letra *nombredelacanciÃ³n*_
â£ â±ð¹ï¸ _${usedPrefix}google *texto*_
â£ â±ð¸ï¸ _${usedPrefix}googlef *texto*_
â£ â±ð¹ï¸ _${usedPrefix}wikipedia *palabra clave*_
â£ â±ð¸ï¸ _${usedPrefix}pinterestvideo *link de pinterest*_
â£ â±ð¹ï¸ _${usedPrefix}tiktokaudio *link del tiktok*_
â£ â±ð¸ï¸ _${usedPrefix}tiktok *link*_
â£ â±ð¹ï¸ _${usedPrefix}spotify *autor, cancion*_
â£ â±ð¸ï¸ _${usedPrefix}acortar *link*_
â£ â±ð¹ï¸ _${usedPrefix}pinterest *texto*_
â£ â±ð¸ï¸ _${usedPrefix}xnxx *link de xnxx*_
â£ â±ð¹ï¸ _${usedPrefix}xnxxsearch *texto*_
â£ â±ð¸ï¸ _${usedPrefix}ssweb *link*_
â£ â±ð¹ï¸ _${usedPrefix}igstory *username*_
â£ â±ð¸ï¸ _${usedPrefix}igstalk *username*_
â£ â±ð¹ï¸ _${usedPrefix}animeinfo *nombre del anime*_
â£ â±ð¸ï¸ _${usedPrefix}twvid *link de video de twitter*_
âââââââââââââââ
â  *_DESCARGAS MEDIAFIRE_*
ââââââââââââââââââââââââ 
â£ â±ð¥ _${usedPrefix}mediafire_
âââââââââââââââ
âã ðâ¡ðâ¡ðâ¡ðâ¡ð ãâ`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, 'Sapito', 'ðHOLAð', `Hola`, 'NO DIGAS MAMADAS MERIYEIN', `No digas mamadas`, 'ð¶ððð¿ð¾ ð¾ðµð¸ð²ð¸ð°ð»', `#grupos`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'descargas-bot.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(menudescargas)$/i
handler.fail = null
module.exports = handler
