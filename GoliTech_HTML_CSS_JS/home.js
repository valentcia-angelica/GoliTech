const bar = document.getElementById('bar');
const times = document.getElementById('times');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(times){
    times.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// Scroll Category

let currentScroll = 0;
let scrollAmount = 170;

const sCont = document.querySelector(".box");
const hScroll = document.querySelector(".horizontal-scroll");
const left = document.querySelector("#scroll-left");
const right = document.querySelector("#scroll-right");

let maxSxroll = -sCont.offsetWidth + hScroll.offsetWidth;

function scrollHorizontal(val){
    currentScroll += (val * scrollAmount);

    if(currentScroll >= 0){
        currentScroll = 0;
        left.style.opacity = "0";
    }else{
        left.style.opacity = "1";
    }

    if(currentScroll <= maxSxroll){
        currentScroll = maxSxroll;
        right.style.opacity = "0";
    }else{
        right.style.opacity = "1";
    }

    sCont.style.left = currentScroll + "px";
}