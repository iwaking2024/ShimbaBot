import{unlinkSync,readFileSync}from'fs';import{join}from'path';import{exec}from'child_process';let handler=async(_0x170e44,{conn:_0x43622a,args:_0x596cd6,__dirname:_0x63fb8b,usedPrefix:_0x28be0a,command:_0x5a6267})=>{try{let _0x1aab7d=_0x170e44['quoted']?_0x170e44['quoted']:_0x170e44,_0x1c8e9e=(_0x170e44['quoted']?_0x170e44['quoted']:_0x170e44['msg'])['mimetype']||'',_0x3bbf28;if(/bass/['test'](_0x5a6267))_0x3bbf28='-af\x20equalizer=f=94:width_type=o:width=2:g=30';if(/blown/['test'](_0x5a6267))_0x3bbf28='-af\x20acrusher=.1:1:64:0:log';if(/deep/['test'](_0x5a6267))_0x3bbf28='-af\x20atempo=4/4,asetrate=44500*2/3';if(/earrape/['test'](_0x5a6267))_0x3bbf28='-af\x20volume=12';if(/fast/['test'](_0x5a6267))_0x3bbf28='-filter:a\x20\x22atempo=1.63,asetrate=44100\x22';if(/fat/['test'](_0x5a6267))_0x3bbf28='-filter:a\x20\x22atempo=1.6,asetrate=22100\x22';if(/nightcore/['test'](_0x5a6267))_0x3bbf28='-filter:a\x20atempo=1.06,asetrate=44100*1.25';if(/reverse/['test'](_0x5a6267))_0x3bbf28='-filter_complex\x20\x22areverse\x22';if(/robot/['test'](_0x5a6267))_0x3bbf28='-filter_complex\x20\x22afftfilt=real=\x27hypot(re,im)*sin(0)\x27:imag=\x27hypot(re,im)*cos(0)\x27:win_size=512:overlap=0.75\x22';if(/slow/['test'](_0x5a6267))_0x3bbf28='-filter:a\x20\x22atempo=0.7,asetrate=44100\x22';if(/smooth/['test'](_0x5a6267))_0x3bbf28='-filter:v\x20\x22minterpolate=\x27mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\x27\x22';if(/tupai|squirrel|chipmunk/['test'](_0x5a6267))_0x3bbf28='-filter:a\x20\x22atempo=0.5,asetrate=65100\x22';if(/audio/['test'](_0x1c8e9e)){let _0x44e280=getRandom('.mp3'),_0x2d0fd1=join(_0x63fb8b,'../tmp/'+_0x44e280),_0x3f2527=await _0x1aab7d['download'](!![]);exec('ffmpeg\x20-i\x20'+_0x3f2527+'\x20'+_0x3bbf28+'\x20'+_0x2d0fd1,async(_0xcc1cab,_0x2e2c60,_0x5aaa14)=>{await unlinkSync(_0x3f2527);if(_0xcc1cab)throw'_*Error!*_';let _0x1e38ba=await readFileSync(_0x2d0fd1);_0x43622a['sendFile'](_0x170e44['chat'],_0x1e38ba,_0x44e280,null,_0x170e44,!![],{'type':'audioMessage','ptt':!![]});});}else throw'[❗]\x20respond\x20to\x20a\x20voice\x20note\x20that\x20you\x20want\x20to\x20modify\x20';}catch(_0x45d557){throw _0x45d557;}};handler['help']=['bass','blown','deep','earrape','fast','fat','nightcore','reverse','robot','slow','smooth','tupai']['map'](_0x906d1c=>_0x906d1c+'\x20[vn]'),handler['tags']=['audio'],handler['command']=/^(bass|blown|deep|earrape|fas?t|nightcore|reverse|robot|slow|smooth|tupai|squirrel|chipmunk)$/i,handler['register']=!![],handler['premium']=!![];export default handler;const getRandom=_0x2bbefe=>{return''+Math['floor'](Math['random']()*0x2710)+_0x2bbefe;};