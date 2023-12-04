let btn = document.querySelector("button");
console.dir(btn);
console.dir(btn.onclick);

btn.onclick = function(){
    console.log("Button was clicked.");
}
function sayHello(){
    alert("Hello !");
}
btn.onclick = sayHello;