async function getName() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Xavier'), 2000)
    });
    let result = await promise; 
    console.log(result);
}

getName();
