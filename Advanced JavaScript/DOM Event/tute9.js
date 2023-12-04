let form = document.querySelector("form");
// form.addEventListener("submit", function(){
//     console.log("Form submitted");
//     alert("form Submitted");
// });

form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log("Form submitted!");
    alert("Form Submitted");
});