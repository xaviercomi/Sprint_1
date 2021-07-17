let arrayFuncions = [10];

for( let i = 0; i < 10; i++ ) {

    arrayFuncions.push(

        ( function () {

            let esp = '';
            for ( j = 0; j < 10; j++) {
                 esp += `${j},` + ' ';
            }
            return esp;
        })()

    ); 
};

for( k = 0; k < 10; k++ ) {
     result = arrayFuncions[k];
     console.log(result);
}
