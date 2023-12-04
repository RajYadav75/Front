const max = prompt("Enter the max number : ");
const random = Math.floor(Math.random()*max);
let guess = prompt("Guess the number : ");
while(true){
    if(guess == "Quit"){
        console.log("User Quit !");
        break;
    }
    if(guess == random){
        console.log("You are right ",random);
        break;
    }
    else if(guess < random){
        guess = prompt("Your guess was to small ");
    
    }else{
        guess = prompt("Your guess was to big");
    }
}