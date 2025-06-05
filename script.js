let codebtn = document.querySelector(".codebtn");
let qrcode = document.querySelector(".qrcode");

codebtn.addEventListener('click',()=>{
    qrcode.classList.toggle('active')
});


let menubtn = document.querySelector('.menubar-btn');
let menulist = document.querySelector('.menubar-list');
let xbar = document.querySelector('.xmark');
let overlaythree = document.querySelector('.overlay-three');
let menucontact = document.querySelector('.menubar-contact');
let menuproject = document.querySelector('.menubar-projects');
let menuskills = document.querySelector('.menubar-skills');
let menuabout = document.querySelector('.menubar-about');
let menuhome = document.querySelector('.menubar-home');

menubtn.addEventListener('click',()=>{
    menulist.classList.toggle('active')
    xbar.classList.toggle('active')
    menubtn.classList.toggle('active')
    overlaythree.classList.toggle('active')
});

xbar.addEventListener('click',()=>{
    menulist.classList.toggle('active')
    xbar.classList.toggle('active')
    menubtn.classList.toggle('active')
    overlaythree.classList.toggle('active')
});
overlaythree.addEventListener('click',()=>{
    overlaythree.classList.toggle('active')
    menulist.classList.toggle('active')
    xbar.classList.toggle('active')
    menubtn.classList.toggle('active')
});
menucontact.addEventListener('click',()=>{
    overlaythree.classList.toggle('active')
    menulist.classList.toggle('active')
    xbar.classList.toggle('active')
    menubtn.classList.toggle('active')
});
menuproject.addEventListener('click',()=>{
    overlaythree.classList.toggle('active')
    menulist.classList.toggle('active')
    xbar.classList.toggle('active')
    menubtn.classList.toggle('active')
});
menuskills.addEventListener('click',()=>{
    overlaythree.classList.toggle('active')
    menulist.classList.toggle('active')
    xbar.classList.toggle('active')
    menubtn.classList.toggle('active')
});
menuabout.addEventListener('click',()=>{
    overlaythree.classList.toggle('active')
    menulist.classList.toggle('active')
    xbar.classList.toggle('active')
    menubtn.classList.toggle('active')
});
menuhome.addEventListener('click',()=>{
    overlaythree.classList.toggle('active')
    menulist.classList.toggle('active')
    xbar.classList.toggle('active')
    menubtn.classList.toggle('active')
});




let sclbtn = document.querySelector(".sclabt-btn");
let showbar = document.querySelector(".scl-viewone");
let sclcancle = document.querySelector(".scl-x");
let overscreen = document.querySelector(".overlay");

sclbtn.addEventListener('click',()=>{
    showbar.classList.toggle('active')
    overscreen.classList.toggle('active')
});
overscreen.addEventListener('click',()=>{
    overscreen.classList.toggle('active')
    showbar.classList.toggle('active')
});

sclcancle.addEventListener('click',()=>{
    showbar.classList.toggle('active')
    overscreen.classList.toggle('active')
});

let degreebtn = document.querySelector('.degree-btn');
let degreebar = document.querySelector('.degree-viewone');
let degreecancle = document.querySelector(".degree-x");
let overscrtwo = document.querySelector('.overlay-two')

overscrtwo.addEventListener('click',()=>{
    overscrtwo.classList.toggle('active')
    degreebar.classList.toggle('active')
});

degreebtn.addEventListener('click',()=>{
    degreebar.classList.toggle('active')
    overscrtwo.classList.toggle('active')
});
degreecancle.addEventListener('click',()=>{
    degreebar.classList.toggle('active')
    overscrtwo.classList.toggle('active')
});




