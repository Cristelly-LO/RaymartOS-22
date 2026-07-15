// ==============================
// SCREENS
// ==============================

const lockScreen=document.getElementById("lockScreen");
const faceScreen=document.getElementById("faceScreen");
const updateScreen=document.getElementById("updateScreen");
const installScreen=document.getElementById("installScreen");
const profileScreen=document.getElementById("profileScreen");
const bootScreen=document.getElementById("bootScreen");
const homeScreen=document.getElementById("homeScreen");

// ==============================
// ELEMENTS
// ==============================

const faceBar=document.getElementById("faceBar");
const installBar=document.getElementById("installBar");

const faceText=document.getElementById("faceText");
const installText=document.getElementById("installText");

const installBtn=document.getElementById("installBtn");

const clock=document.getElementById("clock");
const date=document.getElementById("date");

// ==============================
// SHOW SCREEN
// ==============================

function showScreen(screen){

document.querySelectorAll(".screen").forEach(item=>{

item.classList.remove("active");

});

screen.classList.add("active");

}

// ==============================
// LOCK SCREEN
// ==============================

lockScreen.addEventListener("click",()=>{

showScreen(faceScreen);

startFace();

});

// ==============================
// FACE RECOGNITION
// ==============================

function startFace(){

let width=0;

const timer=setInterval(()=>{

width+=2;

faceBar.style.width=width+"%";

if(width>=100){

clearInterval(timer);

faceText.innerHTML="✔ Face Recognized";

setTimeout(()=>{

clock.innerHTML="12:00 AM";

date.innerHTML="Thursday, July 16";

},700);

setTimeout(()=>{

showScreen(updateScreen);

},1700);

}

},40);

}

// ==============================
// UPDATE BUTTON
// ==============================

installBtn.addEventListener("click",()=>{

showScreen(installScreen);

startInstall();

});

// ==============================
// INSTALLATION
// ==============================

function startInstall(){

let percent=0;

const messages=[

"Preparing Birthday Update...",

"Downloading Smiles...",

"Collecting Memories...",

"Installing Happiness...",

"Searching for the Best Girlfriend...",

"Perfect Match Found ❤️"

];

installText.innerHTML=messages[0];

const timer=setInterval(()=>{

percent++;

installBar.style.width=percent+"%";

if(percent==20){

installText.innerHTML=messages[1];

}

if(percent==40){

installText.innerHTML=messages[2];

}

if(percent==60){

installText.innerHTML=messages[3];

}

if(percent==80){

installText.innerHTML=messages[4];

}

if(percent>=100){

clearInterval(timer);

installText.innerHTML=messages[5];

setTimeout(()=>{

showScreen(profileScreen);

startProfile();

},1200);

}

},45);

}

// ==============================
// PROFILE
// ==============================

function startProfile(){

setTimeout(()=>{

showScreen(bootScreen);

startBoot();

},3000);

}

// ==============================
// BOOT
// ==============================

function startBoot(){

setTimeout(()=>{

showScreen(homeScreen);

},3200);

}