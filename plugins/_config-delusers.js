let handler = async (m, { conn, text }) => {
    function no(number) {
        return number.replace(/\s/g,'').replace(/([@+-])/g,'');
    }
    text = no(text);

    if (isNaN(text)) {
        var number = text.split`@`[1];
    } else if (!isNaN(text)) {
        var number = text;
    }

    if (!text && !m.quoted) {
        return conn.reply(m.chat, `*MENTION THE USER, WRITE THEIR NUMBER, OR REPLY TO A MESSAGE TO RESET DATA*`, m);
    }
    if (isNaN(number)) {
        return conn.reply(m.chat, `*THE NUMBER YOU ENTERED IS NOT VALID FOR DATA RESET*`, m);
    }
    try {
        if (text) {
            var user = number + '@s.whatsapp.net';
        } else if (m.quoted.sender) {
            var user = m.quoted.sender;
        } else if (m.mentionedJid) {
            var user = number + '@s.whatsapp.net';
        }
    } catch (e) {
    } finally {
        let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {};
        let participants = m.isGroup ? groupMetadata.participants : [];
        let users = m.isGroup ? participants.find(u => u.jid == user) : {};
        let number = user.split('@')[0];

        delete global.global.db.data.users[user];
        conn.reply(m.chat, `*RESET DATA FOR @${number} FROM THE DATABASE*`, null, { mentions: [user] });
    }
}

handler.tags = ['owner'];
handler.command = ['del-user', 'deletedatauser']; 
handler.owner = true;

export default handler;
