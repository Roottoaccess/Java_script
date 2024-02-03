console.log(document);
let x = document.querySelector("#heading");
console.log(x.childNodes[0].nodeValue);

function addNew(){
    const para = document.createElement("p");
    const node = document.createTextNode("subsribe our channel to get more videos");
    para.appendChild(node);
    const elem = document.querySelector("#box1");
    elem.appendChild(para);
}