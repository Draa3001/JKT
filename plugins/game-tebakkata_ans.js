const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*tkaa/i.test(m.quoted.text)) return !0
    this.tbkata = this.tbkata ? this.tbkata : {}
    if (!(id in this.tbkata)) return m.reply('Soal itu telah berakhir')
    if (m.quoted.id == this.tbkata[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tbkata[id][1]))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tbkata[id][2]
            m.reply(`*Benar!*\n+${this.tbkata[id][2]} Kredit sosial`)
            clearTimeout(this.tbkata[id][3])
            delete this.tbkata[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Salah!*`)
    }
    return !0
}
handler.exp = 0

module.exports = handler
