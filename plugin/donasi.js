let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
*────────「 DONATE 」 ────────*

╭═══════════════
║╭─── [ DONASI ] ───
║│➸ _*axis*_✅ : 
║│- 083813417529
║│
║│➸ _*telkom*_✅: 
║│- 082146218274
║│
║│➸ _*Owner bot*_
║│- *chat owner dlu klo mau donasi*
║╰────────────
╰═══════════════
`.trim(), 'Donasi jan asal mencet', 'Owner Bot💌', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
