import { realpath, readFile, appendFile} from 'fs';

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

function encripta22(nomArxiu) {

    realpath(nomArxiu, (error, resolvedPath) => {
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
                
                const crypto = require('crypto');
                const algorithm = 'aes-192-cbc';
                const key = crypto.randomBytes(24);
                const iv = crypto.randomBytes(16);

                let encriptador = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
                let textEncriptat = encriptador.update(content);

                appendFile('arxiuEncriptat.txt', textEncriptat, (error) => {

                    if(error) {
                        throw error;
                    } else {
                        console.log('Arxiu encriptat creat!');
                    }
                });                           
        });
    });    
};

encripta22('creaArxiuCodificat.b64');
