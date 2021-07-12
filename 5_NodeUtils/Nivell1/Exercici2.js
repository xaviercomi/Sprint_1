
import { appendFile } from 'fs';

function creaArxiu () {

    appendFile('creaArxiu.txt','El nom de la funció és creaArxiu.', (error) => {

        if(error) {
            throw error;
        } else {
            console.log('Arxiu creat!');
        }

    });
}

creaArxiu();
