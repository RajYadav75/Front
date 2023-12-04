let para1 = document.createElement('p');
para1.innerText = "Hey I'm red.";
document.querySelector('body').append(para1);
para1.classList.add('red');

let hd1 = document.createElement('h3');
hd1.innerText = "Hey I'm blue.";
document.querySelector('body').append(hd1);
hd1.classList.add('blue');

let dv = document.createElement('div');
let h1 = document.createElement('h1');
let para2 = document.createElement('p');
h1.innerText = "I'm in a div";
para2.innerText = "Me Too.";

dv.append(h1);
dv.append(para2);
dv.classList.add("box");

document.querySelector("body").append(dv);