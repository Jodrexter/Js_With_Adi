// Chapter 2
const prompt=require("prompt-sync")(); // prompt is not working in vs code so you need to install npm install prompt-sync in terminal and write this query.
// Q.1 Use logical operator to find wether age of person is lies between 10 and 20.

let a = prompt("enter age :");
a = Number.parseInt(a);

//console.log("Age of person is ",(a>10&&a<=20? "lies":"not lies")); << using turnary operator.
// or
if(a>10 && a<=20){
    console.log("Age of person lies between 10 and 20");
}
else{
    console.log("Age of person not lies between 10 and 20");
}

// Q.2 Demonstrate the use of case statement in javascript
let age = prompt("enter Age :");
age = Number.parseInt(age);
switch(age){
    case 12:
        console.log("your age is 12");
        break;
    case 13:
        console.log("your age is 13");
        break;
    case 14:
        console.log("your age is 14");
        break;
    case 15:
        console.log("your age is 15");
        break;
    case 16:
        console.log("your age is 16");
        break;
    case 17:
        console.log("your age is 17");
        break;
    default:
        console.log("Your age is not spl");
}

// Q.3 Write a js program to find whether a number is divisble by 2 and 3.
let num = prompt("enter number :");
num = Number.parseInt(num);

if(num % 2==0 && num % 3==0){
    console.log("number is divisible by 2 and 3");
}
else{
    console.log("not");
}


// Q.4 Write a js program to find whether a number is divisble either 2 or 3.

num2 = prompt("enter a number :");
num2 = Number.parseInt(num2);
if(num2 % 2 == 0 || num2 % 3 == 0){
    console.log("number is divisble by 2 or 3");
}
else{
    console.log("not");
}

// or

if(num2 % 2 == 0){
    console.log("number is divisible by 2");
}
else if(num2 % 3 == 0){
    console.log("number is divisible by 3");
}
else{
    console.log("number is not divisble");
}


// Q.4 Print "you can drive " or "you cannot drive " based on  age being greater than 18 using turnary .

let age = prompt("enter your age :");
age = Number.parseInt(age);

console.log(age>=18? "you can drive" : "you cannot drive");
