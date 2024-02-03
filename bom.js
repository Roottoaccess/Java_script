const x = window.innerHeight;
const y = window.innerWidth;

console.log(x,y)

document.querySelector("#btn").demo;

function demo(){
   window.open(); 
}

document.querySelector("#btn1").demo1;

function demo1()
{
    window.close();
}

document.querySelector("#intro").into;

into = () => {
    // const intro = document.createElement("h1");
    // const data = document.createTextNode("Welcome to java script");
    // intro.appendChild(data);
    // const elem = document.querySelector("#intro");
    // elem.appendChild(intro)
    console.log("Welcome to this java script course !");
}
// Finding the location of the windows
const z = window.location.href;
console.log(z);

console.log(window.location.hostname);

console.log(window.location.protocol);

function del(){
    const del = confirm("are you sure ? ");
        if(del){
            console.log("ok deleting !");
        } else {
            console.log("delete cancel");
        }
}
document.querySelector("#del").del;