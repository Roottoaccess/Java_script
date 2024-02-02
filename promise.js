// This is very important topic in javascript
// promise (resolve) and (reject)

let myPromise = new Promise((resolve,reject) =>
{
    let x = 1;
    if(x == 1){
        resolve('ok done !');
    }
    else{
        reject('sorry failed');
    }
})

// consuming the promise
myPromise.then((res)=>{
    console.log(res);
}).catch((err) => {
    console.log(err);
});
// fetch is also a promise
/*
fetch('https://fghthh')
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
*/