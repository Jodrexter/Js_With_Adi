// Chapter 1 
// Q.1 Create variable of type string and try to add number in it.

let a = "adi"
let b = 90

console.log(a+b);

// Q.2 Use typeof operator to find the datatype of the string in the last question.
console.log(typeof a);

// Q.3 Create a const object in javascript can you change it to hold a number later.
const c = {
    name: "adi",
    section: 1,

}
//c = 45

// Q.4 Try to add a new key to the const object in problem 3 were you able to do it.
const d = {
    name: "adi",
    section: 1,
}

d['jod'] = 'MMMM';
d['name'] = 'Adarsh';
console.log(d);
console.log(d,['jod']);

// Q.5 Write a js program to create a word-meaning dictionary of 5 words.
const j ={
    bungalow: "a one-story cottage",
    tootle: "to move or proceed in a leisurely way",
    craven: "contemptibly timid",
    yuppie: "a young, ambitious, and well-educated city-dweller who has a professional career and an affluent lifestyle",
    juke: "to make a move intended to deceive (an opponent)",
}

console.log(j['craven']);
//  Or
console.log(j.tootle);
