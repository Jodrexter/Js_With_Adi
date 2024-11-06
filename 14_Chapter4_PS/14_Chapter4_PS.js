// chapter 4 ps
// Q.1 what will be the following print in javascript 
// console.log ("ada\"".length)

console.log("ada\"".length);
/*
// Q.2 Explore the includes,starts with & ends with function of a string.
let sentence = 'The quick brown fox jumps over the lazy dog.';
let word = 'fox';

console.log(
  `The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`,);

*/
// Q.3 Write a program to convert a given string to lowercase.

const ooo = 'ARE you fine young man?'
console.log(ooo.startsWith('are')); // Expected output: true
console.log(ooo.endsWith('?')); // Expected output: true
console.log(ooo.endsWith('man')); // Expected output: false

// Q.4 Write a program to convert a given  string to lowercase.
console.log(ooo.toLowerCase());

// Q.5 Extract the amount of this string "Please give Rs 30000"
// Using \n 
let str = "Please give Rs \n30000";
console.log(str);
// or >> using backslash quote
let str1 = "Please give Rs\' 30000";
console.log(str1);
// or >> using slice.
let str2 = "Please give Rs 30000";
let result =str2.slice(15);
console.log(result);

// to convert above string into numbers
let op =Number.parseInt(str2.slice(15));
console.log(typeof op);
console.log(op);

// Q.6 Try to change 4th character of given string were you able to do it ?.
let char ="adiiiii";
char[4]="o";// You cannot change char , string is immmutable.
console.log(char);
// note >> you cannot change string because string is immutable .you can replace the string.
let char1 ="adarsh";
console.log(char1.replace("s","o"));