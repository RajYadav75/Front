function sum(...args){
    for(let i = 0; i<args.length; i++){
        console.log("You gave us : ", args[i]);
    }
}
console.log(sum);
function min(){
    console.log(arguments);
    console.log(arguments.length);
}
console.log(min(1,2,3,4));
function min(...args){
    return args.reduce((min,el)=>{
        if(min>el){
            return el;
        }else{
            return min;
        }
    });
}
console.log(min);