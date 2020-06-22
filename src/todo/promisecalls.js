var promise = new Promise((resolve, reject) => {
    const x = "geeksforgeeks"
    const y = "geeksforgeeks"
    resolve('Geeks For Geeks')
    reject('Not a Geek')

    if(x === y)
    {
        resolve()
    }
    else
    {
        reject()
    }

    reject('Promise Rejected')
    resolve('Promise Accepted')
}).then((resolve) => 
{
    console.log(resolve)
}, 
    (reject) => 
{
    console.log(reject)
}).catch((resolve) =>{
    console.log(resolve)
},
    (reject) => 
{
    console.log(reject)
})