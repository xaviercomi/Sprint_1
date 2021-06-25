let funcions = Array(10);
let i = 0;
let j = 0;

for(i=0; i < funcions.length; i++) {
    funcions[i] = `funcio_${i}`;
}

funcions.forEach((element, index) => {
        console.log(`A la posicio ${index} hi ha l'element ${element} que compta de zero a nou`);
        for(j=0; j < funcions.length; j++) {
            console.log([j]+'\n');
        }
});
