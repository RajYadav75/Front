let p = document.querySelector("p");
let input = document.querySelector("#text");
input.addEventListener("input",function(){
    console.log(input.value);
    p.innerText = input.value;
});