// Operators in javascript
let x = 15;
let y = 25;


console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x ** y);
console.log(x % y);
x++;
console.log(x);
y--;
console.log(y);

var z = "8";
console.log(typeof z);
// type casting
z++;
console.log(typeof z);
// printing z
console.log(z);

let a = 12;
let b = 22;
a += 2;
console.log(a);

// Comparison Operator
console.log(a > b);

console.log(a != b);

var c = 100;
var v = "100";
console.log(c == v);

// If you have to check the datatype then use
console.log(c === v);


// Logical operator
// && || !
// logical and operator
console.log(3 > 2 && 5 == 5);
// Logical or operator
console.log(5 > 30 || 5 == 2 || 2 == 2);
// Logical not operator
console.log(!(3 > 2 && 5 == 5));