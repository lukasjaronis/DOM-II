// Your code goes here


// added an anchor tag to nav
let nav = document.querySelector("nav");

let nightShift = document.createElement("a"); 
let nightShiftText = document.createTextNode("Night Shift");
nightShift.prepend(nightShiftText);
nightShift.style.color = "red";
nightShift.style.fontWeight = "900";
nav.appendChild(nightShift);

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
    let p = document.querySelector("body, home p");
    let h2 = document.querySelector("body, home h2");
    body.style.background = "#04BF8A";
    p.style.color = "#745DA6";
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
 // console.log(go);
 go.addEventListener('click', () => {
     go.style.fontWeight = "900";
     go.style.transform = "rotate(360deg)";
     go.style.transition = "all 0.3s";
     go.style.color = "green";
 })