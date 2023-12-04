function saveToDb(data, success, failure){
    let internet = Math.floor(Math.random() * 10)+1;
    if(internet > 4){
        success();
    }else{
        failure();
    }
}


saveToDb("BabaYaga", ()=>{
    console.log("Success : your data was saved.");
    saveToDb("hello World", ()=>{
        console.log("Success 2: data2 saved");
        saveToDb("RajYadav", ()=>{
            console.log("Success 3: data3 saved.");
        },()=>{
            console.log("Failure 2: weak connection.");
        });
    },()=>{
        console.log("failure 2: weak connection.");
    });
},()=>{
    console.log("Failure : weak connection. data not saved.");
});