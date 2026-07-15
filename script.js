// =====================================================
// GALAXY S26 BIRTHDAY EDITION
// script.js — PART 1
// =====================================================

// ===========================
// SCREENS
// ===========================

const bootScreen = document.getElementById("bootScreen");
const lockScreen = document.getElementById("lockScreen");
const faceScreen = document.getElementById("faceScreen");
const updateScreen = document.getElementById("updateScreen");
const installScreen = document.getElementById("installScreen");
const matchScreen = document.getElementById("matchScreen");
const restartScreen = document.getElementById("restartScreen");
const homeScreen = document.getElementById("homeScreen");

// ===========================
// ELEMENTS
// ===========================

const bootFill = document.getElementById("bootFill");
const restartFill = document.getElementById("restartFill");

const clock = document.getElementById("clock");
const date = document.getElementById("date");

const faceBar = document.getElementById("faceBar");
const faceText = document.getElementById("faceText");

const installBar = document.getElementById("installBar");
const installText = document.getElementById("installText");

const installBtn = document.getElementById("installBtn");

// ===========================
// SHOW SCREEN
// ===========================

function showScreen(screen){

document.querySelectorAll(".screen").forEach(item=>{

item.classList.remove("active");

});

screen.classList.add("active");

}

// ===========================
// BOOT
// ===========================

window.onload=()=>{

let percent=0;

const timer=setInterval(()=>{

percent+=2;

bootFill.style.width=percent+"%";

if(percent>=100){

clearInterval(timer);

setTimeout(()=>{

showScreen(lockScreen);

},500);

}

},40);

};

// ===========================
// LOCK
// ===========================

lockScreen.addEventListener("click",()=>{

showScreen(faceScreen);

startFace();

});

// ===========================
// FACE RECOGNITION
// ===========================

function startFace(){

let percent=0;

const timer=setInterval(()=>{

percent+=2;

faceBar.style.width=percent+"%";

if(percent>=100){

clearInterval(timer);

faceText.innerHTML="✅ Face Recognized";

setTimeout(()=>{

clock.innerHTML="12:00 AM";

date.innerHTML="Thursday, July 16";

},500);

setTimeout(()=>{

showScreen(updateScreen);

},1800);

}

},40);

}

// ===========================
// UPDATE BUTTON
// ===========================

installBtn.addEventListener("click",()=>{

showScreen(installScreen);

startInstall();

});

// ===========================
// INSTALL
// ===========================

function startInstall(){

let percent=0;

const messages=[

"Preparing Birthday Update...",

"Downloading Love...",

"Collecting Memories...",

"Installing Happiness...",

"Finding Soulmate...",

"Perfect Match Found ❤️"

];

installText.innerHTML=messages[0];

const timer=setInterval(()=>{

percent++;

installBar.style.width=percent+"%";

if(percent===20){

installText.innerHTML=messages[1];

}

if(percent===40){

installText.innerHTML=messages[2];

}

if(percent===60){

installText.innerHTML=messages[3];

}

if(percent===80){

installText.innerHTML=messages[4];

}

if(percent>=100){

clearInterval(timer);

installText.innerHTML=messages[5];

setTimeout(()=>{

showScreen(matchScreen);

startMatch();

},1000);

}

},45);

}

// ===========================
// MATCH
// ===========================

function startMatch(){

setTimeout(()=>{

showScreen(restartScreen);

startRestart();

},3000);

}

// ===========================
// RESTART
// ===========================

function startRestart(){

let percent=0;

const timer=setInterval(()=>{

percent+=2;

restartFill.style.width=percent+"%";

if(percent>=100){

clearInterval(timer);

setTimeout(()=>{

showScreen(homeScreen);

},500);

}

},40);

}

// =====================================================
// APP SCREENS
// =====================================================

const messagesScreen=document.getElementById("messagesScreen");
const galleryScreen=document.getElementById("galleryScreen");
const musicScreen=document.getElementById("musicScreen");
const birthdayScreen=document.getElementById("birthdayScreen");
const settingsScreen=document.getElementById("settingsScreen");

// =====================================================
// HOME APPS
// =====================================================

const messagesApp=document.getElementById("messagesApp");
const galleryApp=document.getElementById("galleryApp");
const musicApp=document.getElementById("musicApp");
const birthdayApp=document.getElementById("birthdayApp");
const settingsApp=document.getElementById("settingsApp");

// =====================================================
// BACK BUTTONS
// =====================================================

const messagesBack=document.getElementById("messagesBack");
const galleryBack=document.getElementById("galleryBack");
const musicBack=document.getElementById("musicBack");
const birthdayBack=document.getElementById("birthdayBack");
const settingsBack=document.getElementById("settingsBack");

// =====================================================
// OPEN APPS
// =====================================================

messagesApp.addEventListener("click",()=>{

showScreen(messagesScreen);

});

galleryApp.addEventListener("click",()=>{

showScreen(galleryScreen);

});

musicApp.addEventListener("click",()=>{

showScreen(musicScreen);

});

birthdayApp.addEventListener("click",()=>{

showScreen(birthdayScreen);

});

settingsApp.addEventListener("click",()=>{

showScreen(settingsScreen);

});

// =====================================================
// BACK HOME
// =====================================================

messagesBack.addEventListener("click",()=>{

showScreen(homeScreen);

});

galleryBack.addEventListener("click",()=>{

showScreen(homeScreen);

});

musicBack.addEventListener("click",()=>{

showScreen(homeScreen);

});

birthdayBack.addEventListener("click",()=>{

showScreen(homeScreen);

});

settingsBack.addEventListener("click",()=>{

showScreen(homeScreen);

});

// =====================================================
// BIRTHDAY GIFT
// =====================================================

const openGift=document.getElementById("openGift");

openGift.addEventListener("click",()=>{

document.querySelector(".birthdayContent").innerHTML=`

<div class="giftBox">

🎉

</div>

<h2>

Happy 22nd Birthday,
Hubby! ❤️

</h2>

<p>

I know life hasn't always been easy,
but I'm so proud of everything you've become.

Thank you for loving me,
working hard for your dreams,
and making me feel loved every single day.

May this year bring you closer to every dream,
especially your dream phone.

I'll always be here,
cheering you on,
loving you,
and choosing you.

I love you so much.

Happy Birthday, Raymart.

❤️

- Cristel Joy

</p>

`;

});

// =====================================================
// END OF SCRIPT
// =====================================================

// =====================================================
// BONUS ANIMATIONS & IMPROVEMENTS
// Add this BELOW everything in script.js
// =====================================================

// ===========================
// AUTO PLAY MUSIC WHEN OPENING MUSIC APP
// ===========================

const player=document.getElementById("player");

musicApp.addEventListener("click",()=>{

setTimeout(()=>{

player.play().catch(()=>{});

},500);

});

// ===========================
// STOP MUSIC WHEN LEAVING
// ===========================

musicBack.addEventListener("click",()=>{

player.pause();

player.currentTime=0;

});

// ===========================
// APP ICON ANIMATION
// ===========================

const apps=document.querySelectorAll(".app");

apps.forEach((app,index)=>{

app.style.animationDelay=(index*0.08)+"s";

});

// ===========================
// DOUBLE TAP WALLPAPER
// SECRET MESSAGE
// ===========================

let tapCount=0;

const wallpaper=document.querySelector(".homeBackground");

wallpaper.addEventListener("click",()=>{

tapCount++;

if(tapCount>=5){

alert(
"I love you so much, Hubby. ❤️\n\nHappy 22nd Birthday!\n\n— Cristel Joy"
);

tapCount=0;

}

setTimeout(()=>{

tapCount=0;

},1800);

});

// ===========================
// SETTINGS EASTER EGG
// ===========================

document.querySelectorAll(".settingItem")[5]
.addEventListener("click",()=>{

alert("Love Level: ∞ ❤️");

});

// ===========================
// HEART BEAT EVERY 8 SECONDS
// ===========================

setInterval(()=>{

const heart=document.querySelector(".heart");

if(!heart) return;

heart.style.transform="scale(1.25)";

setTimeout(()=>{

heart.style.transform="scale(1)";

},250);

},8000);

// ===========================
// FADE APP OPEN
// ===========================

function openScreen(screen){

showScreen(screen);

screen.classList.add("appOpen");

setTimeout(()=>{

screen.classList.remove("appOpen");

},350);

}

messagesApp.onclick=()=>openScreen(messagesScreen);

galleryApp.onclick=()=>openScreen(galleryScreen);

musicApp.onclick=()=>openScreen(musicScreen);

birthdayApp.onclick=()=>openScreen(birthdayScreen);

settingsApp.onclick=()=>openScreen(settingsScreen);

// ===========================
// HAPPY BIRTHDAY POPUP
// ===========================

setTimeout(()=>{

if(homeScreen.classList.contains("active")){

alert("🎉 Happy 22nd Birthday, Raymart! ❤️");

}

},1000);

// =====================================================
// FINAL
// =====================================================

console.log("Galaxy S26 Birthday Edition Loaded ❤️");

// =======================================
// Samsung Messages Animation
// =======================================

const birthdayMessages=[

"Happy Birthday, Hubby! ❤️🎂",

"It's finally 12:00 AM... Happy 22nd Birthday!",

"I made this Galaxy S26 just for you because you deserve something special.",

"I know you've been working so hard for your dreams.",

"I'm so proud of you every single day.",

"I'll always be your number one supporter.",

"I love you so much, Raymart. ❤️"

];

let messageIndex=0;

messagesApp.addEventListener("click",()=>{

const area=document.getElementById("chatArea");

area.innerHTML="";

messageIndex=0;

sendMessage();

});

function sendMessage(){

if(messageIndex>=birthdayMessages.length){

return;

}

const bubble=document.createElement("div");

bubble.className="message left";

bubble.innerHTML=birthdayMessages[messageIndex];

document.getElementById("chatArea").appendChild(bubble);

document.getElementById("chatArea").scrollTop=

document.getElementById("chatArea").scrollHeight;

messageIndex++;

setTimeout(sendMessage,1200);

}
// ==========================================
// BIRTHDAY GIFT V2
// ==========================================

const gift=document.getElementById("giftBox");

gift.addEventListener("click",()=>{

launchConfetti();

document.getElementById("birthdayContent").innerHTML=`

<h1
style="font-size:42px;margin-bottom:20px;">

🎉 Happy Birthday
Hubby! ❤️

</h1>

<img
src="us.JPEG"
style="width:230px;
height:230px;
object-fit:cover;
border-radius:30px;
margin:25px 0;
box-shadow:0 15px 40px rgba(0,0,0,.35);">

<p
style="font-size:18px;
line-height:1.9;
max-width:380px;">

Happy 22nd Birthday,
my love.

I know life hasn't always been easy,
but I'm so proud of you.

Thank you for every sacrifice,
every effort,
and every dream you're chasing.

I hope this little Galaxy S26
made you smile today.

Always remember...

No matter where life takes us,
I'll always choose you.

I love you so much.

Forever yours,

❤️ Cristel Joy

</p>

`;

});

// ==========================================
// CONFETTI
// ==========================================

function launchConfetti(){

const colors=[

"#ff4d6d",

"#ffd60a",

"#4ea8ff",

"#7bffb3",

"#ffffff"

];

for(let i=0;i<180;i++){

const piece=document.createElement("div");

piece.className="confetti";

piece.style.left=Math.random()*100+"vw";

piece.style.background=

colors[Math.floor(Math.random()*colors.length)];

piece.style.animationDuration=

(Math.random()*2+2)+"s";

piece.style.transform=

"rotate("+Math.random()*360+"deg)";

document.body.appendChild(piece);

setTimeout(()=>{

piece.remove();

},4500);

}

}

// ==========================================
// MUSIC PLAYER V2
// ==========================================

const playSong=document.getElementById("playSong");

const musicFill=document.querySelector(".musicFill");

playSong.addEventListener("click",()=>{

if(player.paused){

player.play();

playSong.innerHTML="❚❚";

}else{

player.pause();

playSong.innerHTML="▶";

}

});

player.addEventListener("timeupdate",()=>{

const percent=

(player.currentTime/player.duration)*100;

musicFill.style.width=percent+"%";

});