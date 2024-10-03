const prompt=require("prompt-sync")(); // prompt is not working in vs code so you need to install npm install prompt-sync in terminal and write this query.
// This are also js progroam
// 77;
// "adi bhai"
// false

// Operators in js

// 1.Arithmatic operators
// + , - , * , / ,

let a = 10;
let b = 2;

console.log("a + b =",a + b);
console.log("a - b =",a - b);
console.log("a * b =",a * b);
console.log("a / b =",a / b);
console.log("a ** b =",a ** b); // Exponetios // For Power
console.log("a % b =",a % b); //Module operator // for reminder
console.log("a ++ =",a++); //Increment operator // for reminder
console.log("a -- =",a--); //Decrment operator // for reminder
console.log("++a =",++a);
console.log("--a =",--a);
console.log("a =",a);
console.log("a-- =",a--);


// 2. Assignment Operators
// += , -= , *= , /= , **= , %= 

let ch = 5;

ch += 5;
ch -=3;
ch *= 4;
ch /= 2;
ch **= 5;
ch %= 2;
console.log(c);

// 3. Comparison Operators >> compare with 2 or or values and return op in ture or false 
// == , != , === , !== , > , < , >= , <= , ? >> Turnary operator
let comp1 = 9;
let comp2 = 10;
// or >> for checking triple equal to >> triple equal to compare with data type not the value
//let comp2 ="10";

console.log("comp1 == comp2",comp1 == comp2); // Equal to operator 
console.log("comp1 != comp2",comp1 != comp2); // Not equal too
console.log("comp1 === comp2",comp1 === comp2); // Equal value and type >> triple equal to compare with data type not the value
console.log("comp1 !== comp2",comp1 !== comp2); // Not equal value or not type 
console.log("comp1 > comp2",comp1 > comp2); // Greater than
console.log("comp1 < comp2",comp1 < comp2); // Less than
console.log("comp1 >= comp2",comp1 >= comp2); // Greater than Equal too
console.log("comp1 <= comp2",comp1 <= comp2); // Less than Equal too


// 4. Logical Operators >> for comparing two conditions 
// && >> Logical and
// || >> Logical or
// ! >> logical not >> convert false to true and true to false

let x = 5;
let y = 6;

console.log("Logical and(&&) :",x<y && x==5);
console.log("Logical OR(||)) :",x<y && x==5);
console.log("Logical NOt(!)) :",!false); //convert false to true and true to false

// 5. Turnary operators
let c =prompt("enter age");
c =Number.parseInt(a);

console.log("you can :",(c<18? "not drive":"drive"));


// comments in js
// single line comment >> //
// multi line comment >> /* */



