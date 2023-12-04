let btns = document.querySelectorAll("button");
for( btn of btns){
    // btn.onclick = sayHello;
    // btn.onclick = sayName;
    btn.addEventLister("click", sayHello);
    btn.addEventLister("click", sayName);
    btn.addEventLister("dblclick", function(){
        console.log("You click double click");
    });
}
function sayHello(){
    alert("Hello");
}
function sayName(){
    alert("Baba Yaga");
}