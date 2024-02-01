// making a array by the concept of javascript
const name = ["jeet","jerry",'biswarup','ashiwarya'];

console.log(name[2]);

// making an array of an object
const student = [
    {
        name: "biswarup dutta",
        roll: 12,
        marks: 98
    },
    {
        name: "jeet dutta",
        roll: 10,
        marks: 92
    }
]
// Accessing the elements
console.log(student[0].roll);


// finding the length of the array
console.log(name.length);

// using pop will delete the last element
// name.pop();

// console.log(name)

// using push method to the last element
// name.push("aishwarya","hrithik");
// console.log(name)

// using the slicing method
// console.log(name.slice(2));

// using the sorting method
// console.log(name.sort());

// reverse function to reverse the array
const num = [54,85,1,2,4,70];
console.log(num);

// console.log(num.sort());
// console.log(num.reverse());

// console.log(num);

// this is the important thing about sort and reversers is that it changes the array permanantely

// changing the first value
num[0] = 100;
console.log(num);

// irarate the array and giving the value
num.forEach(function(value){
    console.log(value);
});
// map function
// making a new array and store the older array is known as map technique
const number = [3,5,4,7];
const newNumber = number.map(function(value){
    return value*2;
});

console.log(newNumber);



