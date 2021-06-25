
let funcions = new Array(10);
let matriuFuncions = new Array(10);

for ( let k = 0; k < matriuFuncions; k++) {
    matriuFuncions[k] = function compta() {
        while ( k < matriuFuncions.length ) {
            return console.log ( k + '\n');
        }    
    };
    console.log( matriuFuncions.forEach(element => element.compta() ));
    console.log ( matriuFuncions );
}

for( let i = 0; i < funcions.length; i++ ) {
    funcions[i] = `funcio_${i}`;
}

funcions.forEach((element, index) => {
        console.log(`A la posicio ${index} hi ha l'element ${element} que compta de zero a nou`);
        for( let j = 0; j < funcions.length; j++ ) {
            console.log([j]+'\n');
        }
});




