process['env']['NODE_TLS_REJECT_UNAUTHORIZED']='1';import'./config.js';import'./api.js';import{createRequire}from'module';import _0x2e8a40,{join}from'path';import{fileURLToPath,pathToFileURL}from'url';import{platform}from'process';import*as _0x5c4a95 from'ws';import{readdirSync,statSync,unlinkSync,existsSync,readFileSync,rmSync,watch}from'fs';import _0x3690f2 from'yargs';import{spawn}from'child_process';import _0x2c7ab0 from'lodash';import _0x2437de from'chalk';import _0x4cd43f from'syntax-error';import{tmpdir}from'os';import{format}from'util';import _0x19654e from'pino';import _0x2cb70b from'pino';import _0x265f46 from'pino';import{Boom}from'@hapi/boom';import{makeWASocket,protoType,serialize}from'./lib/simple.js';import{Low,JSONFile}from'lowdb';import{mongoDB,mongoDBV2}from'./lib/mongoDB.js';import _0x4a5c8f from'./lib/store.js';const {proto}=(await import('@whiskeysockets/baileys'))['default'],{DisconnectReason,useMultiFileAuthState,MessageRetryMap,fetchLatestBaileysVersion,makeCacheableSignalKeyStore,jidNormalizedUser,PHONENUMBER_MCC}=await import('@whiskeysockets/baileys');import _0x60362f from'readline';import _0xd1bc03 from'node-cache';const {CONNECTING}=_0x5c4a95,{chain}=_0x2c7ab0,PORT=process['env']['PORT']||process['env']['SERVER_PORT']||0xbb8;protoType(),serialize(),global['__filename']=function filename(_0x38ffbe=import.meta['url'],_0x5be64f=platform!=='win32'){return _0x5be64f?/file:\/\/\//['test'](_0x38ffbe)?fileURLToPath(_0x38ffbe):_0x38ffbe:pathToFileURL(_0x38ffbe)['toString']();},global['__dirname']=function dirname(_0x2583e5){return _0x2e8a40['dirname'](global['__filename'](_0x2583e5,!![]));},global['__require']=function require(_0x52c769=import.meta['url']){return createRequire(_0x52c769);},global['API']=(_0x5d4d69,_0x3d9366='/',_0x53ee83={},_0x5bc28a)=>(_0x5d4d69 in global['APIs']?global['APIs'][_0x5d4d69]:_0x5d4d69)+_0x3d9366+(_0x53ee83||_0x5bc28a?'?'+new URLSearchParams(Object['entries']({..._0x53ee83,..._0x5bc28a?{[_0x5bc28a]:global['APIKeys'][_0x5d4d69 in global['APIs']?global['APIs'][_0x5d4d69]:_0x5d4d69]}:{}})):''),global['timestamp']={'start':new Date()},global['videoList']=[],global['videoListXXX']=[];const __dirname=global['__dirname'](import.meta['url']);global['opts']=new Object(_0x3690f2(process['argv']['slice'](0x2))['exitProcess'](![])['parse']()),global['prefix']=new RegExp('^['+(opts['prefix']||'*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\x5c-.@')['replace'](/[|\\{}()[\]^$+*?.\-\^]/g,'\x5c$&')+']'),global['db']=new Low(/https?:\/\//['test'](opts['db']||'')?new cloudDBAdapter(opts['db']):new JSONFile((opts['_'][0x0]?opts['_'][0x0]+'_':'')+'database.json')),global['DATABASE']=global['db'],global['loadDatabase']=async function loadDatabase(){if(global['db']['READ'])return new Promise(_0x2c3f57=>setInterval(async function(){!global['db']['READ']&&(clearInterval(this),_0x2c3f57(global['db']['data']==null?global['loadDatabase']():global['db']['data']));},0x1*0x3e8));if(global['db']['data']!==null)return;global['db']['READ']=!![],await global['db']['read']()['catch'](console['error']),global['db']['READ']=null,global['db']['data']={'users':{},'chats':{},'stats':{},'msgs':{},'sticker':{},'settings':{},...global['db']['data']||{}},global['db']['chain']=chain(global['db']['data']);},loadDatabase(),global['chatgpt']=new Low(new JSONFile(_0x2e8a40['join'](__dirname,'/db/chatgpt.json'))),global['loadChatgptDB']=async function loadChatgptDB(){if(global['chatgpt']['READ'])return new Promise(_0x3568a5=>setInterval(async function(){!global['chatgpt']['READ']&&(clearInterval(this),_0x3568a5(global['chatgpt']['data']===null?global['loadChatgptDB']():global['chatgpt']['data']));},0x1*0x3e8));if(global['chatgpt']['data']!==null)return;global['chatgpt']['READ']=!![],await global['chatgpt']['read']()['catch'](console['error']),global['chatgpt']['READ']=null,global['chatgpt']['data']={'users':{},...global['chatgpt']['data']||{}},global['chatgpt']['chain']=_0x2c7ab0['chain'](global['chatgpt']['data']);},loadChatgptDB(),global['authFile']='Session-activa';const {state,saveState,saveCreds}=await useMultiFileAuthState(global['authFile']),msgRetryCounterMap=_0x548bed=>{},msgRetryCounterCache=new _0xd1bc03(),{version}=await fetchLatestBaileysVersion();let phoneNumber=global['botnumber'];const pairingCode=!!phoneNumber||process['argv']['includes']('--pairing-code'),useMobile=process['argv']['includes']('--mobile'),rl=_0x60362f['createInterface']({'input':process['stdin'],'output':process['stdout']}),question=_0x39aa41=>new Promise(_0x5627e5=>rl['question'](_0x39aa41,_0x5627e5)),connectionOptions={'logger':_0x2cb70b({'level':'silent'}),'printQRInTerminal':!pairingCode,'mobile':useMobile,'browser':['Chrome\x20(Linux)','',''],'auth':{'creds':state['creds'],'keys':makeCacheableSignalKeyStore(state['keys'],_0x265f46({'level':'fatal'})['child']({'level':'fatal'}))},'markOnlineOnConnect':!![],'generateHighQualityLinkPreview':!![],'getMessage':async _0x4dbc97=>{let _0x22dc96=jidNormalizedUser(_0x4dbc97['remoteJid']),_0x42f49f=await _0x4a5c8f['loadMessage'](_0x22dc96,_0x4dbc97['id']);return _0x42f49f?.['message']||'';},'msgRetryCounterCache':msgRetryCounterCache,'msgRetryCounterMap':msgRetryCounterMap,'defaultQueryTimeoutMs':undefined,'version':version};global['conn']=makeWASocket(connectionOptions);if(pairingCode&&!conn['authState']['creds']['registered']){if(useMobile)throw new Error('Cannot\x20use\x20a\x20code');let numeroTelefono;!!phoneNumber?(numeroTelefono=phoneNumber['replace'](/[^0-9]/g,''),!Object['keys'](PHONENUMBER_MCC)['some'](_0x144bb5=>numeroTelefono['startsWith'](_0x144bb5))&&(console['log'](_0x2437de['bgBlack'](_0x2437de['redBright']('Start\x20with\x20the\x20country\x20code\x20of\x20your\x20WhatsApp\x20number.'))),process['exit'](0x0))):(numeroTelefono=await question(_0x2437de['bgBlack'](_0x2437de['greenBright']('Por\x20favor,\x20escriba\x20su\x20número\x20de\x20WhatsApp.\x0aEjemplo:\x20+5219992095479\x20:\x20'))),numeroTelefono=numeroTelefono['replace'](/[^0-9]/g,''),!Object['keys'](PHONENUMBER_MCC)['some'](_0x3b6f68=>numeroTelefono['startsWith'](_0x3b6f68))&&(console['log'](_0x2437de['bgBlack'](_0x2437de['redBright']('Start\x20with\x20the\x20country\x20code\x20of\x20your\x20WhatsApp\x20number.'))),numeroTelefono=await question(_0x2437de['bgBlack'](_0x2437de['greenBright']('Por\x20favor,\x20escriba\x20su\x20número\x20de\x20WhatsApp.\x0aEjemplo:\x20+5219992095479\x20:\x20'))),numeroTelefono=numeroTelefono['replace'](/[^0-9]/g,''),rl['close']())),setTimeout(async()=>{let _0x3083e2=await conn['requestPairingCode'](numeroTelefono);_0x3083e2=_0x3083e2?.['match'](/.{1,4}/g)?.['join']('-')||_0x3083e2,console['log'](_0x2437de['black'](_0x2437de['bgGreen']('Su\x20código\x20de\x20emparejamiento:\x20')),_0x2437de['black'](_0x2437de['white'](_0x3083e2)));},0xbb8);}conn['isInit']=![],conn['well']=![],conn['logger']['info']('[\x20ℹ️\x20]\x20Cargando...\x0a');!opts['test']&&(global['db']&&setInterval(async()=>{if(global['db']['data'])await global['db']['write']();if(opts['autocleartmp']&&(global['support']||{})['find'])tmp=[os['tmpdir'](),'tmp','jadibts'],tmp['forEach'](_0x1220f3=>cp['spawn']('find',[_0x1220f3,'-amin','3','-type','f','-delete']));},0x1e*0x3e8));if(opts['server'])(await import('./server.js'))['default'](global['conn'],PORT);function clearTmp(){const _0x37b9d0=[join(__dirname,'./tmp')],_0x2a3f45=[];return _0x37b9d0['forEach'](_0x127021=>readdirSync(_0x127021)['forEach'](_0x3e9404=>_0x2a3f45['push'](join(_0x127021,_0x3e9404)))),_0x2a3f45['map'](_0x280a6c=>{const _0x25b79d=statSync(_0x280a6c);if(_0x25b79d['isFile']()&&Date['now']()-_0x25b79d['mtimeMs']>=0x3e8*0x3c*0x3)return unlinkSync(_0x280a6c);return![];});}function purgeSession(){let _0x3794e0=[],_0x2d7117=readdirSync('./Session-activa'),_0x5084ad=_0x2d7117['filter'](_0x177e60=>{return _0x177e60['startsWith']('pre-key-');});_0x3794e0=[..._0x3794e0,..._0x5084ad],_0x5084ad['forEach'](_0x183c5e=>{unlinkSync('./Session-activa/'+_0x183c5e);});}function purgeSessionSB(){try{let _0x650868=readdirSync('./jadibts/'),_0x54e2cc=[];_0x650868['forEach'](_0x304d95=>{if(statSync('./jadibts/'+_0x304d95)['isDirectory']()){let _0x10e77d=readdirSync('./jadibts/'+_0x304d95)['filter'](_0x21bc59=>{return _0x21bc59['startsWith']('pre-key-');});_0x54e2cc=[..._0x54e2cc,..._0x10e77d],_0x10e77d['forEach'](_0x1a324d=>{unlinkSync('./jadibts/'+_0x304d95+'/'+_0x1a324d);});}});if(_0x54e2cc['length']===0x0)return;}catch(_0x4002fe){console['log'](_0x2437de['bold']['red']('❗\x20Something\x20went\x20wrong\x20during\x20deletion,\x20files\x20not\x20deleted\x20'));}}function purgeOldFiles(){const _0x28a095=['./Session-activa/','./jadibts/'],_0x1d5528=Date['now']()-0x3c*0x3c*0x3e8;_0x28a095['forEach'](_0x14ef80=>{readdirSync(_0x14ef80,(_0x170860,_0x53a009)=>{if(_0x170860)throw _0x170860;_0x53a009['forEach'](_0x1b4f68=>{const _0x16d667=_0x2e8a40['join'](_0x14ef80,_0x1b4f68);stat(_0x16d667,(_0x1e4025,_0x37b91b)=>{if(_0x1e4025)throw _0x1e4025;_0x37b91b['isFile']()&&_0x37b91b['mtimeMs']<_0x1d5528&&_0x1b4f68!=='creds.json'?unlinkSync(_0x16d667,_0x24c74e=>{if(_0x24c74e)throw _0x24c74e;console['log'](_0x2437de['bold']['green']('Archivo\x20'+_0x1b4f68+'\x20borrado\x20con\x20éxito'));}):console['log'](_0x2437de['bold']['red']('Archivo\x20'+_0x1b4f68+'\x20no\x20borrado'+_0x1e4025));});});});});}async function connectionUpdate(_0x56bba7){const {connection:_0x5e5ddc,lastDisconnect:_0x309ad3,isNewLogin:_0x24eed9}=_0x56bba7;global['stopped']=_0x5e5ddc;if(_0x24eed9)conn['isInit']=!![];const _0x43b96f=_0x309ad3?.['error']?.['output']?.['statusCode']||_0x309ad3?.['error']?.['output']?.['payload']?.['statusCode'];_0x43b96f&&_0x43b96f!==DisconnectReason['loggedOut']&&conn?.['ws']['socket']==null&&(await global['reloadHandler'](!![])['catch'](console['error']),global['timestamp']['connect']=new Date());if(global['db']['data']==null)loadDatabase();_0x56bba7['qr']!=0x0&&_0x56bba7['qr']!=undefined&&console['log'](_0x2437de['yellow']('✔️\x20Scan\x20the\x20QR\x20code\x20or\x20enter\x20the\x20code\x20on\x20WhatsApp\x20'));_0x5e5ddc=='open'&&console['log'](_0x2437de['yellow']('✔️\x20Connected\x20correctly.\x20'));let _0x6354c4=new Boom(_0x309ad3?.['error'])?.['output']?.['statusCode'];if(_0x5e5ddc==='close'){if(_0x6354c4===DisconnectReason['badSession'])conn['logger']['error']('❌\x20Sesión\x20incorrecta,\x20por\x20favor\x20elimina\x20la\x20carpeta\x20'+global['authFile']+'\x20y\x20escanea\x20nuevamente.');else{if(_0x6354c4===DisconnectReason['connectionClosed'])conn['logger']['warn']('❌\x20Connection\x20closed,\x20reconnecting.'),await global['reloadHandler'](!![])['catch'](console['error']);else{if(_0x6354c4===DisconnectReason['connectionLost'])conn['logger']['warn']('❌\x20Lost\x20connection\x20to\x20the\x20server,\x20reconnecting.'),await global['reloadHandler'](!![])['catch'](console['error']);else{if(_0x6354c4===DisconnectReason['connectionReplaced'])conn['logger']['error']('❌\x20Connection\x20replaced,\x20another\x20new\x20session\x20has\x20been\x20opened.\x20Please\x20log\x20out\x20of\x20the\x20current\x20session\x20first.');else{if(_0x6354c4===DisconnectReason['loggedOut'])conn['logger']['error']('❌\x20Connection\x20closed,\x20please\x20delete\x20the\x20folder\x20'+global['authFile']+'\x20and\x20scan\x20again.');else{if(_0x6354c4===DisconnectReason['restartRequired'])conn['logger']['info']('❌\x20Reboot\x20required,\x20restart\x20the\x20server\x20if\x20you\x20have\x20any\x20problems.'),await global['reloadHandler'](!![])['catch'](console['error']);else _0x6354c4===DisconnectReason['timedOut']?(conn['logger']['warn']('❌\x20Tiempo\x20de\x20conexión\x20agotado,\x20reconectando...'),await global['reloadHandler'](!![])['catch'](console['error'])):(conn['logger']['warn']('❌\x20Unknown\x20disconnection\x20reason.\x20'+(_0x6354c4||'')+':\x20'+(_0x5e5ddc||'')),await global['reloadHandler'](!![])['catch'](console['error']));}}}}}}}process['on']('uncaughtException',console['error']);let isInit=!![],handler=await import('./handler.js');global['reloadHandler']=async function(_0x1e15fc){try{const _0x3c53b2=await import('./handler.js?update='+Date['now']())['catch'](console['error']);if(Object['keys'](_0x3c53b2||{})['length'])handler=_0x3c53b2;}catch(_0x3529f1){console['error'](_0x3529f1);}if(_0x1e15fc){const _0x5cab29=global['conn']['chats'];try{global['conn']['ws']['close']();}catch{}conn['ev']['removeAllListeners'](),global['conn']=makeWASocket(connectionOptions,{'chats':_0x5cab29}),isInit=!![];}!isInit&&(conn['ev']['off']('messages.upsert',conn['handler']),conn['ev']['off']('group-participants.update',conn['participantsUpdate']),conn['ev']['off']('groups.update',conn['groupsUpdate']),conn['ev']['off']('message.delete',conn['onDelete']),conn['ev']['off']('call',conn['onCall']),conn['ev']['off']('connection.update',conn['connectionUpdate']),conn['ev']['off']('creds.update',conn['credsUpdate']));conn['welcome']='乂✰@subject\x0a乂✰@user\x0a\x20Welcome\x20to\x20the\x20group\x20please\x20read\x20the\x20description\x20to\x20avoid\x20having\x20problems\x20with\x20the\x20group\x20creator\x0a\x0a@desc\x0a\x0a乂✰Enjoy\x20your\x20stay',conn['bye']='乂✰@user\x0a乂✰Left\x20the\x20group\x20goodbye\x20come\x20back\x20soon',conn['spromote']='乂✰@user\x0a乂✰Has\x20joined\x20the\x20management\x20team\x20',conn['sdemote']='乂✰@user\x0a乂\x20Admin\x20team\x20abandoned!!',conn['sDesc']='乂✰Group\x20description\x20has\x20been\x20changed\x0a@desc',conn['sSubject']='乂✰The\x20group\x20name\x20has\x20been\x20changed\x0a@subject',conn['sIcon']='乂✰The\x20group\x20image\x20has\x20been\x20modified',conn['sRevoke']='乂✰Group\x20link\x20updated\x0a@revoke',conn['handler']=handler['handler']['bind'](global['conn']),conn['participantsUpdate']=handler['participantsUpdate']['bind'](global['conn']),conn['groupsUpdate']=handler['groupsUpdate']['bind'](global['conn']),conn['onDelete']=handler['deleteUpdate']['bind'](global['conn']),conn['onCall']=handler['callUpdate']['bind'](global['conn']),conn['connectionUpdate']=connectionUpdate['bind'](global['conn']),conn['credsUpdate']=saveCreds['bind'](global['conn'],!![]);const _0x3dc4c1=new Date(),_0x851f10=new Date(conn['ev']);if(_0x3dc4c1>=_0x851f10){const _0x13edf9=Object['entries'](conn['chats'])['filter'](([_0x2c126d,_0x1515a0])=>!_0x2c126d['endsWith']('@g.us')&&_0x1515a0['isChats'])['map'](_0x4c8a0b=>_0x4c8a0b[0x0]);}else{const _0x3944cf=Object['entries'](conn['chats'])['filter'](([_0x1697ac,_0x34b2c1])=>!_0x1697ac['endsWith']('@g.us')&&_0x34b2c1['isChats'])['map'](_0x442be5=>_0x442be5[0x0]);}return conn['ev']['on']('messages.upsert',conn['handler']),conn['ev']['on']('group-participants.update',conn['participantsUpdate']),conn['ev']['on']('groups.update',conn['groupsUpdate']),conn['ev']['on']('message.delete',conn['onDelete']),conn['ev']['on']('call',conn['onCall']),conn['ev']['on']('connection.update',conn['connectionUpdate']),conn['ev']['on']('creds.update',conn['credsUpdate']),isInit=![],!![];};const pluginFolder=global['__dirname'](join(__dirname,'./plugins/index')),pluginFilter=_0x3803f9=>/\.js$/['test'](_0x3803f9);global['plugins']={};async function filesInit(){for(const _0x3fb846 of readdirSync(pluginFolder)['filter'](pluginFilter)){try{const _0x40f4c9=global['__filename'](join(pluginFolder,_0x3fb846)),_0x2a671f=await import(_0x40f4c9);global['plugins'][_0x3fb846]=_0x2a671f['default']||_0x2a671f;}catch(_0x6467e4){conn['logger']['error'](_0x6467e4),delete global['plugins'][_0x3fb846];}}}filesInit()['then'](_0x4c9384=>Object['keys'](global['plugins']))['catch'](console['error']),global['reload']=async(_0x1cf0df,_0x33e735)=>{if(pluginFilter(_0x33e735)){const _0x1de7d4=global['__filename'](join(pluginFolder,_0x33e735),!![]);if(_0x33e735 in global['plugins']){if(existsSync(_0x1de7d4))conn['logger']['info']('\x20updated\x20plugin\x20-\x20\x27'+_0x33e735+'\x27');else return conn['logger']['warn']('deleted\x20plugin\x20-\x20\x27'+_0x33e735+'\x27'),delete global['plugins'][_0x33e735];}else conn['logger']['info']('new\x20plugin\x20-\x20\x27'+_0x33e735+'\x27');const _0x3af874=_0x4cd43f(readFileSync(_0x1de7d4),_0x33e735,{'sourceType':'module','allowAwaitOutsideFunction':!![]});if(_0x3af874)conn['logger']['error']('syntax\x20error\x20while\x20loading\x20\x27'+_0x33e735+'\x27\x0a'+format(_0x3af874));else try{const _0x35c027=await import(global['__filename'](_0x1de7d4)+'?update='+Date['now']());global['plugins'][_0x33e735]=_0x35c027['default']||_0x35c027;}catch(_0x3ceaa7){conn['logger']['error']('error\x20require\x20plugin\x20\x27'+_0x33e735+'\x0a'+format(_0x3ceaa7)+'\x27');}finally{global['plugins']=Object['fromEntries'](Object['entries'](global['plugins'])['sort'](([_0x29a74a],[_0x5a267d])=>_0x29a74a['localeCompare'](_0x5a267d)));}}},Object['freeze'](global['reload']),watch(pluginFolder,global['reload']),await global['reloadHandler']();async function _quickTest(){const _0x32b804=await Promise['all']([spawn('ffmpeg'),spawn('ffprobe'),spawn('ffmpeg',['-hide_banner','-loglevel','error','-filter_complex','color','-frames:v','1','-f','webp','-']),spawn('convert'),spawn('magick'),spawn('gm'),spawn('find',['--version'])]['map'](_0x53c9dc=>{return Promise['race']([new Promise(_0x583d78=>{_0x53c9dc['on']('close',_0x34c2fd=>{_0x583d78(_0x34c2fd!==0x7f);});}),new Promise(_0x106c77=>{_0x53c9dc['on']('error',_0x78a75b=>_0x106c77(![]));})]);})),[_0x5c70c9,_0x3981df,_0xba6bba,_0x15a573,_0x138723,_0x43de06,_0x4544f7]=_0x32b804,_0x1ea438=global['support']={'ffmpeg':_0x5c70c9,'ffprobe':_0x3981df,'ffmpegWebp':_0xba6bba,'convert':_0x15a573,'magick':_0x138723,'gm':_0x43de06,'find':_0x4544f7};Object['freeze'](global['support']);}setInterval(async()=>{if(stopped==='close'||!conn||!conn['user'])return;const _0x379f45=await clearTmp();},0x2bf20),setInterval(async()=>{if(stopped==='close'||!conn||!conn['user'])return;await purgeSession();},0x3e8*0x3c*0x3c),setInterval(async()=>{if(stopped==='close'||!conn||!conn['user'])return;await purgeSessionSB();},0x3e8*0x3c*0x3c),setInterval(async()=>{if(stopped==='close'||!conn||!conn['user'])return;await purgeOldFiles();},0x3e8*0x3c*0x3c),setInterval(async()=>{if(stopped==='close'||!conn||!conn['user'])return;const _0xc5069f=process['uptime']()*0x3e8,_0x224722=clockString(_0xc5069f),_0xd370a0='🤖\x20This\x20user\x20makes\x20use\x20of\x20HADES-BOT-MD\x20active\x20time\x20'+_0x224722+'\x20';await conn['updateProfileStatus'](_0xd370a0)['catch'](_0x25c5ab=>_0x25c5ab);},0xea60);function clockString(_0x39fbb3){const _0x474e83=isNaN(_0x39fbb3)?'--':Math['floor'](_0x39fbb3/0x5265c00),_0x121105=isNaN(_0x39fbb3)?'--':Math['floor'](_0x39fbb3/0x36ee80)%0x18,_0xd01558=isNaN(_0x39fbb3)?'--':Math['floor'](_0x39fbb3/0xea60)%0x3c,_0xcc445d=isNaN(_0x39fbb3)?'--':Math['floor'](_0x39fbb3/0x3e8)%0x3c;return[_0x474e83,'días️',_0x121105,'horas',_0xd01558,'minutos',_0xcc445d,'segundos\x20']['map'](_0x2d86b1=>_0x2d86b1['toString']()['padStart'](0x2,0x0))['join']('');}_quickTest()['catch'](console['error']);