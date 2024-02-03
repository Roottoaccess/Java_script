// Document object model
// const x = document.querySelectorAll('.heading');
// console.log(x[1]);

// how to change the css using javascript
// element.style.propertyName = "value";
// const x = document.querySelector("#myName");
// x.style.color = "red";

// setTimeout(() => 
// {
//     const x = document.querySelector('#myName');
//     x.style.backgroundColor = "royalblue";
//     x.style.color = "white";
// },5000)

// function changeColor()
// {
//     console.log("button clicked !");
//     const x = document.querySelector("#myName");
//     x.style.backgroundColor = "red";
//     x.style.color = "white";
//     x.innerHTML = "by Biswarup";
// }
// function demo()
// {
//     document.querySelector("#myName").style.color = "red";
// }

// document.querySelector("#btn").onclick = changeColor;

function mouseDownEvent(){
    // console.log("mouse down");
    document.querySelector("#box").style.backgroundColor = "green";
}
function onMouseUpEvent(){
    // console.log("mouse up")
    setTimeout(() => {
        document.querySelector("#box").style.backgroundColor = "yellow";
    },2000);
}
function clickEvent(){
    // console.log("click complete");
   setTimeout(() => {
        document.querySelector("#box").style.backgroundColor = "blue";
   },2000);
}

function demo()
{
    let x = document.querySelector("#firstName");
    console.log(x.value);
    x.value = x.value.toUpperCase();
}

function getData()
{
    console.log("Hello");
}
// Event listener
document.querySelector("#btn").addEventListener("click",() => {
    console.log("ok");
});
document.querySelector("#btn").addEventListener("click",demo2);

// document.querySelector("#btn").onclick = hihi;
// document.querySelector("#btn").onclick = demo2;
// function hihi(){
//     console.log("Event 1");
// }

function demo2()
{
    console.log("Event 2");
}