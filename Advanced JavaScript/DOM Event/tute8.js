let input = document.querySelector("input");
input.addEventListener("keydown", function(event){
    console.log("code = ", event.code);
    if(event.code == "ArrowUp"){
        console.log("Character moves forward");
    }else if(event.code == "ArrowDown"){
        console.log("Character moves backward");
    }else if(event.code == "ArrowLeft"){
        console.log("Character moves Left");
    }else if(event.code == "ArrowRight"){
        console.log("Character moves Right");
    }
});