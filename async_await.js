function login(username,password){
    return new Promise((resolve,reject) => {
        console.log('login is working');
        if(username == 'biswarup' && password == '123456')
        {
            resolve(username);
        }
        else {
            reject('username or password is not matched');
        }
    })
}

function displayData(username)
{
    return new Promise((resolve,reject) => {
        console.log("Displaying data")
        resolve("Hello "+username)
    })
}

// login('biswarup','123456').then((res)=>{
//     console.log(res);
//     displayData(res).then((data)=>{
//         console.log(data);
//     })
// })
// .catch((err) => {
//     console.log(err);
// })

// async make it esy
async function doThis()
{
    try{
        const data = await login('biswarup','123456');
        console.log('hello');
    console.log(data);
    const res = await displayData(data);
    console.log(res);
    }
    catch(err){
        console.log(err);
    }
}

doThis();