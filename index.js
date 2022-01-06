
// var x = document.getElementsByClassName("label");
//
//
// var i=document.getElementById("first-name");
//
// function focusFunction(){
// 	var x = document.getElementsByClassName("label");
//
// 	i.classList.add ("active") ;
//
// }
//
// function blurFunction(){
// 	i.classList.remove ("active") ;
// }























// second box //


let currentScrollPosition = 0;
let scrollAmount = 320;


const stest = document.querySelector(".testmonial-sub");
const htScroll = document.querySelector(".scrol-wrapp");

let maxScrolltest = -stest.offsetWidth + htScroll.offsetWidth;


function myfunctiontest(val){

  currentScrollPosition += (val * scrollAmount );

  if (currentScrollPosition > 0){
    currentScrollPosition = 0 ;
  }

if(currentScrollPosition < maxScrolltest){
  currentScrollPosition = maxScrolltest;
}

stest.style.transform="translatex("+ currentScrollPosition + "px)";
// sCont.style.left =  currentScrollPosition +"px";

     }

 // second box //

     let currentScrollPositionn = 0;
     let scrollAmountt = 400;

const sCont = document.querySelector(".view-cards");
const hScroll = document.querySelector(".scrol-wrap");

let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;

function myfunction(val){

  currentScrollPositionn += (val * scrollAmountt );

  if (currentScrollPositionn > 0){
    currentScrollPositionn = 0 ;
  }

if(currentScrollPositionn < maxScroll){
  currentScrollPositionn = maxScroll;
}

sCont.style.transform="translatex("+ currentScrollPositionn + "px)";
// sCont.style.left =  currentScrollPosition +"px";

     }
