// get references
let aquaButton = document.getElementById("aqua");
let tealButton = document.getElementById("teal");
let pinkButton = document.getElementById("pink");
let purpleButton = document.getElementById("purple");
let colorlessButton = document.getElementById("colorless");

let canvas = document.querySelector("div");

let activeColor = "white";
let activeInner = "colorless";

// Onclick functions for EACH button

aquaButton.onclick = function() {
    activeColor = "aqua";
    canvas.style.backgroundColor = activeColor;
    activeInner = aquaButton.innerHTML;
}

tealButton.onclick = function() {
    activeColor = "teal";
    canvas.style.backgroundColor = activeColor;
    activeInner = tealButton.innerHTML;
}

pinkButton.onclick = function() {
    activeColor = "pink";
    canvas.style.backgroundColor = activeColor;
    activeInner = pinkButton.innerHTML;
}

purpleButton.onclick = function() {
    activeColor = "purple";
    canvas.style.backgroundColor = activeColor;
    activeInner = purpleButton.innerHTML;
}

colorlessButton.onclick = function() {
    activeColor = "white";
    canvas.style.backgroundColor = activeColor;
    activeInner = colorlessButton.innerHTML;
}

//Mouse Over for AQUA
aquaButton.onmouseover = function(){
    
    canvas.innerHTML = "Testing- Aqua" ;
    canvas.style.backgroundColor = "aqua";
    canvas.style["opacity"] = 0.5;
} 
aquaButton.onmouseout = function(){
    canvas.innerHTML = activeInner;
    canvas.style.backgroundColor = activeColor;
    canvas.style["opacity"] = 1; 
} 

//Teal Mouse Over
tealButton.onmouseover = function(){
   
    canvas.innerHTML = "Testing- Teal";
    canvas.style.backgroundColor = "teal";
    canvas.style["opacity"] = 0.5;
} 
tealButton.onmouseout = function(){
    canvas.innerHTML = activeInner;
    canvas.style.backgroundColor = activeColor;
    canvas.style["opacity"] = 1;
} 

//PINK MOUse OVER
pinkButton.onmouseover = function(){
    
    canvas.innerHTML = "Testing- Pink";
    canvas.style.backgroundColor = "pink";
    canvas.style["opacity"] = 0.5;
} 
pinkButton.onmouseout = function(){
    canvas.innerHTML = activeInner;
    canvas.style.backgroundColor = activeColor;
    canvas.style["opacity"] = 1;
} 

//PURPLE MOuse Over
purpleButton.onmouseover = function(){
    
    canvas.innerHTML = "Testing- Purple ";
    canvas.style.backgroundColor = "purple";
    canvas.style["opacity"] = 0.5;
} 
purpleButton.onmouseout = function(){
    canvas.innerHTML = activeInner;
    canvas.style.backgroundColor = activeColor;
    canvas.style["opacity"] = 1;
} 

//COLORLESS Mouse Over
colorlessButton.onmouseover = function(){
    
    canvas.innerHTML = "Testing- Colorless";
    canvas.style.backgroundColor = "white";
    canvas.style["opacity"] = 0.5;
} 
colorlessButton.onmouseout = function(){
    canvas.innerHTML = activeInner ;
    canvas.style.backgroundColor = activeColor;
    canvas.style["opacity"] = 1;
} 


