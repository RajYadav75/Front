const favMovie = "John Wick";
let guess = prompt("Guess my favorite movie ...");
while((guess != favMovie) && (guess != Quit)){
    guess = prompt("Wrong guess please try again");
    if(guess == favMovie){
        console.log("Great Job");
    }else{
        console.log("You Quit");
    }
}
