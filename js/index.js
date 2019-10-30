// Your code goes here

// mouseover
// scroll
// mouseover
// mouseout
// dblclick
// click
// resize
// keypress
// onload
// wheel

// added an anchor tag to nav
let nav = document.querySelector("nav");

let nightShift = document.createElement("a"); 
let nightShiftText = document.createTextNode("Night Shift");
nightShift.prepend(nightShiftText);
nightShift.style.color = "red";
nightShift.style.fontWeight = "900";
nav.appendChild(nightShift);

// random

let navItems = document.querySelectorAll("nav a");

function random() {
    for (i = 0; i < navItems.length; i++) {
        let r = Math.random() + 2;
        navItems[i].style.transform = `scale(${r})`;
    }
}

window.addEventListener("scroll", random);

navItems[0].addEventListener('click', function(e){
    e.preventDefault();
})
navItems[1].addEventListener('click', function(e){
    e.preventDefault();
})
navItems[2].addEventListener('click', function(e){
    e.preventDefault();
})
navItems[3].addEventListener('click', function(e){
    e.preventDefault();
})
navItems[4].addEventListener('click', function(e){
    e.preventDefault();
})

// night shift

let darkMode = () => {
   let body = document.querySelector("body, home");
   body.style.background = "black";
   body.style.color = "white";
   console.log(body);
 
}

let lightMode = () => {
    let body = document.querySelector("body, home");
    body.style.background = "white";
    body.style.color = "black";

 }

 let trippyMode = () => {
    let body = document.querySelector("body, home");
    let h2 = document.querySelector("body, home h2");
    body.style.background = "#04BF8A";
    h2.style.color = "#F277A4";
 }



// fun bus selected img 

let selectTheFunBus = document.querySelector("header img");

selectTheFunBus.addEventListener('mouseover', () => {
    selectTheFunBus.style.transform ="scale(1.1)";
    selectTheFunBus.style.transition = "all 0.3s";
    darkMode();
  
})
selectTheFunBus.addEventListener("mouseout", () => {
    selectTheFunBus.style.transform ="scale(1)";
    selectTheFunBus.style.transition = "all 0.3s";
    lightMode();
  
 })


 nightShift.addEventListener('mouseover', () => {
    trippyMode();
    stopPro();
  
 
})
nightShift.addEventListener("mouseout", () => {
    darkMode();
  
 })

 // GO! 

 let go = document.querySelector("body section .text-content:first-child h2");
 

 go.addEventListener('dblclick', () => {
     go.style.fontWeight = "900";
     go.style.transform = "rotate(360deg)";
     go.style.transition = "all 0.3s";
     go.style.color = "green";
     window.addEventListener('scroll', () => {
         go.style.transform = "rotate(180deg)";
         go.style.transition = "all 0.3s";
     })
 })


let img = document.querySelector(".img-fluid");
img.addEventListener('click', () => {

img.src = "https://images.unsplash.com/photo-1572371402638-c654219dd0f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"

})

let images = document.querySelector('img');
window.addEventListener("resize", () => {
    images.src = "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80!"
})


// keypress
document.addEventListener('keypress', logkey)

function logkey(g) {
    window.location.replace("http://www.google.com");
}

window.onload = () => {

nav.style.background = "lightgreen"; 

}

let highlight = document.querySelector(".container p");
highlight.addEventListener('wheel', () => {
    highlight.style.background = "yellow";
})