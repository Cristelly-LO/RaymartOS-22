// ==========================
// SCREENS
// ==========================

const lockScreen = document.getElementById("lockScreen");
const faceScreen = document.getElementById("faceScreen");
const updateScreen = document.getElementById("updateScreen");
const installScreen = document.getElementById("installScreen");
const profileScreen = document.getElementById("profileScreen");

// ==========================
// ELEMENTS
// ==========================

const faceProgress = document.getElementById("faceProgress");
const installProgress = document.getElementById("installProgress");

const faceText = document.getElementById("faceText");
const installText = document.getElementById("installText");

const installBtn = document.getElementById("installBtn");
const continueBtn = document.getElementById("continueBtn");

const clock = document.getElementById("clock");
const date = document.getElementById("date");

// ==========================
// SHOW SCREEN
// ==========================

function showScreen(screen){

    document.querySelectorAll(".screen").forEach(s=>{
        s.classList.remove("active");
    });

    screen.classList.add("active");

}

// ==========================
// LOCK SCREEN
// ==========================

lockScreen.addEventListener("click",()=>{

    showScreen(faceScreen);

    startFace();

});

// ==========================
// FACE RECOGNITION
// ==========================

function startFace(){

    let width = 0;

    const timer = setInterval(()=>{

        width += 2;

        faceProgress.style.width = width + "%";

        if(width >= 100){

            clearInterval(timer);

            faceText.innerHTML="✔ Face Recognized";

            setTimeout(()=>{

                clock.innerHTML="12:00 AM";

                date.innerHTML="Thursday, July 16";

            },800);

            setTimeout(()=>{

                showScreen(updateScreen);

            },1800);

        }

    },40);

}

// ==========================
// INSTALL
// ==========================

installBtn.addEventListener("click",()=>{

    showScreen(installScreen);

    startInstall();

});

// ==========================
// INSTALL ANIMATION
// ==========================

function startInstall(){

    let width=0;

    const messages=[

        "Preparing Birthday Update...",

        "Downloading Smiles...",

        "Collecting Memories...",

        "Installing Hugs...",

        "Searching for the Best Girlfriend...",

        "Perfect Match Found ❤️"

    ];

    let index=0;

    installText.innerHTML=messages[0];

    const timer=setInterval(()=>{

        width++;

        installProgress.style.width=width+"%";

        if(width==20){

            installText.innerHTML=messages[1];

        }

        if(width==40){

            installText.innerHTML=messages[2];

        }

        if(width==60){

            installText.innerHTML=messages[3];

        }

        if(width==80){

            installText.innerHTML=messages[4];

        }

        if(width==100){

            clearInterval(timer);

            installText.innerHTML=messages[5];

            setTimeout(()=>{

                showScreen(profileScreen);

            },1500);

        }

    },50);

}

// ==========================
// CONTINUE
// ==========================

continueBtn.addEventListener("click",()=>{

    alert("🎉 Happy Birthday Raymart! ❤️\n\nNext, we'll build the Home Screen.");

});