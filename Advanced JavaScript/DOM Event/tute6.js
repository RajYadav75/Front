let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

// btn.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "Blue";
// });
// p.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "Pink";
// });
// h1.addEventListener("mouseenter", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "yellow";
// });
// h3.addEventListener("mouseover", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "red";
// });

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
}
btn.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);