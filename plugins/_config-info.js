// Define your utility functions here
function sort(property, ascending = true) {
    if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
    else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
    if (property) return (a, i, b) => {
        return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
    }
    else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
    return a.jid
}

// Your handler function
let handler = async (m, { conn, args, participants }) => {
    let users = Object.entries(global.db.data.users).map(([key, value]) => {
        return {...value, jid: key}
    })
    let sortedExp = users.map(toNumber('exp')).sort(sort('exp'))
    let sortedLim = users.map(toNumber('limit')).sort(sort('limit'))
    let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
    let sortedGems = users.map(toNumber('gems')).sort(sort('gems'))
    let sortedAge = users.map(toNumber('age')).sort(sort('age'))
    let usersExp = sortedExp.map(enumGetKey)
    let usersLim = sortedLim.map(enumGetKey)
    let usersLevel = sortedLevel.map(enumGetKey)
    let usersGems = sortedGems.map(enumGetKey)
    let usersAge = sortedAge.map(enumGetKey)
    
    let user = users.find(u => u.jid === m.sender)
    m.react('🌐');
    let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 20)) : Math.min(20, sortedExp.length)
    
    let text = `
*< Your account />*
*Name : ${user.name}*
*Age : ${user.age}*
*Country : ${user.country || 'Not specified'}*
*Registration Time : ${user.regTime || 'Not registered'}*
*Premium :* ${user.premiumTime > 0 ? '✅' : '❌'}
*Registrado :* ${user.registered === true ? '✅' : '❌'}
*< Your level in the world />*
*Level : ${user.level} 🐋* 
*Top : ${usersLevel.indexOf(m.sender) + 1} Users ${usersLevel.length}*
    
*< Your diamonds and ranking />*
*Diamantes : ${user.limit} 💎*
*Top  : ${usersGems.indexOf(m.sender) + 1} Users ${usersGems.length}*`.trim()

    // Add guidance for adding country
    text += `\n\n*To add your country, please follow the format "age country". For example : /make-account name.30 United States.*`

    m.reply(text, null, { mentions: conn.parseMention(text) })
}

handler.help = ['top']
handler.tags = ['xp']
handler.command = ['info'] 
handler.register = true
handler.fail = null
handler.exp = 0

export default handler
