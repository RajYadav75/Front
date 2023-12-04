function hello(){
    console.log("inside hello fnx");
    console.log("Hello Ji");
}
hello();
function demo(){
    console.log("Calling hello fnx");
    hello();
}
console.log("Calling demo fnx");
demo();
console.log("done, bye!");