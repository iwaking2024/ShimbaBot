import _0x40fa0d from'moment-timezone';import _0x2c14e2 from'node-fetch';const handler=async(_0x45d061,{conn:_0x1c4d33,args:_0x5e6a38})=>{const _0x1943d7=await _0x2c14e2('https://api.github.com/repos/iwaking2024/ShimbaBot.git'),_0xb531b5=await _0x1943d7['json']();let _0x587637='乂✰shimba✰乂\x0a';_0x587637+='乂✰Name\x20'+(_0xb531b5?.['name']||'ShimbaBot')+'\x0a',_0x587637+='乂✰Update\x20'+(_0x40fa0d(_0xb531b5?.['updated_at'])['format']('DD/MM/YY\x20-\x20HH:mm:ss')||'-')+'\x0a',_0x587637+='乂✰Url:\x20'+(_0xb531b5?.['html_url']||'https://github.com/iwaking2024/ShimbaBot')+'\x0a\x0a',_0x587637+='乂✰'+(_0xb531b5?.['forks_count']||'-')+'\x20Forks\x20·\x20'+(_0xb531b5?.['stargazers_count']||'-')+'\x20Stars\x20·\x20'+(_0xb531b5?.['open_issues_count']||'-')+'\x20Issues',await _0x1c4d33['sendMessage'](_0x45d061['chat'],{'text':_0x587637['trim'](),'mentions':[..._0x587637['matchAll'](/@([0-9]{5,16}|0)/g)]['map'](_0x44bcc7=>_0x44bcc7[0x1]+'@s.whatsapp.net'),'contextInfo':{'forwardingScore':0x98967f,'isForwarded':!![],'mentionedJid':[..._0x587637['matchAll'](/@([0-9]{5,16}|0)/g)]['map'](_0x37deb2=>_0x37deb2[0x1]+'@s.whatsapp.net'),'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'renderLargerThumbnail':!![],'title':global['titulowm2'],'containsAutoReply':!![],'mediaType':0x1,'thumbnail':imagen6,'mediaUrl':'https://www.atom.bio/theelegendd','sourceUrl':'https://www.atom.bio/theelegendd'}}},{'quoted':_0x45d061});};handler['help']=['scbot'],handler['tags']=['info'],handler['command']=/^(sc|scbot|scrip|script)$/i;export default handler;