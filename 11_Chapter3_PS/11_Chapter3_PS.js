const prompt=require("prompt-sync")(); // prompt is not working in vs code so you need to install npm install prompt-sync in terminal and write this query.
// chapter 3 PS 

// Q.1 write a program to print the marks of a student in an object using for loop.


// Q.2 write a program to print the marks of a student in an object using for in loop
/*
let marks ={
    adi:67,
    jod:32,
    sam:32,
    yom:90
}
for(let a in marks){
    console.log("marks of "+ a + " is ",marks[a]);
}

// Q.3 write a program to print "try again " until the user enters the correct number.

let n =4
let num;

while(n!=num){
    num = prompt("enter a coreect numbers :")
}
console.log("you have enterd correct number ");

// OR

let num = prompt("enter a coreect numbers :")

if(num!=56){
    console.log("try again");
}
else{
    console.log("matched");
}
    
*/
// Q.4 write a function to find mean of 5 numbers.
function mean(a,b,c,d,e){
    return((a+b+c+d+e)/5);
}
let a = 2;
let b = 3;
let c = 4;
let d = 5;
let e = 8;

console.log(mean(a,b,c,d,e));