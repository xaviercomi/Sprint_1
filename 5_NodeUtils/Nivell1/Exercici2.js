function creaArxiu () {
const fs = require('fs');

fs.appendFile('document.txt','Text de prova Sprint1', (error) => {

    if(error) {
        throw error;
    } else {
        console.log('Arxiu creat!');
    }

});

}

creaArxiu();
