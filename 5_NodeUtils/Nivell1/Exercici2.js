const path = require('path/posix');

function creaArxiu () {
    
const fs = require('fs');

fs.appendFile('creaArxiu.txt','El nom de la funció és creaArxiu', (error) => {

    if(error) {
        throw error;
    } else {
        console.log('Arxiu creat!');
    }

});

}

creaArxiu();
