let arrayFuncions = [10];

for( let i = 0; i < 6; i++ ) {
    arrayFuncions.push(
        function comptar() {
            for( let j = 0; j < 10; j++ ) {
            console.log(j);          
        };
    }); 
};

for ( let j = 5; j < 10; j++) {
    arrayFuncions.push(
        function nom() {
            console.log('x');
            console.log('a');
    });
};








