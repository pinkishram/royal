let serviceBoxS = document.querySelector('.service-box-s');

const textLine = document.querySelector('.p-head-s');
const text = 'bring your idea for experts';
indexText = 0;

function writetext() {
    textLine.innerText = text.slice(0, indexText);

    if (indexText > text.length - 1) {
        clearInterval(intertext);
    }
    indexText++;
}
const intertext = setInterval(writetext, 200);

let barClick = document.querySelector('.fa-bars');

barClick.addEventListener('click', () => {
    document.querySelector('.hide-span').classList.toggle('hide-elm-s');
    document.querySelector('.list-m').classList.toggle('show-list');
});

// observe elements//////////////////////////

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('glow');
        }
    });
});

const elements = document.querySelectorAll('.hide');
elements.forEach((element) => {
    observer.observe(element);
});

// observe elements//////////////////////////

// service page///////
function mouseOverActive_s() {
    serviceBoxS.classList.remove('trans-service-s');
    serviceBoxS.classList.add('op-service-s');
}

function mouseOutActive_s() {
    serviceBoxS.classList.add('trans-service-s');
    serviceBoxS.classList.remove('op-service-s');
}
// service page///////

// cabinets java /////////////////
let direction = document.querySelector('.fas fa-chevron-down');

let jSlide = document.querySelectorAll('.j-slide');
let minus = document.querySelectorAll('.minus');
jSlide[0].style.maxHeight = '160px';
minus[0].classList.add('fa-plus-square');

function resetExpand() {
    for (let i = 0; i < jSlide.length; i++) {
        jSlide[i].style.maxHeight = '0px';
    }
    for (let i = 0; i < jSlide.length; i++) {
        minus[i].classList.remove('fa-plus-square');
        minus[i].classList.add('fa-minus-square');
    }
}

function expandquery(x) {
    resetExpand();
    jSlide[x - 1].style.maxHeight = '160px';
    minus[x - 1].classList.toggle('fa-plus-square');
}

// cabinets java /////////////////
