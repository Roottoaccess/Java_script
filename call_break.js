// This is the concept of callbreak in javascript
function loginUser(cb){
    console.log("logged in");
    cb();
}
function displayUser() {
    console.log("hello jeet");
}
// function is calling the function
loginUser(displayUser);