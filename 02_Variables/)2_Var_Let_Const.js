let a = 'jod';
var b = null;
var c = undefined;
var d = 5;

{
  //var a = 45
  let a = 45;
  console.log(a);
}

console.log(a);

const author = 'adi';
let author = 5 // you can't change the value of const insted of taking same variable name you need to get new variable name

console.log(author);

// notes
// 1.. var can be redeclared.
// 2.. var is used in before 2000.
// 3.. let can be updated but not redeclared.
// 4.. const can neither be updated nor be redeclared.
// 5.. var is globally scoped while let and const are block scoped.
// 6.. var can be updated and redeclared within its scope.
// 7