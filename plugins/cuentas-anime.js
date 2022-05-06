let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭═════• 💚⚡💚 •═════╮ 

*Ver anime gratis premiun durante 14 dias|Te pedimos que no cambies nada:*

 🔰nombre  de la apk Crunchyroll descargala en la play store 🔰

*🙀💚correo:toxicoyt084@gmail.com*
Contraseña:BotAgromos2001

*Data*
Fecha de cuenta agregada:24/03/22
Vencimiento: 0 días restantes expirado 🚫
═══════════════
*🙀💚correo:cupsisadri@vusra.com
*contra:Agromos19
 
*Data*
Fecha de cuenta agregada:05/04/22
Vencimiento:0días restantes expirado 🚫

Pronto  nuevas cuentas aparecerán aquí😼💚
╰═════• 💚⚡💚 •═════╯
`.trim() 
//¡GRACIAS!
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '💚Sapito ', 'status@broadcast')
}
handler.command = /^(cuentasanime|CUENTASANIME|VerAnimeGratis|Crunchyroll|veranime)$/i

module.exports = handler
