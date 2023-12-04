// Destructing Arrays
let names = ["Raj","Yadav","Baba","Yaga"];
let[winner,runnerup] = names;
console.log(winner,runnerup);

// Destructing Objects
const student = {
    name : "BabaYaga",
    age : 14,
    class : 9,
    Subjects : ["Hindi","English","Math","Science"],
    UserName : "BabaYaga@7",
    password : "babaji"
};
let {UserName,password} = student;
console.log(UserName,password);
let {UserName:user, password:secret} = student;
console.log(user,secret);