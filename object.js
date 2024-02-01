// creating object in javascript
const student = {
    firstName: "Biswarup",
    lastName: "Dutta",
    dob: "3rd nov",
    pin: 700007,
    displayName:function(){
        return this.firstName + " " + this.lastName
    }
}

// printing the object
console.log(student);
// For perticular property
console.log(student.firstName);

const fullName = student.displayName();
console.log(fullName);