/*=========================================================
 GALAXY S26 ❤️ RAYMART EDITION
 Created by Cristel Joy
=========================================================*/

"use strict";

/*=========================================================
DOM ELEMENTS
=========================================================*/

const screens = document.querySelectorAll(".screen");
const appScreens = document.querySelectorAll(".app-screen");

const bootScreen = document.getElementById("bootScreen");
const lockScreen = document.getElementById("lockScreen");
const faceUnlock = document.getElementById("faceUnlock");
const birthdayNotification = document.getElementById("birthdayNotification");
const softwareUpdate = document.getElementById("softwareUpdate");
const installScreen = document.getElementById("installScreen");
const perfectMatch = document.getElementById("perfectMatch");
const restartScreen = document.getElementById("restartScreen");
const homeScreen = document.getElementById("homeScreen");

const unlockButton = document.getElementById("unlockButton");

const openNotification =
document.getElementById("openNotification");

const dismissNotification =
document.getElementById("dismissNotification");

const installUpdate =
document.getElementById("installUpdate");

const restartSystem =
document.getElementById("restartSystem");

const bootProgress =
document.getElementById("bootProgress");

const bootStatus =
document.getElementById("bootStatus");

const scannerText =
document.getElementById("scannerText");

const installCircle =
document.getElementById("installCircle");

const installPercentage =
document.getElementById("installPercentage");

const installStatus =
document.getElementById("installStatus");

const installSteps =
document.querySelectorAll(".install-step");

const loveProgress =
document.getElementById("loveProgress");

const loveValue =
document.getElementById("loveValue");

const homeClock =
document.getElementById("homeClock");

const homeDate =
document.getElementById("homeDate");

const lockClock =
document.getElementById("lockClock");

const lockDate =
document.getElementById("lockDate");

const audioPlayer =
document.getElementById("audioPlayer");

/*=========================================================
GLOBAL VARIABLES
=========================================================*/

let installPercent = 0;

let bootPercent = 0;

let currentScreen = "boot";

let isUnlocked = false;

/*=========================================================
UTILITIES
=========================================================*/

function hideAllScreens(){

    screens.forEach(screen=>{

        screen.classList.remove("active");

    });

}

function hideAllApps(){

    appScreens.forEach(app=>{

        app.classList.remove("active");

    });

}

function showScreen(screen){

    hideAllScreens();

    screen.classList.add("active");

}

function showApp(app){

    hideAllApps();

    app.classList.add("active");

}

function closeApps(){

    hideAllApps();

    homeScreen.classList.add("active");

}

/*=========================================================
LIVE CLOCK
=========================================================*/

function updateClock(){

    const now = new Date();

    const time =
        now.toLocaleTimeString([],{

            hour:"2-digit",

            minute:"2-digit"

        });

    const date =
        now.toLocaleDateString([],{

            weekday:"long",

            month:"long",

            day:"numeric"

        });

    if(homeClock){

        homeClock.textContent = time;

    }

    if(lockClock){

        lockClock.textContent = time;

    }

    if(homeDate){

        homeDate.textContent = date;

    }

    if(lockDate){

        lockDate.textContent = date;

    }

}

updateClock();

setInterval(updateClock,1000);

/*=========================================================
BOOT SEQUENCE
=========================================================*/

const bootMessages=[

    "Initializing Birthday Experience...",

    "Loading Memories...",

    "Preparing Love...",

    "Starting Raymart Edition..."

];

function bootSequence(){

    const timer=setInterval(()=>{

        bootPercent++;

        bootProgress.style.width=
            bootPercent+"%";

        if(bootPercent<25){

            bootStatus.textContent=
            bootMessages[0];

        }

        else if(bootPercent<50){

            bootStatus.textContent=
            bootMessages[1];

        }

        else if(bootPercent<75){

            bootStatus.textContent=
            bootMessages[2];

        }

        else{

            bootStatus.textContent=
            bootMessages[3];

        }

        if(bootPercent>=100){

            clearInterval(timer);

            setTimeout(()=>{

                showScreen(lockScreen);

            },700);

        }

    },40);

}

/*=========================================================
LOCK SCREEN
=========================================================*/

if(unlockButton){

    unlockButton.addEventListener("click",()=>{

        if(isUnlocked) return;

        isUnlocked = true;

        showScreen(faceUnlock);

        startFaceUnlock();

    });

}

/*=========================================================
FACE UNLOCK
=========================================================*/

function startFaceUnlock(){

    scannerText.textContent = "Scanning Face...";

    setTimeout(()=>{

        scannerText.textContent = "Analyzing...";

    },1200);

    setTimeout(()=>{

        scannerText.textContent = "Face Recognized ❤️";

    },2400);

    setTimeout(()=>{

        showScreen(birthdayNotification);

    },3400);

}

/*=========================================================
BIRTHDAY NOTIFICATION
=========================================================*/

if(openNotification){

    openNotification.addEventListener("click",()=>{

        showScreen(softwareUpdate);

    });

}

if(dismissNotification){

    dismissNotification.addEventListener("click",()=>{

        showScreen(homeScreen);

    });

}

/*=========================================================
SOFTWARE UPDATE
=========================================================*/

if(installUpdate){

    installUpdate.addEventListener("click",()=>{

        showScreen(installScreen);

        startInstallation();

    });

}

/*=========================================================
INSTALLATION
=========================================================*/

const installMessages=[

    "Preparing Memories...",

    "Downloading Love...",

    "Installing Happiness...",

    "Building Forever...",

    "Almost Ready..."

];

function activateInstallStep(index){

    installSteps.forEach((step,i)=>{

        step.classList.toggle("active",i===index);

    });

}

function updateInstallCircle(percent){

    if(!installCircle) return;

    const circumference = 578;

    const offset = circumference - (percent / 100) * circumference;

    installCircle.style.strokeDashoffset = offset;

}

function startInstallation(){

    installPercent = 0;

    activateInstallStep(0);

    const timer = setInterval(()=>{

        installPercent++;

        installPercentage.textContent = installPercent + "%";

        updateInstallCircle(installPercent);

        if(installPercent < 20){

            installStatus.textContent = installMessages[0];
            activateInstallStep(0);

        }else if(installPercent < 40){

            installStatus.textContent = installMessages[1];
            activateInstallStep(1);

        }else if(installPercent < 60){

            installStatus.textContent = installMessages[2];
            activateInstallStep(2);

        }else if(installPercent < 80){

            installStatus.textContent = installMessages[3];
            activateInstallStep(3);

        }else{

            installStatus.textContent = installMessages[4];
            activateInstallStep(4);

        }

        if(installPercent >= 100){

            clearInterval(timer);

            setTimeout(()=>{

                showScreen(perfectMatch);

                startLoveMeter();

            },900);

        }

    },65);

}

/*=========================================================
PERFECT MATCH
=========================================================*/

function startLoveMeter(){

    let value = 0;

    const timer = setInterval(()=>{

        value++;

        loveProgress.style.width = value + "%";

        loveValue.textContent = value + "%";

        if(value >= 100){

            clearInterval(timer);

        }

    },18);

}

if(restartSystem){

    restartSystem.addEventListener("click",()=>{

        showScreen(restartScreen);

        startRestart();

    });

}

/*=========================================================
RESTART SEQUENCE
=========================================================*/

function startRestart(){

    setTimeout(()=>{

        showScreen(homeScreen);

        currentScreen = "home";

    },3000);

}

/*=========================================================
HOME SCREEN
=========================================================*/

const appIcons =
document.querySelectorAll(".app-icon");

const dockIcons =
document.querySelectorAll(".dock-icon[data-app]");

const backButtons =
document.querySelectorAll("[data-back]");

const appMap = {

    messagesApp:
        document.getElementById("messagesApp"),

    galleryApp:
        document.getElementById("galleryApp"),

    musicApp:
        document.getElementById("musicApp"),

    memoriesApp:
        document.getElementById("memoriesApp"),

    birthdayApp:
        document.getElementById("birthdayApp"),

    settingsApp:
        document.getElementById("settingsApp")

};

/*=========================================================
APP OPEN
=========================================================*/

function openApplication(appId){

    const app = appMap[appId];

    if(!app) return;

    hideAllApps();

    animateOpen(app);

    app.classList.add("active");

    switch(appId){

        case "messagesApp":

            loadMessages();

            break;

        case "musicApp":

            initializeMusic();

            break;

        case "galleryApp":

            initializeGallery();

            break;

        case "birthdayApp":

            initializeBirthday();

            break;

    }

}

appIcons.forEach(icon=>{

    icon.addEventListener("click",()=>{

        openApplication(icon.dataset.app);

    });

});

dockIcons.forEach(icon=>{

    icon.addEventListener("click",()=>{

        openApplication(icon.dataset.app);

    });

});

/*=========================================================
BACK BUTTONS
=========================================================*/

backButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        closeApps();

    });

});

/*=========================================================
HOME SHORTCUTS
=========================================================*/

document.addEventListener("keydown",(event)=>{

    if(event.key === "Escape"){

        closeApps();

    }

});

/*=========================================================
APP TRANSITIONS
=========================================================*/

Object.values(appMap).forEach(app=>{

    if(!app) return;

    app.addEventListener("animationend",()=>{

        app.classList.remove("fade-in");

    });

});

function animateOpen(app){

    app.classList.remove("fade-in");

    void app.offsetWidth;

    app.classList.add("fade-in");

}


/*=========================================================
HOME INITIAL STATE
=========================================================*/

hideAllApps();

/*=========================================================
MESSAGES
=========================================================*/

const typingIndicator =
document.getElementById("typingIndicator");

const messageList =
document.getElementById("messageList");

const messageSequence=[

{
text:"Happy Birthday, Hubby! ❤️",
time:"12:00 AM",
status:"Delivered",
type:"received"
},

{
text:"I made something special just for you.",
time:"12:01 AM",
status:"Seen",
type:"sent"
},

{
text:"I hope this little Galaxy phone makes you smile today. 🥹❤️",
time:"12:02 AM",
status:"Seen",
type:"received"
},

{
text:"I love you so much, Raymart.",
time:"12:03 AM",
status:"Seen",
type:"sent"
}

];

let messagesLoaded=false;

function loadMessages(){

    if(messagesLoaded) return;

    messagesLoaded=true;

    let index=0;

    function nextMessage(){

        if(index>=messageSequence.length){

            if(typingIndicator){

                typingIndicator.style.display="none";

            }

            return;

        }

        const msg=messageSequence[index];

        if(typingIndicator){

            typingIndicator.style.display="flex";

        }

        setTimeout(()=>{

            const article=document.createElement("article");

            article.className=`message ${msg.type}`;

            article.innerHTML=`

<div class="bubble">

${msg.text}

</div>

<span class="message-time">

${msg.time}

</span>

<span class="message-status">

${msg.status}

</span>

`;

            if(typingIndicator){

                messageList.insertBefore(

                    article,

                    typingIndicator

                );

            }

            index++;

            nextMessage();

        },1300);

    }

    nextMessage();

}

/*=========================================================
GALLERY
=========================================================*/

const galleryItems=
document.querySelectorAll(".gallery-item img");

const imageViewer=
document.getElementById("imageViewer");

const viewerImage=
document.getElementById("viewerImage");

const closeViewer=
document.getElementById("closeViewer");

galleryItems.forEach(image=>{

    image.addEventListener("click",()=>{

        viewerImage.src=image.src;

        imageViewer.classList.add("active");

    });

});

if(closeViewer){

    closeViewer.addEventListener("click",()=>{

        imageViewer.classList.remove("active");

    });

}

if(imageViewer){

    imageViewer.addEventListener("click",(event)=>{

        if(event.target===imageViewer){

            imageViewer.classList.remove("active");

        }

    });

}

/*=========================================================
MUSIC PLAYER
=========================================================*/

const playPause =
document.getElementById("playPause");

const musicProgress =
document.getElementById("musicProgressBar");

const currentMusicTime =
document.getElementById("currentMusicTime");

const totalMusicTime =
document.getElementById("totalMusicTime");

let musicInitialized = false;

function initializeMusic(){

    if(musicInitialized) return;

    musicInitialized = true;

    if(!audioPlayer) return;

    audioPlayer.load();

}

if(audioPlayer){

    audioPlayer.addEventListener("loadedmetadata",()=>{

        totalMusicTime.textContent =

            formatTime(audioPlayer.duration);

    });

    audioPlayer.addEventListener("timeupdate",()=>{

        const percent =

            (audioPlayer.currentTime /

            audioPlayer.duration) * 100;

        musicProgress.style.width =

            percent + "%";

        currentMusicTime.textContent =

            formatTime(audioPlayer.currentTime);

    });

}

if(playPause){

    playPause.addEventListener("click",()=>{

        if(audioPlayer.paused){

            audioPlayer.play();

            playPause.innerHTML=`

<svg viewBox="0 0 24 24" fill="none">

<path d="M9 5H11V19H9V5ZM13 5H15V19H13V5Z"/>

</svg>

`;

        }else{

            audioPlayer.pause();

            playPause.innerHTML=`

<svg viewBox="0 0 24 24" fill="none">

<path d="M8 5L19 12L8 19V5"/>

</svg>

`;

        }

    });

}

/*=========================================================
TIME FORMAT
=========================================================*/

function formatTime(seconds){

    if(isNaN(seconds))

        return "0:00";

    const minutes =

        Math.floor(seconds / 60);

    const secs =

        Math.floor(seconds % 60);

    return `${minutes}:${secs.toString().padStart(2,"0")}`;

}

/*=========================================================
GALLERY
=========================================================*/

let galleryInitialized=false;

function initializeGallery(){

    if(galleryInitialized) return;

    galleryInitialized=true;

}

/*=========================================================
BIRTHDAY SURPRISE
=========================================================*/

const giftBox =
document.getElementById("giftBox");

const loveLetter =
document.getElementById("loveLetter");

let birthdayOpened=false;

function initializeBirthday(){

    if(birthdayOpened) return;

}

if(giftBox){

    giftBox.addEventListener("click",()=>{

        if(birthdayOpened) return;

        birthdayOpened=true;

        giftBox.style.display="none";

        loveLetter.classList.remove("hidden");

        launchConfetti();

    });

}

/*=========================================================
CONFETTI
=========================================================*/

const confettiContainer =
document.getElementById("confettiContainer");

function launchConfetti(){

    if(!confettiContainer) return;

    confettiContainer.innerHTML="";

    const colors=[

        "#4D8CFF",
        "#8EB8FF",
        "#FF6B9A",
        "#FFD166",
        "#7CFFB2",
        "#FFFFFF"

    ];

    for(let i=0;i<120;i++){

        const piece=document.createElement("div");

        piece.className="confetti";

        piece.style.left=Math.random()*100+"%";

        piece.style.top="-20px";

        piece.style.background=

            colors[Math.floor(Math.random()*colors.length)];

        piece.style.animationDelay=

            Math.random()*0.8+"s";

        piece.style.animationDuration=

            3+Math.random()*2+"s";

        piece.style.transform=

            `rotate(${Math.random()*360}deg)`;

        confettiContainer.appendChild(piece);

    }

    setTimeout(()=>{

        confettiContainer.innerHTML="";

    },5500);

}

/*=========================================================
SETTINGS
=========================================================*/

const batteryLevel =
document.getElementById("batteryLevel");

const loveLevel =
document.getElementById("loveLevel");

function initializeSettings(){

    if(batteryLevel){

        batteryLevel.textContent="100%";

    }

    if(loveLevel){

        loveLevel.textContent="∞ ❤️";

    }

}

/*=========================================================
KEYBOARD SHORTCUTS
=========================================================*/

document.addEventListener("keydown",(event)=>{

    if(event.key==="Escape"){

        if(imageViewer.classList.contains("active")){

            imageViewer.classList.remove("active");

            return;

        }

        closeApps();

    }

});

/*=========================================================
INITIALIZATION
=========================================================*/

window.addEventListener("load",()=>{

    updateClock();

    initializeSettings();

    bootSequence();

});

/*=========================================================
AUTO PLAY AFTER USER INTERACTION
=========================================================*/

document.addEventListener("click",()=>{

    if(audioPlayer && audioPlayer.paused){

        audioPlayer.load();

    }

},{once:true});

/*=========================================================
END OF SCRIPT
=========================================================*/

