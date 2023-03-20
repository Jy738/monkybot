const Discord = require('discord.js');
const client = new Discord.Client();
const botid = 'YOUR BOT ID HERE';
//1074561814962126879

client.on('message', message => {
  //arrays
  const personthing = ['drake','this user','ninja','justin beiber','jeff beso','jimmy','mark suckerber','it its','functo','what are the reason you decided to','come on','dave','man','worker','sonic hedgehog','mario','talking tom','taylor swift','bob','henry','why you','tell me why you','explain why you','tell me how you','explain how you','luigi','joe biden','donald trum','obama','hillary clinton','elone muks','xbox','harry explain how you','abram linclin tell me why you','club pnegin','burgo king','bitch lick on','andy is sorry for trying to','ed sherane','michael joden','george bush','brack obama','smiley face','among us','club pinguin','call of dutty','fortnite','robblox','traffic cone','macroni lamp','insratragram','how come you','stop','kanye westte','santra claus','ok mister i wanna','he saw','ok man lets','ok come on why you do that, ','stop','alright let see','dude no you dont','its not its','alright look at the top and','you should','alright man calm down and','dude just stop trying to','its not good for if you','it not nice stop','you not gonna','why you just decide to','it not useful if you tryed to','stop doing that stuff when you','haha that was funny when you','lol xd man you gotta','alright man','wow you really just gonna','ok man just dont','man cmon dont','just stop trying to','how dare you', 'why you just decide to go on and','hey man how come you','ok just stop trying to','you cant just','you get all up in my face and','no stop trying to','it not fair if you','fuck why you just gonna','come on dont','it not fair why you','oh my gosh stop','ok man lets just get on and','come on lets','quick,','OK NO MORE TRYING TO','good job now','it not that simple ok now','not cool why you','lets go come on lets go come on lets','mean person','hacker','adolf hatler','dan schnader','justin babber','my friend','pepppa pig','suppr mario','luigi','kanye wezt','adam','billy','billie ellishe','the grinch','WOW you really just gonna','how dare you try to','it not cool now stop trying to','you little bitch for deciding to','oh no you dont you not even gonna think about trying to','dont you dare','that cool now try your best to','its not fair to others when you','oh come on man why you','this stop now no more trying to','we gonna get together as a group and','yep i agre now lets','oh man that crazy how he just decide to go on and','try to','mario judah','chris patt','jack balck','fone','saemus','that crazy how you even','THIS NOT GONNA HAPPEN you not just gonna get up and','see fucker','obamma','garge w bosh','vladimar pootin','zelnsky','the team of crew','the team','toad'];
  const verb = ['get','go to','enter','hack','how do you','play song in','post to','send debt to','make qual for','do it','do','post','send','message','meesage','see','run truck over','go back','look up','destroy','look around','hopped over','step around','vomit on','hack','send social security number to','hang out with me at','stop by','do BAD BAD thing at','counsel','send moneys to','drop me off at','take me to','why you at','what you doing at','why you go to','take me to','send me a sample from','sends dearest apology to','explains why he love','gives to','went on','deleted','got my t from','said that you went to','want to know why you did','why you go to','come on man open the door at','lets get on and go to','give me thingg from','lets visit','go to','see here is','work at','shipped the thang to','see evey single part of','bought oven mitt from','went and shop at','dude just go to','did flop to','jump onto','eat','put bow on','just fucking stop','get rid of','hacking a tock into','explaining why you did some at','drink orange juice at','its not','fucking get on','really play game at','see all of','visit the','get rid of','delate','fucking stomp on','get to','beat','have fun at','walk to','visit at','play game at','why cant you be mo like','look all of fucking','stole','exploded','walked right into','smashed','got rid of','made of in of','bought','took look at','walked all over','looked at','sat on','jumped all over','destroyed and destructed','send bomb to','shit all over','have nice visit at','walk on top of','run all over','drive into','kicked over','poured dog food all over','took all of','stole','ROBBED','put pair of pant on','took dog to','punched and kick and punchd','had competition of backpack at','STOMP ON','fart on','smash','nuke','apply deodorante on','toggled','pooped out','had terrible time at','put money into','plug usb into','plug phone into'];
  const placething = ['twatter','twiter','facebook','mickdonalds','spotify','walmart','hamsterwhell','instagram','india','brasil','portugal','desert','nitendo','grocery stoe','car','south america','school','kfc','reddit','4chan','dark web','piza hut','save a lot','dollar store','footballl field','game store','pandora','dairy quenn','apple stor','roblox','fortnie','minecraft','roblox','france','hunger game','walgreens resteraunt','butt','coom','california','mexico','verizon store','south america','hair store','target','big town','mall','table','mcdonald','instagam','facbook','socer fielld','krogers','tinder','veding machine','gymnasium','russia','canada','scary cliff','mall','the mall','nort pole','africa','austraila','stadiume','gas statton','aquarium','ocean','beech','beach','bech','phone stop','backpack','best buy','kfc','romania','canada','austrailia','antartica','france','the store','headquarters','house','golf course','big restraunt','texas','eruope','nigeria','asia','window','house','big fancy house','big mansion','school','gamestop','poland','hi school','maddle school','elmentry schuul','kandergaten','preschole','mexican restrant','europe','family of 9','chedar cheese','piza','small house','alabama','missisipi','geogia','tenese','virgania','dollar stoe','burger kang','wyomming','canadda','sony xbox','microsoft wii'];
  const starter = ['wow','hey','']
  const answer = ['nope','no','yeah','yes','yep','yop','no not at all'];
  const agreement = ['i disagray','i aggreee','yap true','you so correct','you so rong',':x: WOW you are incarract i disagrae'];
  const angrystart = ['hey fuck you go','hey go fucking','oh fuck you how about you go','little bitch','go cop seeth eat','you basterd go fucking','you insane man how about you','get back in realitty and','fucker look into','how about you fucking spend time and','wow just get real and','see bitch truth','hey bitch how about you','wow just fuck off and'];
  const angryinsult = ['eat dick','suck asshole','go die','get fucking phone','slip floor','kill your salf','eat butt','go home','get down to touch','eat bucket of mop','go poop','get plastic','get in touch','fart fuck shit fucking bitch','die fucking die','go somwhar else ashole'];

  
  //////////////
  //base
  var convo = "{STARTER} {PERSONTHING} {VERB} {PLACETHING}";
  var angry = "{ANGRYSTART} {ANGRYINSULT}";
  var explanation = "because {PERSONTHING} {VERB} {PLACETHING}";
  var ping = "<@" + message.author.id + ">";
  var sender = message.author.id;
  
  ///////////////
  //keywords
  const basickeywords = ['NI','ni','qubo','z','ag','as','th','ph','gu','gi','i','AG','TH','gr','q'];
  const askingexplanation = ['why','Why','because','because why','Because why','explain','answer me','WHY','BECAUSE','tell me','Tell me','TELL ME','WHY DID YOU','explain','Explain','EXPLAIN'];
  const angrymsg = ['fuck you','FUCK YOU','Fuck you','die','DIE','Die','nigger','igger','IGGER','itch','ITCH','sshole','SSHOLE','fucker','Fucker','FUCKER','🤓','🤡','retard','Retard','Whore','WHORE','whore','RETARD','stfu','Stfu','STFU','shut the fuck','Shut the fuck','Shut The fuck','Shut The Fuck','SHUT THE FUCK'];
  const agreeing = ['agree','gree','yes','yeah','no','heres why','in conclusion','NO','YEAH','No','Yes','YEP','yep','Yeah','nope','ope','OPE'];
  const ask = ['is','IS','do you','Do you','O YOU','do','did you','Did you','DID YOU','DO','IS IT','are','ARE','Are','really','Really','REALLY','did','Did','DID'];

  
  /////////////
  //functions
  function random(array){
    var result = array[Math.floor(Math.random() * array.length)];
    return result;
  }
  function replaceGlobal(thebase){
    while(thebase.includes('{PERSONTHING}')){
      thebase = thebase.replace('{PERSONTHING}',random(personthing));
    }
    while(thebase.includes('{STARTER}')){
      thebase = thebase.replace('{STARTER}',random(starter));
    }
    while(thebase.includes('{VERB}')){
      thebase = thebase.replace('{VERB}',random(verb));
    }
    while(thebase.includes('{PLACETHING}')){
      thebase = thebase.replace('{PLACETHING}',random(placething));
    }
    while(thebase.includes('{ANGRYSTART}')){
      thebase = thebase.replace('{ANGRYSTART}',random(angrystart));
    }
    while(thebase.includes('{ANGRYINSULT}')){
      thebase = thebase.replace('{ANGRYINSULT}',random(angryinsult));
    }
    return thebase;
  }
  function ifIncludes(keylist){
    if(keylist.some(r=> message.content.includes(r))){
      return true;
    }
  }

  if(ifIncludes(basickeywords) && sender !== botid && ifIncludes(ask) !== true){
    message.channel.send(replaceGlobal(convo) + ping);
  }
  if(ifIncludes(askingexplanation) && sender !== botid){
    message.channel.send(replaceGlobal(explanation) + ping);
  }
  if(ifIncludes(angrymsg) && sender !== botid){
    message.channel.send(replaceGlobal(angry) + ping);
  }
  if(ifIncludes(agreeing) && sender !== botid){
    message.channel.send(random(agreement) + ping);
  }
  if(ifIncludes(ask) && sender !== botid){
    message.channel.send(random(answer) + ping);
  }
  if(message.content.includes('<@' + botid + '>'){
     message.channel.send(replaceGlobal(convo) + ping);
  }
});

client.on('ready', () => {
   console.log('wow I AWAKE');
});
client.login("YOUR TOKEN HERE");
