// This is the object oriented programming
class Student{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    displayFullName()
    {
        console.log(this.firstname+" "+this.lastname);
    }
}

const s1 = new Student("Biswarup","Dutta");
s1.displayFullName();
// class age extends Student{
//     constructor(age)
//     {
//         super(firstname,age);
//         this.age = age;
//     }
//     PersonDemo(){
//         console.log(this.age);
//     }
// }

// const s1 = new Student("Jeet","Dutta");
// s1.displayFullName();
// const s2 = new Student();

