// Loops concept for javascript
// creating a never ending loop
// console.log("hi");
// var x = 0;
// while(x < 3){
//     console.log("hello");
// }
// console.log("bye");

// creating a loop
console.log("hi");
var x = 0;
while(x < 3){
    console.log("hello");
    x++;
}
console.log("bye");

// this is another program
let a = 3;
while(a <= 12){
    console.log(a);
    a += 3;
}

// Building a 2's table
var y = 2;
// var x = 1;
var result = 0;
// while(x <= 10){
//     result = y * x;
//     console.log(y,"x",x,"=",result);
//     x++;
// }

// doing the same thing using for loop
for(var i = 1; i <= 10; i++){
    result = y * i;
    console.log(y,"x",x,"=",result);
}

// Concept of do while loop
var i = 0;
do{
    console.log("hello");
    i++;
}while(i <= 4);

var i = 0;
while(i < 3){
    if(i == 2){
        break;
        // continue;
    }
    console.log("wello", i);
    i++;
}
console.log("loop ended");