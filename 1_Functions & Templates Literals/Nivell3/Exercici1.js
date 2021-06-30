let arrayFuncions = [];

let funcioComptar = function comptar() {
    for( let j = 0; j < 10; j++ ) {
        console.log(j);          
    };
};

for( let i = 0; i < 10; i++ ) {
    arrayFuncions.push(funcioComptar); 
};

arrayFuncions.forEach(funcioComptar);
console.log(arrayFuncions);