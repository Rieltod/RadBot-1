let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
╭═══ 〔 SEWA BOT 〕 ════
├⬡ 𝟏 ᗰIᑎᘜᘜᑌ
├⬡ 2 ᗰIᑎᘜᘜᑌ
├⬡ 3 ᗰIᑎᘜᘜᑌ
├⬡ 1 ᗷᑌᒪᗩᑎ
└═══════════════
𝗦𝗶𝗹𝗮𝗸𝗮𝗻 𝗸𝗹𝗶𝗸 𝗽𝗮𝗱𝗮 "𝗟𝗶𝘀𝘁 𝗛𝗮𝗿𝗴𝗮" 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗹𝗶𝗵𝗮𝘁 𝗹𝗶𝘀𝘁.
╭═══════════════════════
║╭──❉ 〔 𝐕𝐈𝐀 pulsa 〕 ❉──────
║│➸ *axis* : 083813417529
║│➸ *telkom*: 082146218274
║│➸ *Owner*: wa.me/6282146218274
║╰─────────────────────
╰═══════════════════════`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: '1 Minggu', description: "Rp5.000\nSewa bot 1 Minggu.", rowId:".owner"},
        {title: '2 Minggu', description: "Rp10.000\nSewa bot 2 Minggu.", rowId:".owner"},
        {title: '3 Minggu', description: "Rp15.000\nSewa bot 3 Minggu.", rowId:".owner"},
        {title: '1 Bulan', description: "Rp20.000\nSewa bot 1 Bulan.", rowId:".owner"},
        {title: 'Trial', description: "Free\nBot Free 1 Hari.", rowId:".owner"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Rules Bot LynXzy.", rowId:".snk"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//R-Txzy
