let serviceBoxS = document.querySelector(".service-box-s");

const textLine = document.querySelector(".p-head-s");
const text = "bring your idea for experts";
indexText = 0;

function writetext() {
    textLine.innerText = text.slice(0, indexText);

    if (indexText > text.length - 1) {
        clearInterval(intertext);
    }
    indexText++;
}
const intertext = setInterval(writetext, 200);

let barClick = document.querySelector(".fa-bars");

barClick.addEventListener("click", () => {
    document.querySelector(".hide").classList.toggle("hide-elm-s");
    document.querySelector(".list-m").classList.toggle("show-list");
});

// service page///////
function mouseOverActive_s() {
    serviceBoxS.classList.remove("trans-service-s");
    serviceBoxS.classList.add("op-service-s");
}

function mouseOutActive_s() {
    serviceBoxS.classList.add("trans-service-s");
    serviceBoxS.classList.remove("op-service-s");
}
// service page///////
