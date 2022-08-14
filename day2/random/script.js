// get div reference
let divRef = document.querySelector("div");

// set styles for divRef
divRef.style.width = "200px";
divRef.style.height = "200px";
// divRef.style["background-color"] = "orange";
divRef.style.backgroundColor = "orange";
divRef.style.display = "block";

//get button reference
let button = document.querySelector("button");

button.onclick = function(){
    if(divRef.style.display == "block"){
        divRef.style.display = "none";
    }else{
        divRef.style.display ="block";
    }
}

