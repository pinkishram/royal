// variables

let headTop = document.querySelector(".top-head");
let scroolBtn = document.querySelector(".scroll-top");
let activeeLink = document.querySelector(".activee");
let servicebox = document.querySelector(".service-box");
let serviceBoxS = document.querySelector(".service-box-s");

let viewLink = document.querySelectorAll(".view-link");
let leftArrow = document.querySelectorAll(".left-arrow");

// bars click
let barClick = document.querySelector(".fa-bars");

barClick.addEventListener("click", () => {
    document.querySelector(".hide").classList.toggle("hide-elm");
    document.querySelector(".list-m").classList.toggle("show-list");
});
// bars click

function mouseOverActive() {
    servicebox.classList.remove("trans-service");
    servicebox.classList.add("op-service");
}

function mouseOutActive() {
    servicebox.classList.add("trans-service");
    servicebox.classList.remove("op-service");
}

// scroll borttom

window.onscroll = function () {
    if (window.scrollY >= 250) {
        scroolBtn.style.top = `${93}vh`;
    } else {
        scroolBtn.style.top = `${-100}vh`;
    }
};
scroolBtn.addEventListener("click", () => {
    headTop.scrollIntoView({ behavior: "smooth", block: "start" });
});

// scroll bottom//

// second box //

let currentScrollPosition = 0;

const bodyWidth = document.body.offsetWidth;
const cardWidth = document.querySelector(".card ").offsetWidth;
const stest = document.querySelector(".testmonial-sub");

let scrollAmount = (6.56 * cardWidth - bodyWidth) / 5;
let maxScrolltest = 6.56 * -cardWidth + bodyWidth;

function myfunctiontest(v) {
    currentScrollPosition += v * scrollAmount;

    if (currentScrollPosition > 0) {
        currentScrollPosition = 0;
    }

    if (currentScrollPosition < maxScrolltest) {
        currentScrollPosition = maxScrolltest;
    }

    stest.style.transform = "translatex(" + currentScrollPosition + "px)";

    // sCont.style.left =  currentScrollPosition +"px";
}
// second box //

let currentScrollPositionn = 0;

const viewWidth = document.querySelector(".view").offsetWidth;
const sCont = document.querySelector(".view-cards");

let scrollAmountt = (7.63 * viewWidth - bodyWidth) / 6.5;
let maxScroll = 8.32 * -viewWidth + bodyWidth;

function myfunction(v) {
    currentScrollPositionn += v * scrollAmountt;

    if (currentScrollPositionn > 0) {
        currentScrollPositionn = 0;
    }

    if (currentScrollPositionn < maxScroll) {
        currentScrollPositionn = maxScroll;
    }
    sCont.style.transform = "translatex(" + currentScrollPositionn + "px)";
}

//  lightbox start elements///

function call(n) {
    document.addEventListener("keydown", move);

    document.documentElement.style.overflow = "hidden";

    let slidingHold = document.createElement("div");
    slidingHold.classList.add("sliding-section-hold");

    slidingHold.addEventListener("click", (e) => {
        if (e.target !== e.currentTarget) return;

        closeElement();
    });

    let newElment = document.createElement("div");
    newElment.classList.add("backsliding");

    let closeelment = document.createElement("div");
    closeelment.classList.add("closse");

    let secondElment = document.createElement("div");
    secondElment.classList.add("sliding-section");
    slidingHold.appendChild(closeelment);
    slidingHold.appendChild(secondElment);

    let mainDiv = document.querySelector(".main");

    mainDiv.insertBefore(slidingHold, mainDiv.childNodes[0]);
    mainDiv.insertBefore(newElment, mainDiv.childNodes[0]);

    //    box light element///
    let leftArrow = document.createElement("div");
    leftArrow.classList.add("left-arrow");
    leftArrow.id = "left-arrow";
    secondElment.appendChild(leftArrow);

    let leftArrow_sign = document.createElement("i");
    leftArrow_sign.classList.add("fas", "fa-caret-left");
    leftArrow.appendChild(leftArrow_sign);

    let rightArrow = document.createElement("div");
    rightArrow.classList.add("right-arrow");
    rightArrow.id = "right-arrow";
    secondElment.appendChild(rightArrow);

    let rightArrow_sign = document.createElement("i");
    rightArrow_sign.classList.add("fas", "fa-caret-right");
    rightArrow.appendChild(rightArrow_sign);

    let btn = document.createElement("button");
    btn.classList.add("slider-close");
    slidingHold.appendChild(btn);

    let btn_icon = document.createElement("div");
    btn_icon.classList.add("slider-close-icon");
    btn.appendChild(btn_icon);
    btn_icon.onclick = function () {
        closeElement();
    };

    let btn_span = document.createElement("span");
    btn_span.classList.add("slider-close-icon-before");
    btn_icon.appendChild(btn_span);

    let btn_spann = document.createElement("span");
    btn_spann.classList.add("slider-close-icon-after");
    btn_icon.appendChild(btn_spann);

    let slider_content = document.createElement("div");
    slider_content.classList.add("slidingimag");
    secondElment.appendChild(slider_content);

    // image
    let h = window.innerHeight;
    let images = document.createElement("img");
    images.classList.add("sliderimage");
    slider_content.appendChild(images);
    images.src = "images/image" + [n] + ".webp";
    images.style.maxHeight = h - 100 + "px";

    // image

    function prev() {
        if (n <= 1) {
            n = 8;

            secondElment.removeChild(slider_content);
            secondElment.appendChild(slider_content);
            n++;
            images.src = "images/image" + [n] + ".webp";
        }

        secondElment.removeChild(slider_content);
        n--;

        secondElment.appendChild(slider_content);
        images.src = "images/image" + [n] + ".webp";
    }

    //prev
    // forward
    function forward() {
        if (n >= 8) {
            n = 1;

            secondElment.removeChild(slider_content);
            secondElment.appendChild(slider_content);
            n--;
            images.src = "images/image" + [n] + ".webp";
        }

        secondElment.removeChild(slider_content);
        n++;

        secondElment.appendChild(slider_content);
        images.src = "images/image" + [n] + ".webp";
    }
    // forward

    // adress div and number scroll amount//
    let scrollBox = document.querySelector(".sliding-section-hold");
    scrollBox.style.top = scrollY + "px";
    //scroll amount//

    images.onclick = () => {
        forward();
    };

    rightArrow.onclick = function () {
        forward();
    };

    leftArrow.onclick = function () {
        prev();
    };

    // keyboard move//

    function move(event) {
        if (event.key == "ArrowRight") {
            forward();
        }

        if (event.key == "ArrowLeft") {
            prev();
        }

        if (event.key == "Escape") {
            closeElement();
        }
    }
}

function closeElement() {
    let mainDiv = document.querySelector("main");
    mainDiv.removeChild(mainDiv.childNodes[0]);
    mainDiv.removeChild(mainDiv.childNodes[0]);
    document.documentElement.style.overflow = "visible";
}

// service page java////
