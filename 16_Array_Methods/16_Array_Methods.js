// array methods
// 1. toString() >> used to convert array into string.
let a = [12,43,21,12];
let b = a.toString(); // b is string now.
console.log(typeof(b)); // checked type of b >> o/p = string.

// 2. join() >> joins the array using sperater.
let c = a.join(" and "); // o/p 12 and 43 and 21 and 12 string
console.log(c,typeof c); 

// 3.pop() >> removes last element of array.
let d = a.pop(); // removed last element of array. >> o/p 12 and 43 and 21.

console.log(d); // returns the popped element >> o/p 12

// 4. push() >> add the new element at the end of array.
let e = a.push(12); // added new element at the end of array >> o/p  [ 12, 43, 21, 12 ]
console.log(a);

// 5. shift() >> removes frist element and returns it.
let f = a.shift(); // o/p [ 43, 21, 12 ]
console.log(a); 

// 6 unshift() >> add the new element at the begining of the arrray.
let g = a.unshift(15); // o/p [ 15, 43, 21, 12 ]
console.log(a);

// 7 delete() >> array elements can be deleted using delete operator.
let h = [23,54,32,12]
delete h[2]; // o/p [ 23, 54, <1 empty item>, 12 ]
console.log(h);

// ******_____________Interview question _____________******
// Q.1 tell me the length of array after using delete()
console.log(h.length);
// ANS:   4 >> because delete() removes the value  in array but not the element itself.

// 8 concat() 
// 1.>> used to join arrays in the given array.
// 2.>> does not change existing array.
                
let num1 = [1,2,3,4,5];
let num2 = [11,12,13,14,15];

let num3 = num1.concat(num2);
console.log(num3);    // o/p [ 1,  2,  3,  4,  5,11, 12, 13, 14,]

// 8 sort() 
// 1 >> it can modify orginal arry.
// 2. >> sort an array alphabetically.
// 3. >> sort an array numerically.

let i = [7321,89,129]
i.sort(); // o/p [ 7, 8, 9 ]

// ******_____________Interview question _____________******
// Q.2 tell when the op after running sort 
console.log(i); // o/p [ 129, 7321, 89 ] // note here it the compiler considering this  i variable as a string so he is giving the op in alphabetical order .


// 8.1 sorting using compare function 
// 1. asecnding order
let compare = (a,b)=>{
    return(a-b)
}
let j = [321,34,5,21];
j.sort(compare);
console.log(j); // o/p [ 5, 21, 34, 321 ]

// 2. descending order
let compare1 = (a,b)=>{
    return(b-a)
}
let k = [321,34,5,21];
k.sort(compare1);
console.log(k); // o/p [ 321, 34, 21, 5 ]

// 9 reverse() >> reverse the array
let l = [1,2,3,4,5];
l.reverse();
console.log(l); // o/p [ 5, 4, 3, 2, 1 ]

// 10 splice() >> splice can be used to add new items in an array. >> it can modify orignal array.
let m = [232,123,54,3,54,32];
m.splice(2,2,101,102); // here first argument for indexing where you want to start or add.
// 2. 2nd argument that is 2 for how many element you want to remove.
// 3. 3rda and 4th agrumnet is for elements to be added.
console.log(m);

// 11 slice() >>    slice out a piece from an array.
// it can not modify array.
// it can creates a new array.
let n = [1,2,3,5,7];
let new_n = n.slice(2);
console.log(new_n); // o/p [ 3, 5, 7 ]

let new_n1 = n.slice(1,4); // 1 st argument ask from where to start and 2nd argument ask ending point of element. 
console.log(new_n1); // o/p [ 2, 3, 5 ]

