// ==========================
// ELEMENTS
// ==========================

const lockScreen = document.getElementById("lockScreen");
const faceScreen = document.getElementById("faceScreen");
const updateScreen = document.getElementById("updateScreen");

const faceBar = document.getElementById("faceBar");
const faceStatus = document.getElementById("faceStatus");

const clock = document.querySelector(".clock");
const topTime = document.getElementById("time");
const date = document.querySelector(".date");

const installBtn = document.getElementById("installBtn");

// ==========================
// CHANGE SCREEN
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

    setTimeout(startFaceRecognition,500);

});

// ==========================
// FACE ID
// ==========================

function startFaceRecognition(){

    faceBar.style.width="100%";

    setTimeout(()=>{

        faceStatus.innerHTML="✔ Face Recognized";

    },3000);

    setTimeout(()=>{

        clock.innerHTML="12:00 AM";
        topTime.innerHTML="12:00 AM";

        date.innerHTML="Thursday, July 16";

    },3300);

    setTimeout(()=>{

        faceStatus.innerHTML="🎉 Happy Birthday, Raymart!";

    },4200);

    setTimeout(()=>{

        showScreen(updateScreen);

    },5600);

}

// ==========================
// INSTALL BUTTON
// ==========================

installBtn.addEventListener("click", () => {

    alert("Installing RaymartOS 22...");

});