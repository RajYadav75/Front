// let arr = [1,2,3,4,5];

/*// FOR EACH

let print = function(el){
    console.log(el);
};
arr.forEach(print);
// OR 
arr.forEach(function(el){
    console.log(el);
})
//Or
arr.forEach((el) => {
    console.log(el);
});

let arr1 = [
    {
        Name : "Raj",
        marks : 95
    },
    {
        Name : "Deepak",
        marks : 89
    },
    {
        Name : "Baba",
        marks : 93
    }
];
arr1.forEach((el) =>{
    console.log(el);
    console.log(el.marks);
}) */
/*
//Map

let double = arr.map((el) => {
    return el *2;
});
console.log(double);
*/
/* 
// Filter 
let num = [2,4,1,5,6,2,7,8,9,10,11,12];
let even = num.filter((num) => (num % 2 == 0));
console.log(even);
let odd = num.filter((el) => {
    return el %2 != 0;
});
console.log(odd);
*/
/* 
//Every
console.log([1,2,3,4].every((el) => (el % 2 == 0)));
console.log([2,4].every((el) => (el % 2 == 0)));
*/

// Reduce
// console.log([1,2,3,4].reduce((res,el) => (res + el)));


// Finding Maximum in an Array 
// let arr = [1,4,2,5,6,7,2,9,2];
// let max = arr.reduce((max,el) => {
//     if(max < el){
//         return el;
//     }else{
//         return max;
//     }
// });
// console.log(max);


// Check if all numbers in our array are multiples of 10 or not.
// Create a function to find the min number in an array.

// let arr = [10,20,30,40];
// let num = arr.every((el) => el % 10 == 0);
// console.log(num);

// let num = [10, 20, 30, 40, 5];
// function getMin(num){
//     let min = num.reduce((min, el) => {
//         if (min < el) {
//             return min;
//         }else{
//             return el;
//         }
//     });
//     return min;
// }
// console.log(getMin(num));

//Default Parameter
// Giving a default value to the arguments 
// function sum (a, b=3){
//     return a+b;
// }
// console.log(sum(2));
// console.log(sum(2,5));

// Spread
// console.log(..."Raj Yadav");

// let arr = [1,2,3,1,2,3,1,2,3,1,2,3,0];
// console.log(Math.min(...arr));

// Spread Array Literals
// let arr = [1,2,3,4,5];
// let newArr = [...arr];
// console.log(newArr);
// let char = [..."BabaYaga"];
// console.log(char);

//Spread with Object Literals
let data = {
    email : "Babayaga@gmail.com",
    password : "xxxx"
};
let datacopy = {
    ...data,id: 123
};
console.log(datacopy);

let arr = [1,2,3,4,5];
let obj1 = {...arr};
console.log(obj1);