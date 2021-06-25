let matriuFuncions = new Array(10).fill(
    function compta() {
        while (k < matriuFuncions.length) {
        return console.log ( k + '\n');
    };  
});

for( let j = 0; j < matriuFuncions.length; j++ ) {
    console.log(matriuFuncions[j]);
} 


// Amb elements i no funcions
/*
let funcions = new Array(10);
for( let i = 0; i < funcions.length; i++ ) {
    funcions[i] = `funcio_${i}`;
}

funcions.forEach((element, index) => {
        console.log(`A la posicio ${index} hi ha l'element ${element} que compta de zero a nou`);
        for( let j = 0; j < funcions.length; j++ ) {
            console.log([j]+'\n');
        }
});
*/
