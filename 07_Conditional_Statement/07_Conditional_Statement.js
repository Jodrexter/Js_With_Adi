// Conditional Statement
const prompt=require("prompt-sync")(); // prompt is not working in vs code so you need to install npm install prompt-sync in terminal and write this query.


let a = prompt("Enter a no :");

a = Number.parseInt(a) //parseint is used to convert string to a number  and this is known as also typecasting
console.log(typeof a);

// if statement
if(a>0){
    console.log("good");
}

// if else statement
if(a>0){
    console.log("good");
}
else{
    console.log("noob")
}

// if else if  statement

if(a<0){
    console.log("Your age is invalid");
}
else if(a<9){
    console.log("your age is valid but you can't think of driving a car");
}
else if(a<18 && a<=9){
    console.log("your kid but you can't think of driving a car after 18");
}
else{
    console.log("you can drive your age is above 18");
}

*/
// 2. Switch statement

const s = prompt("enter a number")
switch(s){
    case "oranges":
    console.log("orenges are 20rs");
    break;
    case "papaya":
    case "mango":
        console.log("papay's and mango's are 30rs");
        break;
        default:
            console.log("sry we are out");
}

