/* Write an arrow function that reaturn the square of a number 'n' ;*/
/* Write a function that print "Hello Baba" 5 threat intervals of 2s each. */
const square = (n) => (n*n);
console.log(square(4));

let id = setInterval(()=>{
    console.log("Hello Baba");
},2000);
setTimeout(() => {
    clearInterval(id);
}, 10000);