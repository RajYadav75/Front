
let h1 = document.querySelector("h1");

function saveToDb(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed > 4){
            resolve("Success : data was saved.");
        }else{
            reject("Failure : weak connection.");
        }
    });
}

saveToDb("BabaYaga");