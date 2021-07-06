
const fs = require('fs');

function creaArxiu () {

    fs.appendFile('creaArxiu.txt','El nom de la funció és creaArxiu', (error) => {

        if(error) {
            throw error;
        } else {
            console.log('Arxiu creat!');
        }

    });
}

creaArxiu();
