// =========================================================
// GALAXY S26 BIRTHDAY EDITION
// PREMIUM SCRIPT
// PART 1
// =========================================================

// ==========================
// SCREENS
// ==========================

const screens = document.querySelectorAll(".screen");

const bootScreen = document.getElementById("bootScreen");
const lockScreen = document.getElementById("lockScreen");
const faceScreen = document.getElementById("faceScreen");
const updateScreen = document.getElementById("updateScreen");
const installScreen = document.getElementById("installScreen");
const matchScreen = document.getElementById("matchScreen");
const restartScreen = document.getElementById("restartScreen");
const homeScreen = document.getElementById("homeScreen");

const messagesScreen = document.getElementById("messagesScreen");
const galleryScreen = document.getElementById("galleryScreen");
const musicScreen = document.getElementById("musicScreen");
const birthdayScreen = document.getElementById("birthdayScreen");
const settingsScreen = document.getElementById("settingsScreen");

// ==========================
// ELEMENTS
// ==========================

const bootFill = document.getElementById("bootFill");

const faceFill = document.getElementById("faceFill");

const restartFill = document.getElementById("restartFill");

const loveFill = document.getElementById("loveFill");

const installBtn = document.getElementById("installBtn");

const installFill = document.getElementById("installFill");

const installStatus = document.getElementById("installStatus");

const installPercent = document.getElementById("installPercent");

const circleProgress = document.getElementById("circleProgress");

const faceStatus = document.getElementById("faceStatus");

// ==========================
// FUNCTIONS
// ==========================

function showScreen(screen){

screens.forEach(item=>{

item.classList.remove("active");

});

screen.classList.add("active");

}

// ==========================
// BOOT
// ==========================

window.onload=()=>{

let percent=0;

const boot=setInterval(()=>{

percent+=2;

bootFill.style.width=percent+"%";

if(percent>=100){

clearInterval(boot);

setTimeout(()=>{

showScreen(lockScreen);

},500);

}

},40);

};

// ==========================
// LOCK
// ==========================

lockScreen.addEventListener("click",()=>{

showScreen(faceScreen);

startFace();

});

// ==========================
// FACE ID
// ==========================

function startFace(){

let percent=0;

const scan=setInterval(()=>{

percent+=2;

faceFill.style.width=percent+"%";

if(percent>=100){

clearInterval(scan);

faceStatus.innerHTML="Face Recognized ❤️";

setTimeout(()=>{

showScreen(updateScreen);

},1200);

}

},40);

}

// ==========================
// UPDATE
// ==========================

installBtn.addEventListener("click",()=>{

showScreen(installScreen);

startInstall();

});

// ==========================
// INSTALL
// ==========================

function startInstall(){

let percent=0;

const messages=[

"Preparing Birthday Edition...",

"Downloading Memories...",

"Installing Love...",

"Optimizing Happiness...",

"Finalizing Update..."

];

installStatus.innerHTML=messages[0];

const install=setInterval(()=>{

percent++;

installFill.style.width=percent+"%";

installPercent.innerHTML=percent+"%";

const circumference=515;

const offset=circumference-(percent/100)*circumference;

circleProgress.style.strokeDashoffset=offset;

if(percent===20){

installStatus.innerHTML=messages[1];

}

if(percent===45){

installStatus.innerHTML=messages[2];

}

if(percent===70){

installStatus.innerHTML=messages[3];

}

if(percent===90){

installStatus.innerHTML=messages[4];

}

if(percent>=100){

clearInterval(install);

loveFill.style.width="100%";

setTimeout(()=>{

showScreen(matchScreen);

startMatch();

},800);

}

},45);

}

// ==========================
// MATCH
// ==========================

function startMatch(){

setTimeout(()=>{

showScreen(restartScreen);

startRestart();

},2800);

}

// ==========================
// RESTART
// ==========================

function startRestart(){

let percent=0;

const restart=setInterval(()=>{

percent+=2;

restartFill.style.width=percent+"%";

if(percent>=100){

clearInterval(restart);

setTimeout(()=>{

showScreen(homeScreen);

},600);

}

},40);

}

// =========================================================
// PREMIUM SCRIPT
// PART 2
// =========================================================

// ======================================
// HOME APPS
// ======================================

const messagesApp=document.getElementById("messagesApp");
const galleryApp=document.getElementById("galleryApp");
const musicApp=document.getElementById("musicApp");
const birthdayApp=document.getElementById("birthdayApp");
const settingsApp=document.getElementById("settingsApp");

// ======================================
// BACK BUTTONS
// ======================================

const messagesBack=document.getElementById("messagesBack");
const galleryBack=document.getElementById("galleryBack");
const musicBack=document.getElementById("musicBack");
const birthdayBack=document.getElementById("birthdayBack");
const settingsBack=document.getElementById("settingsBack");

// ======================================
// OPEN APPS
// ======================================

messagesApp.onclick=()=>{

showScreen(messagesScreen);

loadMessages();

};

galleryApp.onclick=()=>{

showScreen(galleryScreen);

};

musicApp.onclick=()=>{

showScreen(musicScreen);

};

birthdayApp.onclick=()=>{

showScreen(birthdayScreen);

};

settingsApp.onclick=()=>{

showScreen(settingsScreen);

};

// ======================================
// BACK
// ======================================

messagesBack.onclick=()=>showScreen(homeScreen);

galleryBack.onclick=()=>showScreen(homeScreen);

birthdayBack.onclick=()=>showScreen(homeScreen);

settingsBack.onclick=()=>showScreen(homeScreen);

musicBack.onclick=()=>{

player.pause();

playBtn.innerHTML="▶";

showScreen(homeScreen);

};

// ======================================
// MESSAGES
// ======================================

const birthdayMessages=[

"Happy Birthday, Hubby! ❤️🎂",

"It's finally your special day.",

"I built this Galaxy S26 just for you.",

"I hope every screen reminds you how much I love you.",

"I'm proud of everything you've achieved.",

"I'll always be your number one supporter.",

"Happy Birthday, my love. ❤️",

"Forever yours,\nCristel Joy"

];

function loadMessages(){

const area=document.getElementById("chatArea");

area.innerHTML="";

let index=0;

function send(){

if(index>=birthdayMessages.length){

return;

}

const bubble=document.createElement("div");

bubble.className="message";

bubble.innerHTML=birthdayMessages[index];

area.appendChild(bubble);

area.scrollTop=area.scrollHeight;

index++;

setTimeout(send,900);

}

send();

}

// ======================================
// MUSIC PLAYER
// ======================================

const player=document.getElementById("player");

const playBtn=document.getElementById("playBtn");

const musicFill=document.getElementById("musicFill");

const duration=document.getElementById("duration");

playBtn.onclick=()=>{

if(player.paused){

player.play();

playBtn.innerHTML="❚❚";

}else{

player.pause();

playBtn.innerHTML="▶";

}

};

player.addEventListener("loadedmetadata",()=>{

const mins=Math.floor(player.duration/60);

let secs=Math.floor(player.duration%60);

if(secs<10){

secs="0"+secs;

}

duration.innerHTML=mins+":"+secs;

});

player.addEventListener("timeupdate",()=>{

const percent=

(player.currentTime/player.duration)*100;

musicFill.style.width=percent+"%";

});

// ======================================
// GALLERY
// ======================================

document.querySelectorAll(".galleryGrid img")

.forEach(image=>{

image.onclick=()=>{

const viewer=document.createElement("div");

viewer.style.position="fixed";

viewer.style.inset="0";

viewer.style.background="rgba(0,0,0,.92)";

viewer.style.display="flex";

viewer.style.justifyContent="center";

viewer.style.alignItems="center";

viewer.style.zIndex="9999";

viewer.innerHTML=`

<img
src="${image.src}"
style="max-width:92%;
max-height:92%;
border-radius:24px;">

`;

viewer.onclick=()=>{

viewer.remove();

};

document.body.appendChild(viewer);

};

});

// ======================================
// BIRTHDAY GIFT
// ======================================

const gift=document.getElementById("giftBox");

gift.onclick=()=>{

launchConfetti();

document.getElementById("birthdayContent").innerHTML=`

<h1 style="font-size:42px">

🎉 Happy Birthday!

</h1>

<img
src="us.JPEG"
style="width:240px;
height:240px;
object-fit:cover;
border-radius:30px;
margin:25px 0;
box-shadow:0 20px 45px rgba(0,0,0,.35);">

<p style="line-height:2">

Happy 22nd Birthday,
Hubby ❤️

I hope this little Galaxy S26
makes you smile.

Thank you for loving me.

Thank you for choosing me.

I'll always be proud of you.

I'll always be your home.

I love you so much.

Forever yours,

Cristel Joy ❤️

</p>

`;

};

// ======================================
// CONFETTI
// ======================================

function launchConfetti(){

const colors=[

"#5ea8ff",

"#ff4d6d",

"#ffd54f",

"#ffffff",

"#7dd3fc"

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

`rotate(${Math.random()*360}deg)`;

document.body.appendChild(piece);

setTimeout(()=>{

piece.remove();

},4500);

}

}

// ======================================
// FINISH
// ======================================

console.clear();

console.log("%cGalaxy S26 Birthday Edition Loaded ❤️",

"color:#5ea8ff;font-size:18px;font-weight:bold;");