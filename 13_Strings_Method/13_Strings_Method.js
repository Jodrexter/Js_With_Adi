 // chapter 4.
 // String Method


 // 1. length
 let name ="Adarsh";
 let surname = "Salgaonkar"
 console.log(name.length); // output: 3

 // 2. UpperCase // toUpperCase() // print all charcater in capital letter.
 console.log(name.toUpperCase());

 // 3. LowerCase //
 console.log(name.toLowerCase()); // print all charcater in small letter.

 // 4 Slice
 console.log(name.slice(3, 5)); // print only specific letter 

 // 5 Replace
 console.log(name.replace("A", "h")); // replace the character with the new one.

 // 6 Concat. // to add two string .
 console.log(name.concat(" Surname is ",surname  ," smjhe?")); 
 // Or // using + operator.
 console.log(name + surname );

 // 7. Trim // remove unwanted whitespacing.
 let a = "            what's up" 
 console.log(a.trim()); // output: what's up


 let friend = "shravan";
 let i;
 for(i=0;i<=friend.length;i++){
    console.log(friend[i]);
 }

 // 8. substr // substr() is similar to slice().The difference is that the second parameter specifies the length of the extracted part.
 console.log(friend.substr(2, 3)); // output: rav

 // 9. repeat // print string multiple times.
 let text ="joddd"
 let result =text.repeat(4);
 console.log(result);

 // 10. charCodeAt >> The charCodeAt() method returns the code of the character at a specified index in a string
 const name1 = "samay";
let letter = name.at(2)
console.log(letter);