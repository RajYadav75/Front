// Event Listener for Elements


let p = document.querySelector("p");
p.addEventListener("click", function(){
    console.log("Paragraph clicked.")
});
let box = document.querySelector(".box");
box.addEventListener("mouseenter", function(){
    console.log("You enter in div tag.")
})