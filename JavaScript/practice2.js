/* Create atraffic light system that shows what to do based on color*/ 
let color = "Yellow";
if(color == "red"){
    console.log("please stop!")
}else if(color == "Yellow"){
    console.log("please wait")
}
else{
    console.log("Let's go")
}

// A "good string" is a string that starts with the letter 'a'  & has a length  > 3. Write a program to find if a string is good or not.
let str = "apple"
if(str[0] == 'a' && str.length>3){
    console.log("String is good")
}else{
    console.log("String is not good")
}
