import { youtubeSearch } from '@bochilteam/scraper'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
let imgr = flaaa.getRandom()

  if (!text) throw 'Cari apa?'
  const { video, channel } = await youtubeSearch(text)
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': return `
š *${v.title}* (${v.url})
ā Duration: ${v.durationH}
ā²ļø Uploaded ${v.publishedTime}
šļø ${v.view} views
      `.trim()
      case 'channel': return `
š *${v.channelName}* (${v.url})
š§āš¤āš§ _${v.subscriberH} (${v.subscriber}) Subscriber_
š„ ${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n\nā£āāāā© *YT SEARCH* āŖāāāā£\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, `${imgr + command}`, [
                ['Yts!', `${usedPrefix + command} ${text}`]
            ], m, fdoc)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i

export default handler
