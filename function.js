// understanding function
// take nothing return nothing
// take something return nothing
// take something return something

function displayTable(y)
{
    for(var i = 1; i <= 10;i++)
    {
        console.log(y,"x",i,"=",y*i);
    }
}

console.log("hello");
// function will only triger if you call it
displayTable(5);

console.log("Again typing anything random");

// passing the value
displayTable(2);

function sum(x , y){
    // console.log("sum =",x+y);
    var z = x + y;
    // function is returning some value
    return z;
}

var res1 = sum(30,20);
console.log(res1*2)

var res2 = sum(30,20);
console.log(res2 - 5);

