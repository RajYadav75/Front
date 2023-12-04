let todo = [];
let req = prompt("Please enter your Request : ");
while(true){
    if(req == "Quit"){
        console.log("Quiting app");
        break;
    }
    if(req == "List"){
        console.log("--------");
        for(task of todo){
            console.log(task);
        }
        console.log("-------");
    }else if(req == "Add"){
        let task = prompt("Please enter the task that task you want to add : ");
        todo.push(task);
        console.log("task added");
    }
    else if(req == "Delete"){
        let idx = prompt("Please enter the task index : ");
        todo.splice(idx,1);
        console.log("Task Deleted");
    }
    else{
        console.log("Wrong Request !");
    }
}