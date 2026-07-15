/* ===================================
GOOGLE FONT
=================================== */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

/* ===================================
RESET
=================================== */

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

body{

background:#040816;
overflow:hidden;
color:white;

}

/* ===================================
BACKGROUND
=================================== */

.background{

position:fixed;
inset:0;

background:
linear-gradient(rgba(4,8,22,.70),rgba(4,8,22,.90)),
url("wallpaper.png") center center/cover no-repeat;

z-index:-2;

}

.background::after{

content:"";

position:absolute;
inset:0;

backdrop-filter:blur(18px);

}

/* ===================================
SCREEN
=================================== */

.screen{

position:absolute;

inset:0;

display:none;

justify-content:center;

align-items:center;

flex-direction:column;

padding:30px;

}

.screen.active{

display:flex;

animation:fade .7s;

}

/* ===================================
LOCK SCREEN
=================================== */

.statusBar{

position:absolute;

top:18px;

width:100%;

padding:0 25px;

display:flex;

justify-content:space-between;

font-size:14px;

opacity:.9;

}

.lockContent{

text-align:center;

}

#clock{

font-size:68px;

font-weight:700;

letter-spacing:2px;

}

#date{

margin-top:10px;

font-size:18px;

opacity:.8;

}

.heart{

font-size:58px;

margin:35px 0 20px;

animation:beat 1.5s infinite;

}

.lockContent h2{

font-size:34px;

margin-bottom:12px;

}

.lockContent p{

font-size:18px;

line-height:1.7;

opacity:.9;

}

/* ===================================
UNLOCK
=================================== */

.unlock{

position:absolute;

bottom:35px;

text-align:center;

font-size:15px;

animation:float 2s infinite;

opacity:.85;

}

.swipeLine{

width:90px;

height:6px;

border-radius:20px;

background:white;

margin:auto auto 12px;

}

/* ===================================
GLASS CARD
=================================== */

.glass{

width:100%;

max-width:380px;

background:rgba(255,255,255,.08);

backdrop-filter:blur(18px);

border:1px solid rgba(255,255,255,.15);

border-radius:28px;

padding:30px;

box-shadow:

0 10px 35px rgba(0,0,0,.35);

}

/* ===================================
HEADINGS
=================================== */

.glass h2{

text-align:center;

margin-bottom:12px;

font-size:28px;

}

.glass p{

text-align:center;

opacity:.85;

line-height:1.6;

}

/* ===================================
LIST
=================================== */

.glass ul{

margin:30px 0;

}

.glass li{

list-style:none;

padding:10px 0;

font-size:16px;

}

/* ===================================
BUTTON
=================================== */

button{

width:100%;

padding:16px;

margin-top:10px;

border:none;

border-radius:18px;

font-size:17px;

font-weight:600;

cursor:pointer;

color:white;

background:#3b82f6;

transition:.3s;

}

button:hover{

transform:translateY(-2px);

}

button:active{

transform:scale(.98);

}

/* ===================================
MOBILE
=================================== */

@media(max-width:480px){

#clock{

font-size:58px;

}

.lockContent h2{

font-size:28px;

}

.lockContent p{

font-size:16px;

}

.glass{

padding:24px;

}

}

/* ===================================
ANIMATION
=================================== */

@keyframes beat{

0%,100%{

transform:scale(1);

}

50%{

transform:scale(1.12);

}

}

@keyframes float{

0%,100%{

transform:translateY(0);

}

50%{

transform:translateY(-8px);

}

}

@keyframes fade{

from{

opacity:0;

transform:scale(.97);

}

to{

opacity:1;

transform:scale(1);

}

}

/* ===================================
FACE RECOGNITION
=================================== */

.scanner{

width:120px;
height:120px;

margin:auto;

border-radius:50%;

border:4px solid #4ea8ff;

box-shadow:
0 0 30px #4ea8ff;

animation:pulse 2s infinite;

}

/* ===================================
PROGRESS BAR
=================================== */

.progress{

width:100%;
height:10px;

background:rgba(255,255,255,.15);

border-radius:30px;

overflow:hidden;

margin:30px 0;

}

#faceBar,
#installBar{

width:0%;

height:100%;

background:linear-gradient(90deg,#4ea8ff,#79c2ff);

border-radius:30px;

transition:.4s;

}

#faceStatus{

display:block;

text-align:center;

margin-top:10px;

font-weight:500;

}

/* ===================================
PROFILE
=================================== */

.profile{

width:140px;
height:140px;

object-fit:cover;

border-radius:50%;

display:block;

margin:0 auto 20px;

border:4px solid white;

box-shadow:
0 0 30px rgba(255,255,255,.4);

}

.loveProgress{

width:100%;
height:12px;

background:rgba(255,255,255,.15);

border-radius:30px;

overflow:hidden;

margin:25px 0;

}

.loveFill{

width:100%;
height:100%;

background:linear-gradient(90deg,#ff4d88,#ff87b2);

animation:loveFill 2s;

}

/* ===================================
BOOT SCREEN
=================================== */

.boot{

text-align:center;

}

.boot h1{

font-size:42px;

font-weight:700;

letter-spacing:2px;

margin-bottom:15px;

}

.boot p{

opacity:.85;

margin-bottom:40px;

}

.loadingLine{

width:250px;

height:6px;

background:rgba(255,255,255,.15);

border-radius:30px;

overflow:hidden;

margin:auto;

}

.loadingFill{

width:0%;

height:100%;

background:#4ea8ff;

animation:bootLoad 3s forwards;

}

/* ===================================
ANIMATIONS
=================================== */

@keyframes pulse{

0%{

transform:scale(1);

}

50%{

transform:scale(1.08);

}

100%{

transform:scale(1);

}

}

@keyframes loveFill{

from{

width:0%;

}

to{

width:100%;

}

}

@keyframes bootLoad{

from{

width:0%;

}

to{

width:100%;

}

}

/* ===================================
HOME SCREEN
=================================== */

#homeScreen{

background:
linear-gradient(rgba(4,8,22,.45),rgba(4,8,22,.60)),
url("us.jpeg") center center/cover no-repeat;

justify-content:flex-start;

}

/* Status */

.phoneStatus{

width:100%;

display:flex;

justify-content:space-between;

padding:15px 5px;

font-size:14px;

font-weight:600;

}

/* Clock */

.phoneTime{

margin-top:30px;

font-size:64px;

font-weight:700;

text-align:center;

}

.phoneDate{

text-align:center;

opacity:.85;

margin-bottom:50px;

}

/* Apps */

.apps{

width:100%;

display:grid;

grid-template-columns:repeat(3,1fr);

gap:30px;

padding:0 15px;

}

/* Icon */

.app{

display:flex;

flex-direction:column;

align-items:center;

cursor:pointer;

transition:.3s;

}

.app:hover{

transform:scale(1.08);

}

.icon{

width:72px;

height:72px;

border-radius:22px;

display:flex;

justify-content:center;

align-items:center;

font-size:34px;

background:

linear-gradient(135deg,#5ca9ff,#2f6cff);

box-shadow:

0 10px 25px rgba(0,0,0,.35);

backdrop-filter:blur(15px);

}

.app span{

margin-top:10px;

font-size:14px;

text-align:center;

}