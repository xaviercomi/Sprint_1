import { realpath, readFile, appendFile, unlink} from 'fs';
import crypto from 'crypto';

const key = crypto.randomBytes(24);
const iv = crypto.randomBytes(16);

const algorithm = 'aes-192-cbc';
           


function codificadorBaseHexa(nomArxiu) {

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

            let b64Encoded = Buffer.from(content).toString('base64');
            console.log(b64Encoded); 

            appendFile(`Codificat_${nomArxiu}.b64`, b64Encoded, error => {
                if (error) {
                    throw error;
                } else {
                    console.log('arxiu codificat en base64 creat!')
                }
            });

            let hexEncoded = Buffer.from(content).toString('hex');
            console.log(hexEncoded); 
    
            appendFile(`Codificat_${nomArxiu}.hex`, hexEncoded, error => {
                if (error) {
                    throw error;
                } else {
                    console.log('arxiu codificat en hexadecimal creat!')
                }

            })
        });
    });
    
}

codificadorBaseHexa('creaArxiu.txt'); 



function encripta22(nomArxiuCodificat) {

    realpath(nomArxiuCodificat, (error, resolvedPath) => {
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
            
            let encriptador = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
            let textEncriptat = encriptador.update(content);

            appendFile(`Encriptat_${nomArxiuCodificat}`, textEncriptat, (error) => {
                if(error) {
                    throw error;
                } else {
                    console.log('Arxiu encriptat creat!');
                }

                unlink(nomArxiuCodificat, error => {
                    if (error) {
                        console.log('Arxiu NO eliminat!', error.misssage);
                        
                    } else {
                        console.log('arxiu eliminat');
                    }
                });            
            });                               
        });
    });    
};

setTimeout( () => {
    encripta22('Codificat_creaArxiu.txt.b64'), 
    encripta22('Codificat_creaArxiu.txt.hex')}, 5000);




// function desEncriptador22(nomArxiuEncriptat) {

//     realpath(nomArxiuEncriptat, (error, resolvedPath) => {
//         if (error) {
//             throw error;
//         } else {
//             console.log(resolvedPath);
//         }
        
//         readFile(resolvedPath, 'utf-8', (error, content) => {
//             if (error) {
//                 throw error;
//             } else {
//                 console.log(content);
//             }  
            
//             let desEncriptador = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
//             let textDesEncriptat = desEncriptador.update(content);

//             appendFile(`des${nomArxiuEncriptat}`, textDesEncriptat, (error) => {
//                 if(error) {
//                     throw error;
//                 } else {
//                     console.log('Arxiu desencriptat creat!');
//                 }           
//             });                               
//         });
//     });    
// }

// desEncriptador22('Encriptat_Codificat_creaArxiu.txt.b64');
// desEncriptador22('Encriptat_Codificat_creaArxiu.txt.hex');