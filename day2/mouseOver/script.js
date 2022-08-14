//get reference for the first div element
let div = document.querySelector("div");

div.onmouseover = function(){
    div.innerHTML = "ouch!";
    div.style["opacity"] = 0.5;
} 


div.onmouseout = function(){
    div.innerHTML = "This is no longer hovering!";
    div.style["opacity"] = 1;
} 