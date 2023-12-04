// let btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//     console.log("Button clicked");
// });      

//              or
// let btn = document.querySelector("button");
// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("Button clicked");
// });  

//                      or 
let btn = document.querySelector("button");
btn.addEventListener("dblclick",function(event){
    console.log(event);
    console.log("Button clicked");
});

let input = document.querySelector("input");
input.addEventListener("keydown", function(){
    console.log("Key was pressed");
});
input.addEventListener("keyup",function(){
    console.log("Key was released")
});
input.addEventListener("keypress",function(){
    console.log("key was predded to muchh.")
});
input.addEventListener("keydown", function(event){
    console.log(event);
    console.log(event.code);
    console.log(event.key);
    console.log("Key was pressed");
});
