document.createElement('p');
let newP = document.createElement('p');
console.log(newP);
newP.innerText = "I am new paragraph with the help javascript.";
console.log(newP);
let body = document.querySelector('body');
body.appendChild(newP);
let box = document.querySelector('.box');