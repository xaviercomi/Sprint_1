function promesas(x,  y) {
    const promise = new Promise((resolve, reject) => {
        let sum = (x + y);
        if( sum == 2) {
            resolve('Success')
        } else {
            reject('Failed')
        }
    })

    promise
    .then((message) => {console.log(message)})
    .catch((error) => {console.log(error)}); 
}    

promesas(0,0);
promesas(1,1);


