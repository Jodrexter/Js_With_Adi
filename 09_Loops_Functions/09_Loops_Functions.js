const prompt=require("prompt-sync")(); // prompt is not working in vs code so you need to install npm install prompt-sync in terminal and write this query.
// Chapter 3
// 1.Loops >> we use loops to perfrom repeated actions .

// Types of loop
// 1. For loop
// 2. For in loop
// 3. For of loop
// 4. While loop
// 5. Do while loop

// 1. For loop
/*for(let i=0;i<=50;i++){
    console.log(i);
}

//2. For in loop
let obj ={
    subh:80,
    adi:90,
    jod:20
}
for(let a in obj){
    console.log("Marks of "+ a + " is "+ obj[a]);
}


// 3. For of loop << print a letter/values one by one on next line.
for(b of "adi"){
    console.log(b);
}


// 3. While loop >> if condition is true then it will be going to execute otherwise it will be run throughout program.
let n = prompt("enter a number :")
n = Number.parseInt(n);
let i = 0;

while(i<=n){
    console.log(i);
    i++;
}
*/
// 4. Do while loop >> it will be execute at least once and then it will be 
                 // >> it is a varient of while loop.
let n = prompt("enter a number :")
n = Number.parseInt(n);
let x = 10;

do{
    console.log(x);
    x++;
}while(x<n)