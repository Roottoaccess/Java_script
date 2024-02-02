// Fetching the api's and data in the javascript
const demo = () =>
{
    const x = 0;
    return new Promise((resolve,reject) =>{
        if(x === 1){
            resolve("ok done !");
        } else {
            reject("sorry failed");
        }
    })
}

demo().then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});