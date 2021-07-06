import { realpath, readFile, appendFile, crypto} from 'fs';

/* function codificadorBaseHexa() {

    realpath('creaArxiu.txt', (error, resolvedPath) => {
        if (error) {
            throw error;
        } else {
            console.log(resolvedPath);
        }
        readFile(resolvedPath, 'utf-8', (error, content) => {
            if (error) {
                throw error;
            } else {
                console.log(content);
            }

            let b64Encoded = Buffer.from(content).toString('base64');
            console.log(b64Encoded); 

            appendFile('creaArxiuCodificat.b64',b64Encoded, error => {
                if (error) {
                    throw error;
                } else {
                    console.log('arxiu codificat en base64 creat!')
                }
            });

            let hexEncoded = Buffer.from(content).toString('hex');
            console.log(hexEncoded); 
    
            appendFile('creaArxiuCodificat.hex',hexEncoded, error => {
                if (error) {
                    throw error;
                } else {
                    console.log('arxiu codificat en hexadecimal creat!')
                }

            })
        });
    });
    
}

codificadorBaseHexa(); */

function encriptadorArxius() {

    realpath('creaArxiuCodificat.b64', (error, resolvedPath) => {
        if (error) {
            throw error;
        } else {
            console.log(resolvedPath);
        }
    });
        
    readFile(resolvedPath, 'utf-8', (error, content) => {
            if (error) {
                throw error;
            } else {
                console.log(content);
            }
    });

    var encriptador = require('crypto');
    var algorithm = 'aes-192-cbc';


}



encriptadorArxius();