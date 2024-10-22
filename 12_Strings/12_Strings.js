// chapter 4
// strings 
// >> 1.strings are used to store or manipluate text. 
// 2.>> collection of character.
// 3.>> string is immutable (you cannot change string) ex : name[3]="x"; >> this is not possible. 
// 4.>> string is a sequence of character.


let name = "adarsh";
console.log(name);

// To find length of strings
console.log(name.length);

let name1 ='adi' ;
//console.log(name1);

// To access only specific character.
console.log(name[2]);

// Template literals.
// 1.
let name2 = "omkar";
let name3 = "sandeep";

let name4 = `name2 is a friend of name3 `; // using backtick (` `)you can also print the variable.
console.log(name4);

// 2.
let name5 = `${name2} is a friend of ${name3} `; // using ${ } backtick + dollar sign and curly bracket you can also print the direct value of variables.
console.log(name5);

// Escape sequence character. 
// 1.\n newline.
// 2.\t tab.
// 3.\r carriage retrun.

// 1.use single quote in string.
let animal = "lio\'n"; // Use backslash to print single quote in a string.
console.log(animal);

// 2. print the half string on new line.
let animal1 = "ti\nger"; // Use backslash and n (\n) to print half string on new line.
console.log(animal1);

// 3. 
let animal2 = "cat\trat"; // Use backslash and t (\t) for get tab.
console.log(animal2);

// 4.
let animal3 = "kang\raro" // it can only print after \r value.
console.log(animal3);