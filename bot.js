const Discord = require('discord+js');
const db = require('quick+db');
const client = new Discord+Client();   
const giphy = require('giphy-api')();    
const googl = require('goo+gl'); 
const translate = require('google-translate-api'); 
const fs = require("fs");      
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord+js');  
const UserBlocked = new Set();   
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags')+stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map();
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
 const dateFormat = require('dateformat');
 const pretty = require('pretty-ms') 
,ti={}  
,spee={};

const devs = ["442818190062387210"]// ايدي الخاص بحسابك

const adminprefix = "!";//Narox
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
    if (message.content === (adminprefix + "Percie")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {// لجعل البوت في حاله الواتشنق
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {// لجعل البوت في حاله الاستماع
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else     //Narox
    if (message.content.startsWith(adminprefix + 'setname')) {// لتغير اسم البوت
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done `)
  return message.reply("**Name Changed :white_check_mark:**");
  } else
    if (message.content.startsWith(adminprefix + 'setavatar')) {// لتغير صوره البوت
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else     
  if (message.content.startsWith(adminprefix + 'st')) {// لعمل ستريمنق للبوت
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
    if(message.content === adminprefix + "restart") {// لعمل ريسترت للبوت
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
        console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`⚠️ Bot restarting... ⚠️`);
        console.log("===============================================\n\n");
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`Bot Successfully Restarted`);
    }
  
  });

client.on('message' , message => {
if(message.content === '+help') {
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
message.author.send(`
 :clipboard: | قـــائمة المساعدة**
**:earth_africa: الأوامر العامة

  ** +allbots | لعرض جميع البوتات الي بالسيرفر** 
  ** +server |يعرض لك معلومات عن السيرفر**
  ** +bot | يعرض لك كل معلومات البوت**
  ** +count | يعرض لك عدد الاشخاص بالسيرفر بدون بوتات** 
  ** +invites | يعرض لك  عدد انفايتاتك بالسيرفر ** 
  ** +say | يكرر الكلام الي تكتبو**:sparkles: 
  ** +members | يعرض لك عدد كل حالات الاشخاص وعدد البوتات وعدد الاشخاص**
  ** +profile | ليعرض البرفايل حقك** 
  ** +avatar | صورتك او صورة الي تمنشنو**
  ** +inv | لدعوة البوت الى سيرفرك**
	
:gear: أوامر الاِدارة**
**			 
  ** +move @user |  لسحب الشخص الى روومك** 
  ** +bc | رسالة جماعية الى كل اعضاء السيرفر** 
  ** +role @user <rank> | لأعطاء رتبة لعضو معين**
  ** +role all <rank> | لأعطاء رتبة للجميع**:shield: 
  ** +role humans <rank> | لأعطاء رتبة للاشخاص فقط **:man: , 
  ** +role bots <rank> | لأعطاء رتبة لجميع البوتات**:robot: 
  ** +clear | مسح الشات ** :recycle: 
  ** +mute @user <reason> | اعطاء العضو ميوت لازم رتبة <Muted>**
  ** +unmute @user | لفك الميوت عن الشخص ** 
  ** +kick @user <reason> | طرد الشخص من السيرفر**  
  ** +ban @user <reason> | حضر الشخص من السيرفر** 
  ** +ccolors <number> | ينشا لك الوان مع كم الوان تبي**

:notes: أوامر الأغاني **

  ** +play | لتشغيل اغنية برابط او بأسم** 
  ** +skip | لتجآوز الأغنية الحآلية**
  ** +pause | إيقآف الأغنية مؤقتا**
  ** +resume | ل**موآصلة الإغنية بعد إيقآفهآ مؤقتا
  ** +vol | لتغيير درجة الصوت 100 - 0**
  ** +stop | لإخرآج البوت من الروم**
  ** +np | لمعرفة الأغنية المشغلة حآليا**
  ** +queue | لمعرفة قآئمة التشغيل**
  
  أوامر الألعاب :game_die: **
**
  ** +speed | اسرع كتابن ** 
  ** +quas | اسئلة عامة ** 
  ** +لعبة فكك | فكك ** 
  ** +لعبة عواصم | عواصم** 
  ** +لعبة كت تويت | كت تويت ** 
  ** +لو خيروك بطريقة حلوة | لوخيروك
  ** +يعطيك عقابات قاسية |عقاب** 
`);
}
})

    client+on('message', async msg => {
    var prefix = "+";
    var user = msg+author;
        if (msg+content === (prefix +'help')) {
        if(!msg+channel+guild) return msg+channel+send('**هذا الأمر فقط للسيرفرات**')+then(m => m+delete(5000));
        msg+channel+send({embed: new Discord+RichEmbed()
 +setAuthor(client+user+username , client+user+avatarURL)
 +setThumbnail(msg+author+avatarURL)
 +setTitle(`Welcome To ${msg+guild+name}`)
           +setFooter(`- Requested By: ${msg+author+tag}`,msg+author+avatarURL)
  +setURL('https://discordapp+com/oauth2/authorize?client_id=466256531998900246&permissions=8&scope=bot')
 +setDescription(`**اذا كنت تريد الاوامر العامة اظغط الريكشن** 🌏 \n**اذا كنت تريد الاوامر الادارية اظغط الريكشن**🔧 \n**اذا كنت تريد اوامر الالعاب**🎲 \n**اذا كنت تريد اوامر الاغاني **🎶\n              **وشكرا لمستخدمين البوت**`)  
 
 +setTimestamp()
})+then(zg => {
     zg+react('🌏')+then(r=>{
     zg+react('🔧')+then(r=>{
     zg+react('🎲')+then(r=>{
     zg+react('🎶')+then(r=>{          
 var aaa = (reaction, user) => reaction+emoji+name === '🌏' && user+id === msg+author+id;
   var mmm = (reaction, user) => reaction+emoji+name === '🔧' && user+id === msg+author+id;
    var vvv = (reaction, user) => reaction+emoji+name === '🎲' && user+id === msg+author+id;
    var ccc = (reaction, user) => reaction+emoji+name === '🎶' && user+id === msg+author+id;
 
    var aa = zg+createReactionCollector(aaa, { maxMatches:1 , time: 60000 , });
    var mm = zg+createReactionCollector(mmm, { maxMatches:1 , time: 60000 , });
    var vv = zg+createReactionCollector(vvv, { maxMatches:1 , time: 60000 , });
    var cc = zg+createReactionCollector(ccc, { maxMatches:1 , time: 60000 , });
 
aa+on("collect", r => {
    zg+edit({embed: new Discord+RichEmbed()
 +setAuthor(client+user+username , client+user+avatarURL)
 +setThumbnail(msg+author+avatarURL)
 +setTitle(`Welcome To ${msg+guild+name}`)
          +setFooter(`- Requested By: ${msg+author+tag}`,msg+author+avatarURL)
  +setURL('https://discordapp+com/oauth2/authorize?client_id=466256531998900246&permissions=8&scope=bot')
+setDescription(`        ***__الاوامر العامه__*** **\n${prefix}**allbots/لعرض جميع البوتات الي بالسيرفر』**\n${prefix}**server/يعرض لك معلومات عن السيرفر』**\n${prefix}**bot/يعرض لك كل معلومات البوت』**\n${prefix}**credit/يعرض لك الكردت حقك』**\n${prefix}**daily/لاخذ يوميتك من الكردت』**\n${prefix}**profile/لعرض البروفايل الخاص بك』**\n${prefix}**setwelcomer <name chat> /لتفعيل الترحيب بصوره 』**\n${prefix}**invites/ يعرض لك  عدد انفايتاتك بالسيرفر 』**\n${prefix}**invite-codes/يعرض لك روابط الانفايتات حكك في السيرفر 』**\n${prefix}**cal/اله حاسبة**\n${prefix}**trans <language> <any thing>/يترجم لك الي تبيه من اي لغة』**\n${prefix}**short/يختصر لك رابط كبير الى رابط صغير』**\n${prefix}**tag/يكتب لك الكلمة بشكل جميل وكبير』**\n${prefix}**google/للبحث في قوقل عن طريق الدسكورد』**\n${prefix}**perms/يعرض لك برمشناتك بالسيرفر』**\n${prefix}**za5/يزخرف لك كلمة او جملة』**\n${prefix}**rooms/يعرض لك كل الرومات الي بالسيرفر مع عددها』**\n${prefix}**roles/يعرض لك كل الرانكات بالسيرفر بشكل جميل』**\n${prefix}**say/يكرر الكلام الي تكتبو』**\n${prefix}**image/صورة السيرفر』**\n${prefix}**members/��عرض لك عدد كل حالات الاشخاص وعدد البوتات وعدد الاشخاص』**\n${prefix}**id/معلومات عنك』**\n${prefix}**bans / عدد الاشخاص المبندة 』**\n${prefix}**avatar/صورتك او صورة الي تمنشنو』**\n${prefix}**embed/يكرر الي تقولو بشكل حلو』**\n${prefix}**discrim/كود يضهر لك الاشخاص نفس تاقك』**\n${prefix}**emoji <any things>/لتحويل اي كلمه تقولها الي ايموجي』**\n${prefix}**inv/لدعوة البوت الى سيرفرك』**\n${prefix}**support/سيرفر الدعم』**\n${prefix}**contact/ارسال اقتراح او لمراسلة صاحب البوت』`)
 
 +setTimestamp()
    });
   
   
    })//
mm+on("collect", r => {
    zg+edit({embed: new Discord+RichEmbed()
 +setAuthor(client+user+username , client+user+avatarURL)
 +setThumbnail(msg+author+avatarURL)
 +setTitle(`Welcome To ${msg+guild+name}`)
           +setFooter(`- Requested By: ${msg+author+tag}`,msg+author+avatarURL)
  +setURL('https://discordapp+com/oauth2/authorize?client_id=466256531998900246&permissions=8&scope=bot')
+setDescription(`        ***__الاوامر الاداريه__*** **\n${prefix}**move @user /  لسحب الشخص الى روومك』**\n${prefix}**bc / رسالة جماعية الى كل اعضاء السيرفر』**\n${prefix}**role @user <rank> / لأعطاء رتبة لعضو معين』**\n${prefix}**roleremove @user <rank> / لازالة الرتبة من شخص معين』**\n${prefix}**role all <rank> / لأعطاء رتبة للجميع』**\n${prefix}**role humans <rank> / لأعطاء رتبة للاشخاص فقط』**\n${prefix}**role bots <rank> / لأعطاء رتبة لجميع البوتات』**\n${prefix}**hchannel / اخفاء الشات』**\n${prefix}**schannel / اضهار الشات المخفية』**\n${prefix}**clr <numbr> / مسح الشات بعدد』**\n${prefix}**clear / مسح الشات』**\n${prefix}**mute @user <reason> / اعطاء العضو ميوت لازم رتبة <Muted>』**\n${prefix}**unmute @user / لفك الميوت عن الشخص 』**\n${prefix}**kick @user <reason> / طرد الشخص من السيرفر』**\n${prefix}**ban @user <reason> / حضر الشخص من السيرفر』**\n${prefix}**mutechannel / تقفيل الشات』**\n${prefix}**unmutechannel / فتح الشات』**\n${prefix}**dc / مسح كل الرومات』**\n${prefix}**dr / <مسح كل الرانكات <لازم تكون رانك البوت فوق كل الرانكات』**\n${prefix}**ct <name> / انشاء شات』**\n${prefix}**cv <name> / انشاء رووم فويس』**\n${prefix}**delet <name> / مسح الشات او الرووم فويس』**\n${prefix}**ccolors <number> / ينشا لك الوان مع كم الوان تبي』`)  
 
+setTimestamp()
    });
   
    })
cc+on("collect", r => {
    zg+edit({embed: new Discord+RichEmbed ()
+setAuthor(client+user+username , client+user+avatarURL)
 +setThumbnail(msg+author+avatarURL)
 +setTitle(`Welcome To ${msg+guild+name}`)
           +setFooter(`- Requested By: ${msg+author+tag}`,msg+author+avatarURL)
  +setURL('https://discordapp+com/oauth2/authorize?client_id=466256531998900246&permissions=8&scope=bot')
+setDescription(`        ***__اوامر اغاني__*** **\n${prefix}**play / لتشغيل أغنية برآبط أو بأسم』**\n${prefix}**skip / لتجآوز الأغنية الحآلية』**\n${prefix}**pause / إيقآف الأغنية مؤقتا』**\n${prefix}**resume / لموآصلة الإغنية بعد إيقآفهآ مؤقتا』**\n${prefix}**vol / لتغيير درجة الصوت 100 - 0』**\n**+stop / لإخرآج البوت من الروم』**\n${prefix}**np / لمعرفة الأغنية المشغلة حآليا』**\n**+queue / لمعرفة قآئمة التشغيل』`)
 
 
 +setTimestamp()
    });
   
})
vv+on("collect", r => {
    zg+edit({embed: new Discord+RichEmbed ()
+setAuthor(client+user+username , client+user+avatarURL)
 +setThumbnail(msg+author+avatarURL)
 +setTitle(`Welcome To ${msg+guild+name}`)
           +setFooter(`- Requested By: ${msg+author+tag}`,msg+author+avatarURL)
  +setURL('https://discordapp+com/oauth2/authorize?client_id=466256531998900246&permissions=8&scope=bot')
+setDescription(`   ***__اوامر العاب__*** **\n${prefix}**rps / حجر ورقة مقص**\n${prefix}**speed / اسرع كتابة』**\n${prefix}**quas / اسئلة عامة』**\n${prefix}**نكت / نكت 』**\n${prefix}**لعبة فكك / فكك』**\n${prefix}**عواصم عشوائي/عواصم』**\n${prefix}**لعبة كت تويت / كت تويت』**\n${prefix}**roll <number> / قرعة』**\n${prefix}**لو خيروك بطريقة حلوة / لو خيروك』**\n${prefix}**لعبة مريم / مريم』**\n${prefix}**فوائد ونصائح  / هل تعلم』**\n${prefix}**يعطيك عقابات قاسية / عقاب 』`)
 
 
 +setTimestamp()
    });
   
})
     })+then(msg => msg+delete(15000));
     })
     })
     })
})
     }
     });




const prefix = "+"
client+on('message', async msg => { 
	if (msg+author+bot) return undefined;
	if (!msg+content+startsWith(prefix)) return undefined;
	const args = msg+content+split(' ');
	const searchString = args+slice(1)+join(' ');
	const url = args[1] ? args[1]+replace(/<(++)>/g, '$1') : '';
	const serverQueue = queue+get(msg+guild+id);
	let command = msg+content+toLowerCase()+split(" ")[0];
	command = command+slice(prefix+length)
	if (command === `play`) {
		const voiceChannel = msg+member+voiceChannel;
		if (!voiceChannel) return msg+channel+send('يجب توآجد حضرتك بروم صوتي +');
		const permissions = voiceChannel+permissionsFor(msg+client+user);
		if (!permissions+has('CONNECT')) {
			
			return msg+channel+send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}
		if (!permissions+has('SPEAK')) {
			return msg+channel+send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}

		if (!permissions+has('EMBED_LINKS')) {
			return msg+channel+sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **")
		}

		if (url+match(/^https?:\/\/(www+youtube+com|youtube+com)\/playlist(+*)$/)) {
			const playlist = await youtube+getPlaylist(url);
			const videos = await playlist+getVideos();
			
			for (const video of Object+values(videos)) {
				const video2 = await youtube+getVideoByID(video+id);
				await handleVideo(video2, msg, voiceChannel, true);
			}
			return msg+channel+send(` **${playlist+title}** تم الإضآفة إلى قأئمة التشغيل`);
		} else {
			try {

				var video = await youtube+getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube+searchVideos(searchString, 5);
					let index = 0;
					const embed1 = new Discord+RichEmbed()
			        +setDescription(`**الرجآء من حضرتك إختيآر رقم المقطع** :
${videos+map(video2 => `[**${++index} **] \`${video2+title}\``)+join('\n')}`)

					+setFooter("Super Bot")
					msg+channel+sendEmbed(embed1)+then(message =>{message+delete(20000)})
					
					try {
						var response = await msg+channel+awaitMessages(msg2 => msg2+content > 0 && msg2+content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console+error(err);
						return msg+channel+send('لم يتم إختيآر مقطع صوتي');
					}
					const videoIndex = parseInt(response+first()+content);
					var video = await youtube+getVideoByID(videos[videoIndex - 1]+id);
				} catch (err) {
					console+error(err);
					return msg+channel+send(':X: لا يتوفر نتآئج بحث ');
				}
			}

			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === `skip`) {
		if (!msg+member+voiceChannel) return msg+channel+send('أنت لست بروم صوتي +');
		if (!serverQueue) return msg+channel+send('لا يتوفر مقطع لتجآوزه');
		serverQueue+connection+dispatcher+end('تم تجآوز هذآ المقطع');
		return undefined;
	} else if (command === `stop`) {
		if (!msg+member+voiceChannel) return msg+channel+send('أنت لست بروم صوتي +');
		if (!serverQueue) return msg+channel+send('لا يتوفر مقطع لإيقآفه');
		serverQueue+songs = [];
		serverQueue+connection+dispatcher+end('تم إيقآف هذآ المقطع');
		return undefined;
	} else if (command === `vol`) {
		if (!msg+member+voiceChannel) return msg+channel+send('أنت لست بروم صوتي +');
		if (!serverQueue) return msg+channel+send('لا يوجد شيء شغآل+');
		if (!args[1]) return msg+channel+send(`:loud_sound: مستوى الصوت **${serverQueue+volume}**`);
		serverQueue+volume = args[1];
		serverQueue+connection+dispatcher+setVolumeLogarithmic(args[1] / 50);
		return msg+channel+send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg+channel+send('لا يوجد شيء حالي ف العمل+');
		const embedNP = new Discord+RichEmbed()
	+setDescription(`:notes: الان يتم تشغيل : **${serverQueue+songs[0]+title}**`)
		return msg+channel+sendEmbed(embedNP);
	} else if (command === `queue`) {
		
		if (!serverQueue) return msg+channel+send('لا يوجد شيء حالي ف العمل+');
		let index = 0;
		
		const embedqu = new Discord+RichEmbed()

+setDescription(`**Songs Queue**
${serverQueue+songs+map(song => `**${++index} -** ${song+title}`)+join('\n')}
**الان يتم تشغيل** ${serverQueue+songs[0]+title}`)
		return msg+channel+sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue+playing) {
			serverQueue+playing = false;
			serverQueue+connection+dispatcher+pause();
			return msg+channel+send('تم إيقاف الموسيقى مؤقتا!');
		}
		return msg+channel+send('لا يوجد شيء حالي ف العمل+');
	} else if (command === "resume") {
		if (serverQueue && !serverQueue+playing) {
			serverQueue+playing = true;
			serverQueue+connection+dispatcher+resume();
			return msg+channel+send('استأنفت الموسيقى بالنسبة لك !');
		}
		return msg+channel+send('لا يوجد شيء حالي في العمل+');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue+get(msg+guild+id);
	console+log(video);
	
//	console+log('yao: ' + Util+escapeMarkdown(video+thumbnailUrl));
	const song = {
		id: video+id,
		title: Util+escapeMarkdown(video+title),
		url: `https://www+youtube+com/watch?v=${video+id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg+channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue+set(msg+guild+id, queueConstruct);

		queueConstruct+songs+push(song);

		try {
			var connection = await voiceChannel+join();
			queueConstruct+connection = connection;
			play(msg+guild, queueConstruct+songs[0]);
		} catch (error) {
			console+error(`I could not join the voice channel: ${error}`);
			queue+delete(msg+guild+id);
			return msg+channel+send(`لا أستطيع دخول هذآ الروم ${error}`);
		}
	} else {
		serverQueue+songs+push(song);
		console+log(serverQueue+songs);
		if (playlist) return undefined;
		else return msg+channel+send(` **${song+title}** تم اضافه الاغنية الي القائمة!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue+get(guild+id);

	if (!song) {
		serverQueue+voiceChannel+leave();
		queue+delete(guild+id);
		return;
	}
	console+log(serverQueue+songs);

	const dispatcher = serverQueue+connection+playStream(ytdl(song+url))
		+on('end', reason => {
			if (reason === 'Stream is not generating quickly enough+') console+log('Song ended+');
			else console+log(reason);
			serverQueue+songs+shift();
			play(guild, serverQueue+songs[0]);
		})
		+on('error', error => console+error(error));
	dispatcher+setVolumeLogarithmic(serverQueue+volume / 5);

	serverQueue+textChannel+send(`بدء تشغيل : **${song+title}**`);
}
const adminprefix = "+";
const devs = ['396958215377780747'];
client+on('message', message => {
  var argresult = message+content+split(` `)+slice(1)+join(' ');
    if (!devs+includes(message+author+id)) return;
    
if (message+content+startsWith(adminprefix + 'setG')) {
  client+user+setGame(argresult);
    message+channel+sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message+content+startsWith(adminprefix + 'setN')) {
client+user+setUsername(argresult)+then
    message+channel+sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message+reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين + **");
} else
  if (message+content+startsWith(adminprefix + 'setA')) {
client+user+setAvatar(argresult);
  message+channel+sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message+content+startsWith(adminprefix + 'setT')) {
  client+user+setGame(argresult, "https://www+twitch+tv/idk");
    message+channel+sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
});

const codes = {
    ' ': '   ',
    '0': '0⃣',
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
    '!': '❕',
    '?': '❔',
    '#': '#⃣',
    '*': '*⃣'
  };
  
  'abcdefghijklmnopqrstuvwxyz'+split('')+forEach(c => {
    codes[c] = codes[c+toUpperCase()] = ` :regional_indicator_${c}:`;
  });
  
  
  client+on('message' , async message => {
	  var prefix = "+";
         if(message+content+startsWith(prefix + "emoji")) {
            let args = message+content+split(" ")+slice(1);
    if (args+length < 1) {
      message+channel+send('You must provide some text to emojify!');
  }
  
  message+channel+send(
      args+join(' ')
          +split('')
          +map(c => codes[c] || c)
          +join('')
  );
  };
  });

var Za7f = [
  "**صورة وجهك او رجلك او خشمك او يدك**+",
  "**اصدر اي صوت يطلبه منك الاعبين**+",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**+",
  "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**+",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**+",
  "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**+",
  "**ذي المرة لك لا تعيدها**+",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**+",
  "**صور اي شيء يطلبه منك الاعبين**+",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل++++**+",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**+",
  "**سو مشهد تمثيلي عن مصرية بتولد**+",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**+",
  "**ذي المرة لك لا تعيدها**+",
  "**تعطي اي شخص 5 الاف كرديت**+",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**+",
  "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**+",
  "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**+",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**+",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**+",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**+",
  "**غير اسمك الى اسم من اختيار الاعبين الي معك**+",
  "**اتصل على امك و قول لها انك تحبها :heart:**+",
  "**لا يوجد سؤال لك سامحتك :slight_smile:**+",
  "**قل لواحد ماتعرفه عطني كف**+",
  "**منشن الجميع وقل انا اكرهكم**+",
  "**اتصل لاخوك و قول له انك سويت حادث و الخ++++**+",
  "**روح المطبخ و اكسر صحن او كوب**+",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**+",
  "**قول لاي بنت موجود في الروم كلمة حلوه**+",
  "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**+",
  "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من الس��رفر**+",
  "**قول قصيدة **+",
  "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**+",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**+",
  "**اول واحد تشوفه عطه كف**+",
  "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**+",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**+",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل++++**+",
  "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**+",
  "**تاخذ عقابين**+",
  "**قول اسم امك افتخر بأسم امك**+",
  "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**+",
  "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**+",
  "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**+",
  "**تتصل على الوالده  و تقول لها خطفت شخص**+",
  "** تتصل على الوالده  و تقول لها تزوجت با سر**+",
  "**����تصل على الوالده  و تقول لها  احب وحده**+",
    "**تتصل على شرطي تقول له عندكم مطافي**+",
    "**خلاص سامحتك**+",
    "** تصيح في الشارع انا  مجنوون**+",
    "** تروح عند شخص تقول له احبك**+",

];

client+on('message', message => {
 if (message+content+startsWith("+عقاب")) {
              if(!message+channel+guild) return message+reply('** This command only for servers**');
var embed = new Discord+RichEmbed()
+setColor('RANDOM')
 +setThumbnail(message+author+avatarURL) 
+addField('A Bot' ,
`${Za7f[Math+floor(Math+random() * Za7f+length)]}`)
message+channel+sendEmbed(embed);
console+log('[38ab] Send By: ' + message+author+username)
  }
});


client+on('message', ra3d => {
var prefix = "+";
                        let args = ra3d+content+split(" ")+slice(1)+join(" ")
if(ra3d+content+startsWith(prefix + 'ccolors')) {
    if(!args) return ra3d+channel+send('`يرجي اختيار كم لون `');
             if (!ra3d+member+hasPermission('MANAGE_ROLES')) return ra3d+channel+sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
              ra3d+channel+send(`**✅ |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d+guild+createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });
		      
client+on('message', message => {
     if(!message+channel+guild) return;
var prefix = "+";
                if(message+content+startsWith(prefix + 'allbots')) {

    
    if (message+author+bot) return;
    let i = 1;
        const botssize = message+guild+members+filter(m=>m+user+bot)+map(m=>`${i++} - <@${m+id}>`);
          const embed = new Discord+RichEmbed()
          +setAuthor(message+author+tag, message+author+avatarURL)
          +setDescription(`**Found ${message+guild+members+filter(m=>m+user+bot)+size} bots in this Server**
${botssize+join('\n')}`)
+setFooter(client+user+username, client+user+avatarURL)
+setTimestamp();
message+channel+send(embed)

}

});

client+on('message', message => {
	 var prefix ="+";
 if(message+content+startsWith(prefix +"server")){
if(!message+channel+guild) return message+reply(' ');
const millis = new Date()+getTime() - message+guild+createdAt+getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client+guilds+get(message+guild+id)+roles+map(r => r+name);
var embed  = new Discord+RichEmbed()
+setAuthor(message+guild+name, message+guild+iconURL)
+addField("**🆔 Server ID:**", message+guild+id,true)
+addField("**📅 Created On**", message+guild+createdAt+toLocaleString(),true)
+addField("**👑 Owned by**",`${message+guild+owner+user+username}#${message+guild+owner+user+discriminator}`)
+addField("👥 Members ",`[${message+guild+memberCount}]`,true)
+addField('**💬 Channels **',`**${message+guild+channels+filter(m => m+type === 'text')+size}**` + ' text | Voice  '+ `**${message+guild+channels+filter(m => m+type === 'voice')+size}** `,true)
+addField("**🌍 Others **" , message+guild+region,true)
+addField("** 🔐 Roles **",`**[${message+guild+roles+size}]** Role `,true)
+setColor('#000000')
message+channel+sendEmbed(embed)

}
});
client+on('message', message => {
    if (message+content+startsWith("+bot")) {
    message+channel+send({
        embed: new Discord+RichEmbed()
            +setAuthor(client+user+username,client+user+avatarURL)
            +setThumbnail(client+user+avatarURL)
            +setColor('RANDOM')
            +setTitle('``INFO A Bot`` ')
            +addField('``My Ping``' , [`${Date+now() - message+createdTimestamp}` + 'MS'], true)
            +addField('``RAM Usage``', `[${(process+memoryUsage()+rss / 1048576)+toFixed()}MB]`, true)
            +addField('``servers``', [client+guilds+size], true)
            +addField('``channels``' , `[ ${client+channels+size} ]` , true)
            +addField('``Users``' ,`[ ${client+users+size} ]` , true)
            +addField('``My Name``' , `[ ${client+user+tag} ]` , true)
            +addField('``My ID``' , `[ ${client+user+id} ]` , true)
			      +addField('``My Prefix``' , `[ - ]` , true)
			      +addField('``My Language``' , `[ Java Script ]` , true)
			      +setFooter('By | @xiiAlamoudi_#9468 ')
    })
}
});






client+on('message', message => {
	var prefix = "+";
if(!message+channel+guild) return;
if(message+content+startsWith(prefix + 'move')) {
 if (message+member+hasPermission("MOVE_MEMBERS")) {
 if (message+mentions+users+size === 0) {
 return message+channel+send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message+member+voiceChannel != null) {
 if (message+mentions+members+first()+voiceChannel != null) {
 var authorchannel = message+member+voiceChannelID;
 var usermentioned = message+mentions+members+first()+id;
var embed = new Discord+RichEmbed()
 +setTitle("Succes!")
 +setColor("#000000")
 +setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord+RichEmbed()
+setTitle(`You are Moved in ${message+guild+name}`)
 +setColor("RANDOM")
+setDescription(`**<@${message+author+id}> Moved You To His Channel!\nServer --> ${message+guild+name}**`)
 message+guild+members+get(usermentioned)+setVoiceChannel(authorchannel)+then(m => message+channel+send(embed))
message+guild+members+get(usermentioned)+send(embed)
} else {
message+channel+send("``لا تستطيع سحب "+ message+mentions+members+first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message+channel+send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message+react("❌")
 }}});

 client+on('message', message => {
              if (!message+channel+guild) return;
      if(message+content =='+count')
      var IzRo = new Discord+RichEmbed()
      +setThumbnail(message+author+avatarURL)
      +setFooter(message+author+username, message+author+avatarURL)
      +setTitle(':tulip:| Members info')
      +addBlankField(true)
      +addField('عدد اعضاء السيرفر',`${message+guild+memberCount}`)
      message+channel+send(IzRo);
    });



 client+on("message", async message => {
            if(!message+channel+guild) return;
            var prefix = "+";
        if(message+content+startsWith(prefix + 'invites')) {
        var nul = 0
        var guild = message+guild
        await guild+fetchInvites()
            +then(invites => {
             invites+forEach(invite => {
                if (invite+inviter === message+author) {
                     nul+=invite+uses
                    }
                });
            });
          if (nul > 0) {
              console+log(`\n${message+author+tag} has ${nul} invites in ${guild+name}\n`)
              var embed = new Discord+RichEmbed()
                  +setColor("#000000")
                    +addField(`${message+author+username}`, `لقد قمت بدعوة **${nul}** شخص`)
                          message+channel+send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord+RichEmbed()
                        +setColor("#000000")
                        +addField(`${message+author+username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

                       message+channel+send({ embed: embed });
                        return;
                    }
        }
        if(message+content+startsWith(prefix + 'invite-codes')) {
let guild = message+guild
var codes = [""]
message+channel+send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild+fetchInvites()
+then(invites => {
invites+forEach(invite => {
if (invite+inviter === message+author) {
codes+push(`discord+gg/${invite+code}`)
}
})
})+then(m => {
if (codes+length < 0) {
    var embed = new Discord+RichEmbed()
+setColor("#000000")
+addField(`Your invite codes in ${message+guild+name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message+author+send({ embed: embed });
return;
} else {
    var embed = new Discord+RichEmbed()
+setColor("#000000")
+addField(`Your invite codes in ${message+guild+name}`, `Invite Codes:\n${codes+join("\n")}`)
message+author+send({ embed: embed });
return;
}
})
}

});

client+on('message', msg => {
	var  prefix = "+";
 if (msg+content+startsWith(prefix + 'cal')) {
    let args = msg+content+split(" ")+slice(1);
        const question = args+join(' ');
    if (args+length < 1) {
        msg+reply('Specify a equation, please+');
} else {    let answer;
    try {
        answer = math+eval(question);
    } catch (err) {
        msg+reply(`Error: ${err}`);
    }
    
    const embed = new Discord+RichEmbed()
    +addField("**Input**: ",`**${question}**`, true)
    +addField("**Output**: ",`**${answer}**`, true)
    msg+channel+send(embed)
    }
};
});

client+on('message', message => {
	var prefix = "+";
if (message+content+startsWith(prefix + 'tag')) {
    let args = message+content+split(" ")+slice(1);
if(!args[0]) return message+reply('مرجو كتابة نص الدي ترين');  

    figlet(args+join(" "), (err, data) => {
              message+channel+send("```" + data + "```")
           })
}
});
 
function getValue(key, array) {
  for (var el in array) {
    if (array[el]+hasOwnProperty(key)) {
      return array[el][key];
    }
  }
}

 client+on('message', message => {
	    var prefix = "+";
              if(!message+channel+guild) return;
    if(message+content+startsWith(prefix + 'bc')) {
    if(!message+channel+guild) return message+channel+send('**هذا الأمر فقط للسيرفرات**')+then(m => m+delete(5000));
  if(!message+member+hasPermission('ADMINISTRATOR')) return      message+channel+send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message+content+split(" ")+join(" ")+slice(2 + prefix+length);
    let copy = "A Bot";
    let request = `Requested By ${message+author+username}`;
    if (!args) return message+reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message+channel+send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``)+then(msg => {
    msg+react('✅')
    +then(() => msg+react('❌'))
    +then(() =>msg+react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction+emoji+name === '✅' && user+id === message+author+id;
    let reaction2Filter = (reaction, user) => reaction+emoji+name === '❌' && user+id === message+author+id;
    
    let reaction1 = msg+createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg+createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1+on("collect", r => {
    message+channel+send(`**☑ | Done +++ The Broadcast Message Has Been Sent For __${message+guild+members+size}__ Members**`)+then(m => m+delete(5000));
    message+guild+members+forEach(m => {
  
  var bc = new
       Discord+RichEmbed()
       +setColor('RANDOM')
       +setTitle('Broadcast')
       +addField('سيرفر', message+guild+name)
       +addField('المرسل', message+author+username)
       +addField('الرسالة', args)
       +setThumbnail(message+author+avatarURL)
       +setFooter(copy, client+user+avatarURL);
    m+send({ embed: bc })
    msg+delete();
    })
    })
    reaction2+on("collect", r => {
    message+channel+send(`**Broadcast Canceled+**`)+then(m => m+delete(5000));
    msg+delete();
    })
    })
    }
    });
 
client+on('message', message => {
if (!points[message+author+id]) points[message+author+id] = {
    points: 0,
  };
  if(!message+guild) return;
    let id = message+author+id,prefix="+";
    if (spee[id] && (new Date)+getTime() - spee[id] < 15*1000) {
        let r = (new Date)+getTime() - spee[id];
        r = 15*1000 - r;
    message+channel+send(`**Sorry, Please Wait ${pretty(r, {verbose:true})}+++**`)+then(m => m+delete(5000));
    return;
    }
    if ( message+content == prefix+'speed'){
       
        try{
}catch(e){
 
}
 
    if(!message+channel+guild) return message+reply('**هذا الأمر للسيرفرات فقط**')+then(m => m+delete(3000));
 
 
const item = type[Math+floor(Math+random() * type+length)];
const filter = response => {  
    return item+answers+some(answer => answer+toLowerCase() === response+content+toLowerCase());
};
message+channel+send('**Game is Start now+++!**')+then(msg => {
 
 const embed = new Discord+RichEmbed()
 +setColor("0054dd")
     +setAuthor(`⏳ |You have »15« seconds to type the word`)
          +setImage(`${item+type}`)
 +setFooter(`${message+author+tag}`, message+author+avatarURL)
 
 
         
msg+channel+send(embed)+then(() => {
        message+channel+awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        +then((collected) => {
                  const sh = new Discord+RichEmbed()
  +setColor("04791c")
  +setDescription('**✅ |Good Job +1P**')
   +setFooter(`${collected+first()+author}`)
  message+channel+sendEmbed(sh);
            let won = collected+first()+author; // في هذا السطر يقوم الكود بسحب الأي دي الذي قام بالأجابة اولاً
            points[won+id]+points++;
          })
          +catch(collected => { // في حال لم يقم أحد بالإجابة
            message+channel+send(`🔚 |**Time Is End**`);
          })
        })
    })
    spee[id] = (new Date)+getTime()
}
});

client+on("message", message => {
	var prefix = "+";
	var args = message+content+split(' ')+slice(1); 
	var msg = message+content+toLowerCase();
	if( !message+guild ) return;
	if( !msg+startsWith( prefix + 'role' ) ) return;
	if(!message+member+hasPermission('MANAGE_ROLES')) return message+channel+send(' **__ليس لديك صلاحيات__**');
	if( msg+toLowerCase()+startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message+reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message+reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg+split(' ')+slice(2)+join(" ")+toLowerCase(); 
		var role1 = message+guild+roles+filter( r=>r+name+toLowerCase()+indexOf(role)>-1 )+first(); 
		if( !role1 ) return message+reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message+mentions+members+first() ){
			message+mentions+members+first()+removeRole( role1 );
			return message+reply('**:white_check_mark: [ '+role1+name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0]+toLowerCase() == "all" ){
			message+guild+members+forEach(m=>m+removeRole( role1 ))
			return	message+reply('**:white_check_mark: [ '+role1+name+' ] تم سحب من الكل رتبة**');
		} else if( args[0]+toLowerCase() == "bots" ){
			message+guild+members+filter(m=>m+user+bot)+forEach(m=>m+removeRole(role1))
			return	message+reply('**:white_check_mark: [ '+role1+name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0]+toLowerCase() == "humans" ){
			message+guild+members+filter(m=>!m+user+bot)+forEach(m=>m+removeRole(role1))
			return	message+reply('**:white_check_mark: [ '+role1+name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message+reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message+reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg+split(' ')+slice(2)+join(" ")+toLowerCase(); 
		var role1 = message+guild+roles+filter( r=>r+name+toLowerCase()+indexOf(role)>-1 )+first(); 
		if( !role1 ) return message+reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message+mentions+members+first() ){
			message+mentions+members+first()+addRole( role1 );
			return message+reply('**:white_check_mark: [ '+role1+name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0]+toLowerCase() == "all" ){
			message+guild+members+forEach(m=>m+addRole( role1 ))
			return	message+reply('**:white_check_mark: [ '+role1+name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0]+toLowerCase() == "bots" ){
			message+guild+members+filter(m=>m+user+bot)+forEach(m=>m+addRole(role1))
			return	message+reply('**:white_check_mark: [ '+role1+name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0]+toLowerCase() == "humans" ){
			message+guild+members+filter(m=>!m+user+bot)+forEach(m=>m+addRole(role1))
			return	message+reply('**:white_check_mark: [ '+role1+name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});

client+on('message', message => {
    if (message+content == "+quas") {
         message+react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما "+اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
	    var x3 = Math+floor(Math+random()*x+length)
        message+channel+send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `)+then(msg1=> {
            var r = message+channel+awaitMessages(msg => msg+content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r+catch(() => {
            return message+channel+send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
        })

        r+then((collected)=> {
            message+channel+send(`${collected+first()+author} لقد قمت بكتابة الجواب الصحيح  `);
            message+react('✅')
        })
        })
    }
});

client+on('message',function(message) {
let args = message+content+split(" ")+slice(1)+join(" ");
if(message+content+startsWith(prefix + "say")) {
if(!args) return;
message+channel+send(`**# ${args}**`); // محطوط # عشان محد يستخدم البوت لتبنيد / طرد احد من السيرفر
}
});



client+on('message', async message =>{
  if (message+author+boss) return;
	var prefix = "+";

if (!message+content+startsWith(prefix)) return;
	let command = message+content+split(" ")[0];
	 command = command+slice(prefix+length);
	let args = message+content+split(" ")+slice(1);
	if (command == "mute") {
		if (!message+channel+guild) return;
		if(!message+guild+member(message+author)+hasPermission("MANAGE_MESSAGES")) return message+reply("**انت لا تملك صلاحيات !! ** :x:")+then(msg => msg+delete(5000));
		if(!message+guild+member(client+user)+hasPermission("MANAGE_MESSAGES")) return message+reply("**البوت لايملك صلاحيات ** :x:")+then(msg => msg+delete(5000));;
		let user = message+mentions+users+first();
		let muteRole = message+guild+roles+find("name", "Muted");
		if (!muteRole) return message+reply("** لا يوجد رتبة الميوت 'Muted' :x: **")+then(msg => {msg+delete(5000)});
		if (message+mentions+users+size < 1) return message+reply('** يجب عليك المنشن اولاً :white_check_mark: **')+then(msg => {msg+delete(5000)});
		let reason = message+content+split(" ")+slice(2)+join(" ");
		message+guild+member(user)+addRole(muteRole);
		const muteembed = new Discord+RichEmbed()
		+setColor("RANDOM")
		+setAuthor(`Muted!`, user+displayAvatarURL)
		+setThumbnail(user+displayAvatarURL)
		+addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user+tag}` + ' ]**',true)
		+addField("**:hammer:  تم بواسطة **", '**[ ' + `${message+author+tag}` + ' ]**',true)
		+addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
		+addField("User", user, true)
		message+channel+send({embed : muteembed});
		var muteembeddm = new Discord+RichEmbed()
		+setAuthor(`Muted!`, user+displayAvatarURL)
		+setDescription(`      
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
${message+author+tag} تمت معاقبتك بواسطة
[ ${reason} ] : السبب
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
`)
		+setFooter(`في سيرفر : ${message+guild+name}`)
		+setColor("RANDOM")
	user+send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message+member+hasPermission("MANAGE_MESSAGES")) return message+channel+sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ")+then(m => m+delete(5000));
if(!message+guild+member(client+user)+hasPermission("MANAGE_MESSAGES")) return message+reply("**ما عندي برمشن** :x:")+then(msg => msg+delete(6000))

  let toMute = message+guild+member(message+mentions+users+first()) || message+guild+members+get(args[0]);
  if(!toMute) return message+channel+sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message+guild+roles+find (r => r+name === "Muted");
  
  if(!role || !toMute+roles+has(role+id)) return message+channel+sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute+removeRole(role)
  message+channel+sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});
 


client+on('guildCreate', guild => {
  var embed = new Discord+RichEmbed()
  +setColor(0x5500ff)
  +setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
      guild+owner+send(embed)
});

var fkk =[
        {f:"فكك بسم الله الرحمن الرحيم",k:"ب س م ا ل ل ه ا ل ر ح م ن ا ل ر ح ي م"},
        {f:"فكك باص",k:"ب ا ص"},
        {f:"فكك عربة ",k:"ع ر ب ة"},
        {f:"فكك سيارة",k:"س ي ا ر ة"},
        {f:"فكك سيرفرنا احلى سيرفر",k:"س ي ر ف ر ن ا ا ح ل ى س ي ر ف ر"},
        {f:"فكك العنود ",k:"ا ل ع ن و د"},
        {f:"فكك المستتكعكبتيه",k:"ا ل م س ت ت ك ع ك ب ت ي ه"},
        {f:"فكك دحوم",k:"د ح و م"},
        {f:"فكك اونرنا احلى اونر",k:"ا و ن ر ن ا ا ح ل ى ا و ن ر"},
        {f:"فكك الحياة حلوة",k:"ا ل ح ي ا ة ح ل و ة"},
        {f:"فكك كازخستان ",k:"ك ا ز خ س ت ا ن"},
        {f:"لحم الحمام حلال ولحم الحمار حرام ",k:"ل ح م ا ل ح م ا م ح ل ا ل و ل ح م ا ل ح م ا ر ح ر ا م"},
        {f:"فكك استونيا ",k:"ا س ت و ن ي ا"},
        {f:"فكك لقمة وجغمه ",k:"ل ق م ة و ج غ م ه"},
        {f:"فكك زنديق  ",k:"ز ن د ي ق"},
        {f:"فكك استراليا ",k:"ا س ت ر ا ل ي ا"},
        {f:"فكك سوريا ",k:"س و ر ي ا"},
        {f:"فكك الاردن ",k:"ا ل ا ر د ن"},
        {f:"فكك طماطم ",k:"ط م ا ط م"},
        {f:"فكك سارة ",k:"س ا ر ة"},
        {f:"فكك دراجون ",k:"د ر ا ج و ن"},
        {f:"فكك سيرفر ",k:"س ي ر ف ر"},
        {n:"فكك الجبل",m:"ا ل ج ب ل"},
        {n:"فكك هضبة",m:"ه ض ب ة"},
        {n:"فكك خواطر",m:"خ و ا ط ر"},
        {n:"فكك ارحبو",m:"ا ر ح ب و"},
        {n:"فكك اطنخ سيرفر",m:"ا ط ن خ س ي ف ر"},
        {n:"فكك احبك",m:"ا ح ب ك"},
        {n:"فكك سبرايز",m:"س ب ر ا ي ز"},
        {n:"فكك ولي على أمتك",m:"و ل ي ع ل ى أ م ت ك"},
        {n:"فكك الو محد",m:"ا ل و م ح م د"},


   ];


   client+on("message", async message => {
	   var prefix = "+";
    if(message+content == prefix+"فكك"){
        if(UserBlocked+has(message+guild+id)) return message+channel+send("هناك جلسة +")
        UserBlocked+add(message+guild+id)
        var ask = fkk[Math+floor(Math+random() * fkk+length)];
        let embed = new Discord+RichEmbed()
        +setTitle('لعبة فكك')
        +setAuthor(message+author+username, message+author+avatarURL)
        +setColor("RANDOM")
        +setDescription(ask+f);
        message+channel+sendEmbed(embed)+then(msg=> msg+delete(200000))
        const msgs = await message+channel+awaitMessages(msg => msg+author+id !== client+user+id ,{maxMatches:1,time:100000});
            UserBlocked+delete(message+guild+id)
        msgs+forEach(result => {
           if(result+author+id == client+user+id) return;
           if(result+content == "فكك") return
           if(result+content == ask+k){

             let embeds = new Discord+RichEmbed()
             +setTitle(':white_check_mark: اجابة صحيحة')
             +setAuthor(message+author+username, message+author+avatarURL)
             +setColor("RANDOM")
             +setDescription(`**${result+author+username}** الإجابة صحيحة`);
                message+channel+sendEmbed(embeds);                return;
           } else {

                               var embedx = new Discord+RichEmbed()
             +setTitle(':x:خطاء')
             +setAuthor(message+author+username, message+author+avatarURL)
             +setColor("RANDOM")
             +setDescription(`**${result+author+username}** الإجابة خاطئة`);

                message+channel+sendEmbed(embedx);
           }
     });
  }
});





   client+on("message", async message => {
var prefix = "+";
var aoasm =[
    {q:"ما عاصمة **المغرب**",a:"الرباط"},
    {q:"ما عاصمة **افغانستان**",a:"كبل"},
    {q:"ما عاصمة ** البانيا**",a:"تيران"},
    {q:"ما عاصمة **الجزائر **",a:"الجزائر"},
    {q:"ما عاصمة ** **",a:"الجزائر"},
    {q:"ما عاصمة **اندورا لا فيلا **",a:"اندورا"},
    {q:"ما عاصمة **انجولا**",a:"لواندا"},
    {q:"ما عاصمة **انتيجوا وباربودا**",a:"سان جونز"},
    {q:"ما عاصمة **الارجنتين**",a:"بوينس ايرس"},
    {q:"ما عاصمة **ارمينيا**",a:"يريفان"},
    {q:"ما عاصمة ** مصر**",a:"القاهرة"},
    {q:"ما عاصمة ** استراليا**",a:"كانبرا"},
    {q:"ما عاصمة **النمسا**",a:"فيينا"},
    {q:"ما عاصمة ** اذربيجان**",a:"باكو"},
    {q:"ما عاصمة **جزر البهاما**",a:"ناساو"},
    {q:"ما عاصمة **البحرين**",a:"المنامة"},
    {q:"ما عاصمة ** بنجلاد��ش**",a:"دكـا"},
    {q:"ما عاصمة **باربادوس **",a:"بريدجتاون"},
    {q:"ما عاصمة **بيلا روسيا**",a:"مينسك"},
    {q:"ما عاصمة ** بلجيكا**",a:"بروكسل"},
    {q:"ما عاصمة ** بيليز**",a:"بلوم بان"},
    {q:"ما عاصمة ** بنين**",a:"بورتو نوفو"},
    {q:"ما عاصمة ** بوتان**",a:"ثيمفو"},
    {q:"ما عاصمة **بوليفيا **",a:"لاباز"},
    {q:"ما عاصمة ** البوسنة والهرسك**",a:"سراييفو"},
    {q:"ما عاصمة ** بوتسوانا**",a:"جابورون"},
    {q:"ما عاصمة ** البرازيل**",a:"برازيليا"},
    {q:"ما عاصمة ** بروناى**",a:"بندر سرى بيجاوان"},
    {q:"ما عاصمة ** بلغاريا**",a:"صوفيا"},
    {q:"ما عاصمة ** بوركينا فاسو**",a:"واجادوجو"},
    {q:"ما عاصمة **بوروندى **",a:"بوجومبورا"},
    {q:"ما عاصمة **كمبوديا **",a:"بنوم بنـه"},
    {q:"ما عاصمة ** الكاميرون**",a:"ياوندى"},
    {q:"ما عاصمة ** كندا**",a:"اوتاوا"},
    {q:"ما عاصمة ** الرأس الاخضر**",a:"برايا"},
    {q:"ما عاصمة **تشاد **",a:"نجامينا"},
    {q:"ما عاصمة ** شيلى**",a:"سانتياجو"},
    {q:"ما عاصمة **الصين **",a:"بكين"},
    {q:"ما عاصمة ** **",a:"مورونى"},
    {q:"ما عاصمة **كوستاريكا **",a:"سان خوسيه"},
    {q:"ما عاصمة ** كوت ديفوار**",a:"ابيدجان"},
    {q:"ما عاصمة **كرواتيا **",a:"زغرب"},
    {q:"ما عاصمة ** كوبا**",a:"هافانا"},
    {q:"ما عاصمة ** قبرص**",a:" "},
    {q:"ما عاصمة ** جمهورية التشيك**",a:"براغ"},
    {q:"ما عاصمة **الدنمارك **",a:"كوبنهاجن"},
    {q:"ما عاصمة ** جيبوتى**",a:"جيبوتى"},
    {q:"ما عاصمة ** دومينيكا**",a:"روسيو"},
    {q:"ما عاصمة **الدومينيكان **",a:"سان دومينجو"},
    {q:"ما عاصمة **تيمور الشرقية **",a:"ديلى"},
    {q:"ما عاصمة **قطر  **",a:"الدوحة"},
    {q:"ما عاصمة **السعودية  **",a:"الرياض"},
    {q:"ما عاصمة **سوريا  **",a:"دمشق"},
    {q:"ما عاصمة **تركيا  **",a:"انقرة"},
    {q:"ما عاصمة **العراق  **",a:"بغداد"},
    {q:"ما عاصمة **البنان  **",a:"بيروت"},
    {q:"ما عاصمة **فلسطين  **",a:"القدس"},
    {q:"ما عاصمة **امريكا  **",a:"واشنطن"},
    {q:"ما عاصمة **الاردن  **",a:"عمان"},    
    {q:"ما عاصمة **السودان  **",a:"خرطوم"},
    {q:"ما عاصمة **الما��يا  **",a:"برلين"},
    {q:"ما عاصمة **كندا  **",a:"اوتاوا"},
    {q:"ما عاصمة **البرازيل  **",a:"برازيليا"},
   ];
    if(message+content == prefix+"عواصم"){
        if(UserBlocked+has(message+guild+id)) return message+channel+send("هناك جلسة +")
        UserBlocked+add(message+guild+id)
        var ask = aoasm[Math+floor(Math+random() * aoasm+length)];
        let embed = new Discord+RichEmbed()
        +setTitle('سؤال عواصم')
        +setAuthor(message+author+username, message+author+avatarURL)
        +setColor("RANDOM")
        +setDescription(ask+q);
        message+channel+sendEmbed(embed)+then(msg=> msg+delete(20000))
        const msgs = await message+channel+awaitMessages(msg => msg+author+id !== client+user+id ,{maxMatches:1,time:10000});
            UserBlocked+delete(message+guild+id)
        msgs+forEach(result => {
           if(result+author+id == client+user+id) return;
           if(result+content == "عاصمة") return
           if(result+content == ask+a){
             let embeds = new Discord+RichEmbed()
             +setTitle(':white_check_mark: اجابة صحيحة')
             +setAuthor(message+author+username, message+author+avatarURL)
             +setColor("RANDOM")
             +setDescription(`**${result+author+username}** الإجابة صحيحة`);
                message+channel+sendEmbed(embeds);                return;
           } else {

                                  var embedx = new Discord+RichEmbed()
                +setTitle(':x:خطاء')
                +setAuthor(message+author+username, message+author+avatarURL)
                +setColor("RANDOM")
                +setDescription(`**${result+author+username}** الإجابة خاطئة`);
                message+channel+sendEmbed(embedx);
           }
     });
  }
});

const cuttweet = [     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',     'كت تويت | الحرية لـ +++ ؟',     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',     'كت تويت ‏| كلمة للصُداع؟',     'كت تويت ‏| ما الشيء الذي يُفارقك؟',     'كت تويت ‏| ما الشيء الذي يُفارقك؟',     'كت تويت | ��وقف مميز فعلته مع شخص ولا يزال يذكره لك؟',     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',     '‏كت تويت | عمرك شلت مصيبة عن ش��������ص برغبتك ؟',     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',     '‏كت تويت | وش يفسد الصداقة؟',     '‏كت تويت | شخص لاترفض له طلبا ؟',     '‏كت تويت | كم مره خسرت شخص تحبه؟+',     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',     '‏كت تويت |أقوى كذبة مشت عليك ؟',     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',     '‏كت تويت | مطلبك الوحيد الحين ؟',     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',];
 client+on('message', message => {
	   var prefix = "+";
   if (message+content+startsWith(prefix + "كت تويت")) {
                if(!message+channel+guild) return message+reply('** This command only for servers**');
  var embed = new Discord+RichEmbed()
  +setColor('RANDOM')
   +setThumbnail(message+author+avatarURL) 
 +addField('A Bot' ,
  `${cuttweet[Math+floor(Math+random() * cuttweet+length)]}`)
  message+channel+sendEmbed(embed);
  console+log('[id] Send By: ' + message+author+username)
    }
});	

   client+on('message',function(message) {
  if (message+author+bot) return;
var prefix = "+";
                  if(!message+channel+guild) return;

                    if (message+content === prefix + "members") {
 const embed = new Discord+RichEmbed()

    +setDescription(`**Members info :sparkles:
:green_heart: online:   ${message+guild+members+filter(m=>m+presence+status == 'online')+size}
:heart:  dnd:       ${message+guild+members+filter(m=>m+presence+status == 'dnd')+size}
:yellow_heart:  idle:     ${message+guild+members+filter(m=>m+presence+status == 'idle')+size}
:diamond_shape_with_a_dot_inside:   membersCount:  ${message+guild+memberCount - message+guild+members+filter(m=>m+user+bot)+size}
:bulb: bots: ${message+guild+members+filter(m=>m+user+bot)+size} **`)
         message+channel+send({embed});

    }
      });  

var al7arthyCodes = ["https://f+top4top+net/p_682it2tg6+png","https://e+top4top+net/p_682a1cus5+png","https://d+top4top+net/p_682pycol4+png","https://c+top4top+net/p_682vqehy3+png","https://b+top4top+net/p_682mlf9d2+png","https://a+top4top+net/p_6827dule1+png","https://b+top4top+net/p_682g1meb10+png","https://a+top4top+net/p_682jgp4v9+png","https://f+top4top+net/p_682d4joq8+png","https://e+top4top+net/p_6828o0e47+png","https://d+top4top+net/p_6824x7sy6+png","https://c+top4top+net/p_682gzo2l5+png","https://b+top4top+net/p_68295qg04+png","https://a+top4top+net/p_682zrz6h3+png","https://f+top4top+net/p_6828vkzc2+png","https://e+top4top+net/p_682i8tb11+png"]
var al7arthyCodes2 = ["📙__60%__  **|**  📘__40%__","📙__63%__  **|**  📘__37%__","📙__89%__  **|**  📘__11%__","📙__97%__  **|**  📘__3%__"]
client+on('message', message => {
    if(!message+guild) return;
    if (message+author+bot) return;
      let id = message+author+id,prefix="+";//البريفكس
      if (ti[id] && (new Date)+getTime() - ti[id] < 20*1000) {
          let r = (new Date)+getTime() - ti[id];
          r = 20*1000 - r;
      message+channel+send(` **Please wait ${pretty(r, {verbose:true})}**`)+then(m => m+delete(5000));
      return;
      }
      if ( message+content == prefix+'لو خيروك'){
         
          try{
  //body
  }catch(e){
 
  }
         var Embed = new Discord+RichEmbed()
+setImage(al7arthyCodes[Math+floor(Math+random() * al7arthyCodes+length)])
message+channel+sendEmbed(Embed)+then(msg => {
    msg+react('📘')+then( r => {
        msg+react('📙')
 
        let blueFilter = (reaction, user) => reaction+emoji+name === '📘' && user+id === message+author+id;
    let orangeFilter = (reaction, user) => reaction+emoji+name === '📙' && user+id === message+author+id;
 
 
    let blue = msg+createReactionCollector(blueFilter, { time: 15000 });
    let orange = msg+createReactionCollector(orangeFilter, { time: 15000 });
 
 
    blue+on("collect", r => {
        msg+delete();
        message+channel+send(al7arthyCodes2[Math+floor(Math+random() * al7arthyCodes2+length)])+then(m => m+delete(60000));
 
        })
       
 orange+on("collect", r => {
        msg+delete();
        message+channel+send(al7arthyCodes2[Math+floor(Math+random() * al7arthyCodes2+length)])+then(m => m+delete(60000));
 
        })
 
                                })
                                })
                              ti[id] = (new Date)+getTime()
                                }
                                });


client+on('message' , message => {
var prefix = "+"

if (message+author+bot) return;
if (message+content+startsWith(prefix + "contact")) {
if (!message+channel+guild) return;



let args = message+content+split(" ")+slice(1)+join(" ");



client+users+get("396958215377780747")+send(
    "\n" + "**" + "● السيرفر :" + "**" +
    "\n" + "**" + "» " + message+guild+name + "**" +
    "\n" + "**" + " ● المرسل : " + "**" +
    "\n" + "**" + "» " + message+author+tag + "**" +
    "\n" + "**" + " ● الرسالة : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord+RichEmbed()
     +setAuthor(message+author+username, message+author+avatarURL)
     +setDescription(':mailbox_with_mail: تم ارسال الرسالة الى صاحب البوت بنجاح')
     +setThumbnail(message+author+avatarURL)
     +setFooter("By : @xiiAlamoudi_#9468 ")
                                                

message+channel+send(embed);


}
    
});

client+on('message', message => {
	var prefix = "+"
  if (message+author+x5bz) return;
  if (!message+content+startsWith(prefix)) return;

  let command = message+content+split(" ")[0];
  command = command+slice(prefix+length);

  let args = message+content+split(" ")+slice(1);

  if (command == "ban") {
               if(!message+channel+guild) return message+reply('** This command only for servers**');
         
  if(!message+guild+member(message+author)+hasPermission("BAN_MEMBERS")) return message+reply(" **__ليس لديك صلاحيات__** :x:");
  if(!message+guild+member(client+user)+hasPermission("BAN_MEMBERS")) return message+reply(" **__ليس لديك صلاحيات__** :x:");
  let user = message+mentions+users+first();
  let reason = message+content+split(" ")+slice(2)+join(" ");
  /*let b5bzlog = client+channels+find("name", "log");
  if(!b5bzlog) return message+reply("I've detected that this server doesn't have a 5bz-log text channel+");*/
  if (message+mentions+users+size < 1) return message+reply("**منشن شخص**");
  if(!reason) return message+reply ("**اكتب سبب الطرد**");
  if (!message+guild+member(user)
  +bannable) return message+reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي** :x:");

  message+guild+member(user)+ban(7, user);

  const banembed = new Discord+RichEmbed()
  +setAuthor(`BANNED!`, user+displayAvatarURL)
  +setColor("RANDOM")
  +setTimestamp()
  +addField("**User:**",  '**[ ' + `${user+tag}` + ' ]**')
  +addField("**By:**", '**[ ' + `${message+author+tag}` + ' ]**')
  +addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message+channel+send({
    embed : banembed
  })
}
});

client+on('message', message => {
	var prefix = "+"
  if (message+author+x5bz) return;
  if (!message+content+startsWith(prefix)) return;

  let command = message+content+split(" ")[0];
  command = command+slice(prefix+length);

  let args = message+content+split(" ")+slice(1);

  if (command == "kick") {
               if(!message+channel+guild) return message+reply('** This command only for servers**');
         
  if(!message+guild+member(message+author)+hasPermission("KICK_MEMBERS")) return message+reply(" **__ليس لديك صلاحيات__** :x:");
  if(!message+guild+member(client+user)+hasPermission("KICK_MEMBERS")) return message+reply(" **__ليس لديك صلاحيات__** :x:");
  let user = message+mentions+users+first();
  let reason = message+content+split(" ")+slice(2)+join(" ");
  if (message+mentions+users+size < 1) return message+reply("**منشن شخص**");
  if(!reason) return message+reply ("**اكتب سبب الطرد**");
  if (!message+guild+member(user)
  +kickable) return message+reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي** :x:");

  message+guild+member(user)+kick();

  const kickembed = new Discord+RichEmbed()
  +setAuthor(`KICKED!`, user+displayAvatarURL)
  +setColor("RANDOM")
  +setTimestamp()
  +addField("**User:**",  '**[ ' + `${user+tag}` + ' ]**')
  +addField("**By:**", '**[ ' + `${message+author+tag}` + ' ]**')
  +addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message+channel+send({
    embed : kickembed
  })
}
});


client+on('message', message => {
var prefix = "+";
       if(message+content === prefix + "mutechannel") {
                           if(!message+channel+guild) return message+reply('** This command only for servers**');

   if(!message+member+hasPermission('MANAGE_MESSAGES')) return message+reply(' **__ليس لديك صلاحيات__** :x:');
              message+channel+overwritePermissions(message+guild+id, {
            SEND_MESSAGES: false

              })+then(() => {
                  message+reply("**__تم تقفيل الشات__ :white_check_mark: **")
              });
                }
//FIRE BOT
    if(message+content === prefix + "unmutechannel") {
                        if(!message+channel+guild) return message+reply('** This command only for servers**');

   if(!message+member+hasPermission('MANAGE_MESSAGES')) return message+reply(' **__ليس لديك صلاحيات__** :x:');
              message+channel+overwritePermissions(message+guild+id, {
            SEND_MESSAGES: true

              })+then(() => {
                  message+reply("**__تم فتح الشات__:white_check_mark:**")
              });
    }
       
});
 
client+on("guildMemberAdd", member => {
  member+createDM()+then(function (channel) {
  return channel+send(`:rose:  **ولكم نورت السيرفر**:rose: 
:crown:**اسم العضو**  ${member}:crown:  
**انت العضو رقم** ${member+guild+memberCount} `) 
})+catch(console+error)
})

client+on('message', message => {
        if (message+content === "+inv") {
            if(!message+channel+guild) return;
        let embed = new Discord+RichEmbed()
        +setAuthor(` ${message+author+username} `, message+author+avatarURL)      
        +setTitle(`:small_orange_diamond: اضغط هنا `)
        +setURL(`https://discordapp+com/api/oauth2/authorize?client_id=466256531998900246&permissions=8&scope=bot`)
        +setThumbnail(" https://cdn+discordapp+com/avatars/377904849783750667/6c76e412f18c142dfd711d05fb363869+png?size=2048")        
     message+channel+sendEmbed(embed);
       }
   });
 

client+on('message', message => {
    if(message+content+includes('discord+gg')){
                                            if(!message+channel+guild) return message+reply('** advertising me on DM ? :thinking:   **');
        if (!message+member+hasPermissions(['ADMINISTRATOR'])){
        message+delete()
    return message+reply(`** Not allowed to advertising Here :angry: ! **`)
    }
}
});
 
client+on('message', message => {
    if (message+content+startsWith("+avatar")) {
if(!message+channel+guild) return;
        var mentionned = message+mentions+users+first();
    var client;
      if(mentionned){
          var client = mentionned; } else {
          var client = message+author;
      }
        const embed = new Discord+RichEmbed()
                           +addField('Requested by:', "<@" + message+author+id + ">")
        +setColor(000000)
        +setImage(`${client+avatarURL}`)
      message+channel+sendEmbed(embed);
    }
});

const Canvas = require("canvas"); //npm i canvas
let profile = JSON+parse(fs+readFileSync("profile+json", "utf8"))
client+on("message", message => {
 
  if (message+author+bot) return;
  if(!message+channel+guild)return;
  if (!profile[message+author+id]) profile[message+author+id] = {
    tite: 'A User',
    rep: 0,
    reps: 'NOT YET',
    lastDaily:'Not Collected',
    level: 0,
    points: 0,
    credits: 150,
  };
 
 
fs+writeFile('profile+json', JSON+stringify(profile), (err) => {
if (err) console+error(err);
})
});
 
client+on('message', message => {
 
    if(message+content+startsWith(prefix + 'rep')) {
      if(!message+channel+guild) return;
                    moment+locale('en');
                  var getvalueof = message+mentions+users+first()
                    if(!getvalueof) return message+channel+send(`**:mag: |  ${message+author+username}, the user could not be found+    **`);
                       if(getvalueof+id == message+author+id) return message+channel+send(`**${message+author+username}, you cant give yourself a reputation !**`)
    if(profile[message+author+id]+reps != moment()+format('L')) {
            profile[message+author+id]+reps = moment()+format('L');
            profile[getvalueof+id]+rep = Math+floor(profile[getvalueof+id]+rep+1);
         message+channel+send(`** :up:  |  ${message+author+username} has given ${getvalueof} a reputation point!**`)
        } else {
         message+channel+send(`**:stopwatch: |  ${message+author+username}, you can raward more reputation  ${moment()+endOf('day')+fromNow()} **`)
        }
       }
       fs+writeFile('profile+json', JSON+stringify(profile), (err) => {
if (err) console+error(err);
})
});
 
client+on("message", (message) => {
  let men = message+mentions+users+first()
 
  if (message+author+bot) return;
    if (message+author+id === client+user+id) return;
    if(!message+channel+guild) return;
if (message+content+startsWith(prefix + 'credit')) {
  if(men) {
    if (!profile[men+id]) profile[men+id] = {
    lastDaily:'Not Collected',
    credits: 0,
  };
  }
  if(men) {
message+channel+send(`** ${men+username}, :credit_card: balance` + " is `" + `${profile[men+id]+credits}$` + "`+**")
} else {
  message+channel+send(`** ${message+author+username}, your :credit_card: balance` + " is `" + `${profile[message+author+id]+credits}$` + "`+**")
}
}
 
if(message+content+startsWith(prefix + "daily")) {
  if(profile[message+author+id]+lastDaily != moment()+format('day')) {
    profile[message+author+id]+lastDaily = moment()+format('day')
    profile[message+author+id]+credits += 200
     message+channel+send(`**${message+author+username} you collect your \`200\` :dollar: daily pounds**`)
} else {
    message+channel+send(`**:stopwatch: | ${message+author+username}, your daily :yen: credits refreshes ${moment()+endOf('day')+fromNow()}**`)
}
  }
 
 let cont = message+content+slice(prefix+length)+split(" ");
let args = cont+slice(1);
let sender = message+author
if(message+content+startsWith(prefix + 'trans')) {
          if (!args[0]) {
            message+channel+send(`**Usage: ${prefix}trans @someone amount**`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message+channel+send(`**Usage: ${prefix}trans @someone amount**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run+
             }
            let defineduser = '';
            let firstMentioned = message+mentions+users+first();
            defineduser = (firstMentioned)
            if (!defineduser) return message+channel+send(`**Usage: ${prefix}trans @someone amount**`);
            var mentionned = message+mentions+users+first();
if (!profile[sender+id]) profile[sender+id] = {}
if (!profile[sender+id]+credits) profile[sender+id]+credits = 200;
fs+writeFile('profile+json', JSON+stringify(profile), (err) => {
if (err) console+error(err);
})
      var mando = message+mentions+users+id;
      if  (!profile[defineduser+id]) profile[defineduser+id] = {}
      if (!profile[defineduser+id]+credits) profile[defineduser+id]+credits = 200;
      profile[defineduser+id]+credits += (+args[0]);
      profile[sender+id]+credits += (-args[0]);
      let mariam = message+author+username
message+channel+send(`**:moneybag: | ${message+author+username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser+id}>**`)
}
 
      });
 
      client+on('message', message => {
          if(!profile[message+author+id]) profile[message+author+id] ={
              points: 0,
              level: 1
          };
          if(message+author+bot) return;
          profile[message+author+id]+points = Math+floor(profile[message+author+id]+points+1);
          if(profile[message+author+id]+points > 100) {
              profile[message+author+id]+points = 0
              profile[message+author+id]+level = Math+floor(profile[message+author+id]+level+1);
              message+channel+send(`**${message+author+username}, You leveld up to __${profile[message+author+id]+level}__**`)
          }
          fs+writeFile('profile+json', JSON+stringify(profile), (err) => {
if (err) console+error(err);
})
      })
 
    client+on('message', message => {
        let tit = message+content+split(" ")+slice(1)+join(" ");
        if(message+content+startsWith(prefix + "title")) {
        if(!profile[message+author+id]+tite) profile[message+author+id]+tite = "Hey im using Super"
        if(!tit) {
            message+channel+send("**Usage: <title <something>**");
        } else {
            profile[message+author+id]+tite = tit
            message+channel+send(`:ok:`)
        }
        }
        fs+writeFile('profile+json', JSON+stringify(profile), (err) => {
if (err) console+error(err);
})
    })
 
    client+on("message", message => {
  if (message+author+bot) return;
    if(!message+channel+guild) return;
if (message+content+startsWith(prefix + "profile")) {
                               let user = message+mentions+users+first();
         var men = message+mentions+users+first();
            var heg;
            if(men) {
                heg = men
            } else {
                heg = message+author
            }
          var mentionned = message+mentions+members+first();
             var h;
            if(mentionned) {
                h = mentionned
            } else {
                h = message+member
            }
            var ment = message+mentions+users+first();
            var getvalueof;
            if(ment) {
              getvalueof = ment;
            } else {
              getvalueof = message+author;
            }
   var mentionned = message+mentions+users+first();
 
    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message+author;
 
      }
if (!profile[getvalueof+id]) profile[getvalueof+id] = {points: 0,reps: "NOT YET",credits: 1, level: 1,tite: "HypeLC User", rep: 0, lastDaily: "NOT COLLECTED"};
            let Image = Canvas+Image,
            canvas = new Canvas(300, 300),
            ctx = canvas+getContext('2d');
            fs+readFile("Super+png", function (err, Background) { //امتداد الصورة
            if (err) return console+log(err);
            let BG = Canvas+Image;
            let ground = new Image;
            ground+src = Background;
            ctx+drawImage(ground, 0, 0, 300, 300); // حجم الصورة
 
})
 
 
 
                let url = getvalueof+displayAvatarURL+endsWith("+webp") ? getvalueof+displayAvatarURL+slice(5, -20) + "+png" : getvalueof+displayAvatarURL;
                jimp+read(url, (err, ava) => {
                    if (err) return console+log(err);
                    ava+getBuffer(jimp+MIME_PNG, (err, buf) => {
                        if (err) return console+log(err);
 
                        //ur name
                        ctx+font = 'bold 16px kathen'; // حجم الخط و نوعه
                        ctx+fontSize = '40px'; // عرض الخط
                        ctx+fillStyle = "#000000"; // لون الخط
                        ctx+textAlign = "center"; // محاذا ة النص
                        ctx+fillText(`${getvalueof+username}`, 153, 173) // احداثيات اسمك
 
                        //ur name
                        ctx+font = 'bold 16px kathen'; // حجم الخط و نوعه
                        ctx+fontSize = '40px'; // عرض الخط
                        ctx+fillStyle = "#f1f1f1"; // لون الخط
                        ctx+textAlign = "center"; // محاذا ة النص
                        ctx+fillText(`${getvalueof+username}`, 151, 171) // احداثيات اسمك
 
                        //credit
                        ctx+font = "bold 12px kathen" // نوع الخط وحجمه
                        ctx+fontSize = '10px'; // عرض الخط
                        ctx+fillStyle = "#f1f1f1" // لون الخط
                        ctx+textAlign = "center"; // محاذا ة النص
                        ctx+fillText(`$${profile[getvalueof+id]+credits}`, 81, 159) // احداثيات المصاري
 
                        //poits
                        ctx+font = "bold 12px kathen" // ن
                        ctx+fontSize = '10px'; // عرض الخطوع الخط وحجمه
                        ctx+fillStyle = "#f1f1f1" // لون الخط
                        ctx+textAlign = "center"; // محاذا ة النص
                        ctx+fillText(`${profile[getvalueof+id]+points}`, 221, 159) // احداثيات النقاط
 
                        //Level
                        ctx+font = "bold 27px kathen" // نوع الخط و حجمه
                        ctx+fontSize = '10px'; // عرض الخط
                        ctx+fillStyle = "#f1f1f1" // لون الخط
                        ctx+textAlign = "center"; // محاذا ة النص
                        ctx+fillText(`${profile[getvalueof+id]+level}`, 221, 118) // احداثيات اللفل
 
                         //info
                        ctx+font = "bold 12px kathen" // ن
                        ctx+fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx+fillStyle = "#000000" // لون الخط
                        ctx+textAlign = "center"; // محاذا ة النص
                        ctx+fillText(`${profile[getvalueof+id]+tite}`, 150, 199) // احداثيات النقاط
 
                        //info
                        ctx+font = "bold 12px kathen" // ن
                        ctx+fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx+fillStyle = "#f1f1f1" // لون الخط
                        ctx+textAlign = "center"; // محاذا ة النص
                        ctx+fillText(`${profile[getvalueof+id]+tite}`, 150, 197) // احداثيات النقاط
 
                        // REP
                        ctx+font = "bold 26px  kathen";
                        ctx+fontSize = "50px";
                        ctx+fillStyle = "#f1f1f1";
                        ctx+textAlign = "center";
                        ctx+fillText(`+${profile[getvalueof+id]+rep}`, 80,117)
 
                        let Avatar = Canvas+Image;
                        let ava = new Avatar;
 
ava+src = buf;
                        ctx+beginPath();
                        ctx+arc(75, 100, 780, 0, Math+PI*2, true);
                        ctx+closePath();
                        ctx+clip();
                        ctx+drawImage(ava, 116, 82, 72, 72);
 
message+channel+startTyping()
message+channel+sendFile(canvas+toBuffer())
message+channel+stopTyping()
})
})
}
});
 



      
      
     
   client+on('message', message => {
     if (message+content === "+support") {
     let embed = new Discord+RichEmbed()
  +setAuthor(message+author+username)
  +setColor("#9B59B6")
  +addField(" **الدعم الفني**" , "  **ٍSoon**")
     
     
  message+channel+sendEmbed(embed);
    }
});

client+on('message', message => {
	var prefix = "+";
   if(!message+channel+guild) return;
if(message+content+startsWith(prefix + 'clear')) {
if(!message+channel+guild) return message+channel+send('**This Command is Just For Servers**')+then(m => m+delete(5000));
if(!message+member+hasPermission('MANAGE_MESSAGES')) return      message+channel+send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message+content+split(" ")+join(" ")+slice(2 + prefix+length);
let request = `Requested By ${message+author+username}`;
message+channel+send(`**Are You sure you want to clear the chat?**`)+then(msg => {
msg+react('✅')
+then(() => msg+react('❌'))
+then(() =>msg+react('✅'))

let reaction1Filter = (reaction, user) => reaction+emoji+name === '✅' && user+id === message+author+id;
let reaction2Filter = (reaction, user) => reaction+emoji+name === '❌' && user+id === message+author+id;

let reaction1 = msg+createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg+createReactionCollector(reaction2Filter, { time: 12000 });
reaction1+on("collect", r => {
message+channel+send(`Chat will delete`)+then(m => m+delete(5000));
var msg;
        msg = parseInt();

      message+channel+fetchMessages({limit: msg})+then(messages => message+channel+bulkDelete(messages))+catch(console+error);
      message+channel+sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }})+then(msg => {msg+delete(3000)});

})
reaction2+on("collect", r => {
message+channel+send(`**Chat deletion cancelled**`)+then(m => m+delete(5000));
msg+delete();
})
})
}
});

// THIS  MUST  BE  THIS  WAY

client+on('message' , message => { 
    var prefix = "+";
     if (message+content === prefix + "servers") {

if(!message+channel+guild) return;
  if(message+content < 1023) return
  const Embed11 = new Discord+RichEmbed()
+setAuthor(client+user+username,client+user+avatarURL)
+setThumbnail(client+user+avatarURL)
+setDescription(`***السيرفرات الموجودة فيه البوت ${client+guilds+size} \n \n${client+guilds+map(guilds => `- ${guilds+name}`)+join('\n')}***`)
         message+channel+sendEmbed(Embed11)
    }
});


			      
client+on('guildCreate', guild => {
  client+channels+get("468911065095208980")+send(`**Woops new server ✅
Server name: __${guild+name}__
Server owner: __${guild+owner}__**`)
});
client+on("guildDelete", guild => {
 client+channels+get("468911065095208980")+send(`**Removed From server :x:
Server name: __${guild+name}__
Server owner: __${guild+owner}__**`)
});

client+on('ready', () => {
  console+log(`Logged in as ${client+user+tag}!`);
});
/*جميع الحقوق محفوظهه لريبل ولسيرفر كودز
رآح يرسل للأونر تحذير + م يتطلب ملفات سويته لكم داتا مؤقت
سو روم بأسم log 
أو غيره من الكود عشان يرسل هنا التحذير
nvm i 10 
nvm use 10
npm i discord+js
*/
var guilds = {};
client+on('guildBanAdd', function(guild) {
            const rebellog = client+channels+find("name", "log"),
            Onumber = 3,
  Otime = 10000
guild+fetchAuditLogs({
    type: 22
})+then(audit => {
    let banner = audit+entries+map(banner => banner+executor+id)
    let bans = guilds[guild+id + banner]+bans || 0 
    guilds[guild+id + banner] = {
        bans: 0
    }
      bans[guilds+id]+bans += 1; 
if(guilds[guild+id + banner]+bans >= Onumber) {
try {
let roles = guild+members+get(banner)+roles+array();
guild+members+get(banner)+removeRoles(roles);
  guild+guild+member(banner)+kick();

} catch (error) {
console+log(error)
try {
guild+members+get(banner)+ban();
  rebellog+send(`<@!${banner+id}>
حآول العبث بالسيرفر @everyone`);
guild+owner+send(`<@!${banner+id}>
حآول العبث بالسيرفر ${guild+name}`)
    setTimeout(() => {
 guilds[guild+id]+bans = 0;
  },Otime)
} catch (error) {
console+log(error)
}
}
}
})
});
 let channelc = {};
  client+on('channelCreate', async (channel) => {
  const rebellog = client+channels+find("name", "log"),
  Oguild = channel+guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel+guild+fetchAuditLogs({limit: 1});
  const channelcreate = audit+entries+first()+executor;
  console+log(` A ${channel+type} Channel called ${channel+name} was Created By ${channelcreate+tag}`);
   if(!channelc[channelcreate+id]) {
    channelc[channelcreate+id] = {
    created : 0
     }
 }
 channelc[channelcreate+id]+created += 1;
 if(channelc[channelcreate+id]+created >= Onumber ) {
    Oguild+members+get(channelcreate+id)+kick();
rebellog+send(`<@!${channelcreate+id}>
حآول العبث بالسيرفر @everyone`);
channel+guild+owner+send(`<@!${channelcreate+id}>
حآول العبث بالسيرفر ${channel+guild+name}`)
}
  setTimeout(() => {
 channelc[channelcreate+id]+created = 0;
  },Otime)
  });

let channelr = {};
  client+on('channelDelete', async (channel) => {
  const rebellog = client+channels+find("name", "log"),
  Oguild = channel+guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel+guild+fetchAuditLogs({limit: 1});
  const channelremover = audit+entries+first()+executor;
  console+log(` A ${channel+type} Channel called ${channel+name} was deleted By ${channelremover+tag}`);
   if(!channelr[channelremover+id]) {
    channelr[channelremover+id] = {
    deleted : 0
     }
 }
 channelr[channelremover+id]+deleted += 1;
 if(channelr[channelremover+id]+deleted >= Onumber ) {
  Oguild+guild+member(channelremover)+kick();
rebellog+send(`<@!${channelremover+id}>
حآول العبث بالسيرفر @everyone`);
channel+guild+owner+send(`<@!${channelremover+id}>
حآول العبث بالسيرفر ${channel+guild+name}`)
}
  setTimeout(() => {
 channelr[channelremover+id]+deleted = 0;
  },Otime)
  });

  client+on('message', message => { 
	var prefix ="+";
           if (message+content+startsWith(prefix + "id")) {
     var args = message+content+split(" ")+slice(1);
     let user = message+mentions+users+first();
     var men = message+mentions+users+first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message+author
        }
      var mentionned = message+mentions+members+first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message+member
        }
               moment+locale('ar-TN');
      var id = new  Discord+RichEmbed()
      +setAuthor(message+author+username, message+author+avatarURL) 
    +setColor("#707070")
    +addField(': دخولك لديسكورد قبل', `${moment(heg+createdTimestamp)+format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg+createdTimestamp)+fromNow()}\`` ,true) 
    +addField(': انضمامك لسيرفر قبل', `${moment(h+joinedAt)+format('YYYY/M/D HH:mm:ss')} \n \`${moment(h+joinedAt)+fromNow()}\``, true)               
    +setFooter(`A Bot`, 'https://images-ext-2+discordapp+net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid+org/sites/default/files/files/ID_symbol_B-W_128x128+gif')                                 
    +setThumbnail(heg+avatarURL);
    message+channel+send(id)
}       });

// THIS  MUST  BE  THIS  WAY
client+login(process+env+BOT_TOKEN);
			      
