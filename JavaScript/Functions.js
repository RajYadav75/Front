function printPoem(){
    let peom = "BabaYaga is a bloody king for us and he always be happy because some of the bhagwan.";
    console.log(peom);
}
printPoem();
function rollDice(){
    let rand = Math.floor(Math.random()*6)+1;
    console.log(rand);
}
rollDice();
function printName(name){
    console.log(name);
}
printName("Raj");
function printInfo(name, age){
    console.log(`${name}'s age is ${age}.` )
}
printInfo("BabaYaga",20);

function average(num1, num2, num3){
    let avg = (num1+num2+num3)/3;
    console.log(avg);
}
average(1,3,4);

// function printTable(n){
//     for(let i=n; i<=n+i; i++){
//         console.log(i);
//     }
// }
// printTable(2);

function sum(a,b){
    return a+b;
}
console.log(sum(2,3));



function outerFun(){
    let x = 5;
    let y = 6;
    function innerFun(){
        console.log(x);
    }
    innerFun();
}

let greet = "Hello";
function changeGreet(){
    let greet = "namaste";
    console.log(greet);
    function innerGreen(){
        console.log(greet);
    }
}
console.log(greet);
changeGreet();

const sum1 = function(a,b){
    return a+b;
}
console.log(sum1(2,3));

function multipleGreet(func,n){
    for(let i = 1;i<= n; i++){
        func();
    }
}
let ggreet = function(){
    console.log("hello");
}
multipleGreet(ggreet,2);


function OddEvenTest(request){
    if(request == "Odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    }else if(request == "Even"){
        return function(n){
            console.log(n%2 == 0);
        
        }
    }else{
        console.log("wrong Request");
    }
}
console.log(OddEvenTest());