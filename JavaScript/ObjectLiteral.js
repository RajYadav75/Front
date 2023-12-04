let delhi = {
    latitute: "28.704",
    longutude: "77.1027"
};
console.log(delhi);
console.log(delhi.latitute);
console.log(delhi.longutude);

const Student = {
    name : "Raj",
    age : 25,
    marks : 74.5,
    city : "Delhi"
};
console.log(Student);
console.log(Student.name);
Student.city = "Uttar Pradesh";
console.log(Student);
Student.gender  = "Male";
console.log(Student);
delete Student.gender;
console.log(Student);

/*Create an object literal for the properties of threads/twitter post which include
UserName
Content
Likes
Report
Tags   */

const post = {
    UserName : "BabaYaga@RajYadav",
    Content : "You are great",
    Likes : 150,
    Reports : 5,
    tags : ["@Raj", "@BabaYaga"]
};
console.log(post);
// Object of Objects
const std = {
    Raj : {
        Grade : "A+",
        City : "Gorakhpur"
    },
    BabaYaga : {
        Grade : "ULTER",
        City : "The Continental"
    }
};
console.log(std);
console.log(std.Raj);
console.log(std.BabaYaga.City)
// Array of Objects

const classInfo = [
    {
        Name : "Raj",
        age : 18
    },
    {
        Name : "BagaYaga",
        age : 20
    }
];
console.log(classInfo);
console.log(classInfo[0]);
console.log(classInfo[0].Name);
console.log(first)