let arrayFuncions = [10];

let contador = function comptar() {
    for( let j = 0; j < 10; j++ ) {
        console.log(j);          
    };
};

for( let i = 0; i < 10; i++ ) {
    arrayFuncions.push(contador); 
};

arrayFuncions.forEach(contador);
