let form = document.querySelector("form");
// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     let inp = document.querySelector("input");
//     console.log(inp);
//     console.dir(inp);
//     console.log(inp.innerText);
//     console.dir(inp.innerText);
// });
form.addEventListener("submit", function(event){
    event.preventDefault();
    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");
    console.log(user.value);
    console.log(pass.value);
    alert("hi",user.value," Your password is set to be",pass.value);
});

let user = document.querySelector("#user");
user.addEventListener("change",function(){
    console.log("Event change");
    console.log("Final value",user.value);
});
form.addEventListener("submit",function(event){
    event.preventDefault();
});

user.addEventListener("input", function(){
    console.log("Event Input");
    console.log("Final value", this.value);
});