let smallImg = document.getElementsByClassName("oldImg");
for(let i =0; i<smallImg.length; i++){
    smallImg[i].src= "Assets/Spiderman.png";
    console.log(`Value of image no ${i} is changed`);
    console.dir(smallImg[i]);
    console.dir(smallImg[i].src);
}
console.dir(document.querySelector("h1"));

console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelector("div a"));

console.dir(document.querySelectorAll("div a"));

let para = document.querySelector('p');
console.dir(para);

console.dir(para.innerText);
console.dir(para.textContent);
console.dir(para.innerHTML);

console.log(para.innerText = "abc");
console.log(para.innerText = "Hi i am Peter Parker.")
console.log(para.innerText = "Hi i am <b>Peter Parker</b>.")
console.log(para.innerHTML = "Hi i am <b>Peter Parker</b>.")

let heading = document.querySelector('h1');
console.log(heading.innerText);
console.log(heading.innerHTML = "<u>Spider Man</u>");
console.log(heading.innerHTML = `<u>${heading.innerText}</u>`);



Getter and Setter

let img = document.querySelector('img');
console.log(img.getAttribute('id'));
console.log(img.setAttribute('id','spiderman'));

console.log(img.setAttribute('src','Assets/creatrion3.jpg'));

console.log(img.getAttribute('class'));
console.log(img.setAttribute('class','umagas'));
console.log(img.getAttribute('class'));

let img = document.querySelector('img');
console.log(img.style);
let heading = document.querySelector('h1');
console.log(heading.style);
console.log(heading.style.color = 'purple');
console.log(heading.style.color = 'green');
console.log(heading.style.backgroundColor = 'red');


let links = document.querySelectorAll(".box a");
// for(let i =0; i<links.length;i++){
//     links[i].style.color = "darkblue";
// }
for(link of links){
    link.style.color = "red"; //inline css
}

let img = document.querySelector('img');
console.log(img.classList);
let heading = document.querySelector('h1');
console.log(heading.classList);
heading.classList.add("green");
console.log(heading.classList);
heading.classList.add('underline');
heading.classList.remove('green');
console.log(heading.classList.contains("underline"));

console.log(heading.classList.toggle("green"));
console.log(heading.classList.toggle("underline"));
console.log(heading.classList.toggle("red"));
console.log(heading.classList);

let box =document.querySelector('.box');
box.classList.add("yellowbg")
  Navigation 
let h4 = document.querySelector('h4');
h4.parentElement;
h4.children;
h4.childElementCount;

let box = document.querySelector('box');
box.children;
let ul = document.querySelector('ul');
ul.parentElement;
ul.childElementCount;
ul.children[0];
ul.children[1];
ul.children[2];
ul.children[2].previousElementSibling;
ul.children[1].previousElementSibling;
ul.children[1].nextElementSibling;

let img = document.querySelector('img');
img.previousElementSibling;
img.previousElementSiblin.style;
img.previousElementSibling.style.color = "green";

document.createElement('p');
let newP = document.createElement('p');
console.log(newP);
newP.innerText = "I am new paragraph with the help javascript.";
console.log(newP);
let body = document.querySelector('body');
body.appendChild(newP);
let box = document.querySelector('.box');
box.append(newP);
let btn = document.createElement('button');
btn.innerText = "Click Me !";
box.appendChild(btn);
newP.append("this is new text.");
box.prepend(newP);

let btn1 = document.createElement('button');
btn1.innerText = "New Button";
let p = document.querySelector('p');
p.insertAdjacentElement('beforebegin',btn1);
p.insertAdjacentElement('afterbegin',btn1);
p.insertAdjacentElement('beforeend',btn1);
p.insertAdjacentElement('afterend',btn1);
