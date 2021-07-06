import { realpath, readFile, appendFile, unlink} from 'fs';
import crypto from 'crypto';

const key = crypto.randomBytes(24);
const iv = crypto.randomBytes(16);

const algorithm = 'aes-192-cbc';
           
setTimeout ( () => {
    codificadorBaseHexa('creaArxiu.txt')}, 2000 ); 

function codificadorBaseHexa(nomArxiu) {

    realpath(nomArxiu, (error, resolvedPath) => {
        if (error) {
            throw error;
        } else {
            console.log(resolvedPath + '\n');
        }
        readFile(resolvedPath, 'utf-8', (error, content) => {
            if (error) {
                throw error;
            } else {
                console.log(content + '\n');
            }

            let b64Encoded = Buffer.from(content).toString('base64');
            console.log(b64Encoded + '\n'); 

            appendFile(`Codificat_${nomArxiu}.b64`, b64Encoded, error => {
                if (error) {
                    throw error;
                } else {
                    console.log('arxiu codificat en base64 creat!')
                }
            });

            let hexEncoded = Buffer.from(content).toString('hex');
            console.log(hexEncoded + '\n'); 
    
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

setTimeout( () => {
    encripta22('Codificat_creaArxiu.txt.b64'), 
    encripta22('Codificat_creaArxiu.txt.hex')}, 5000);

function encripta22(nomArxiuCodificat) {

    realpath(nomArxiuCodificat, (error, resolvedPath) => {
        if (error) {
            throw error;
        } else {
            console.log(resolvedPath + '\n');
        }
        
        readFile(resolvedPath, 'utf-8', (error, content) => {
            if (error) {
                throw error;
            } else {
                console.log(content + '\n');
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
                        console.log('arxiu codificat eliminat');
                    }
                });            
            });                               
        });
    });    
};

setTimeout( () => {
    desEncriptador22('Encriptat_Codificat_creaArxiu.txt.b64');
    desEncriptador22('Encriptat_Codificat_creaArxiu.txt.hex')}, 7000);

function desEncriptador22(nomArxiuEncriptatCodificat) {

    realpath(nomArxiuEncriptatCodificat, (error, resolvedPath) => {
        if (error) {
            throw error;
        } else {
            console.log(resolvedPath + '\n');
        }
        
        readFile(resolvedPath, 'utf-8', (error, content) => {
            if (error) {
                throw error;
            } else {
                console.log(content + '\n');
            }  
            
            let desEncriptador = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
            let textDesEncriptat = desEncriptador.update(content);

            appendFile(`des${nomArxiuEncriptatCodificat}`, textDesEncriptat, (error) => {
                if(error) {
                    throw error;
                } else {
                    console.log('Arxiu desencriptat creat!');
                }           
            });                               
        });
    });    
}

setTimeout( () => { 
    decodificadorBase('desEncriptat_Codificat_creaArxiu.txt.b64')}, 9000);

function decodificadorBase (nomArxiuDesencriptatCodificatB64) {

    realpath(nomArxiuDesencriptatCodificatB64, (error, resolvedPath) => {
        if (error) {
            throw error;
        } else {
            console.log(resolvedPath + '\n');
        }
        readFile(resolvedPath, 'utf-8', (error, content) => {
            if (error) {
                throw error;
            } else {
                console.log(content + ' \n');
            }

            let b64Decoded = Buffer(content, 'base64').toString('ascii');
            console.log(b64Decoded + '\n'); 

            appendFile(`deCodificat_${nomArxiuDesencriptatCodificatB64}`, b64Decoded, error => {
                if (error) {
                    throw error;
                } else {
                    console.log('arxiu base64 decodificat creat!')
                }
            });
        });
    });
};    


setTimeout( () => { 
    decodificadorHexa('desEncriptat_Codificat_creaArxiu.txt.hex')}, 11000);

function decodificadorHexa (nomArxiuDesencriptatCodificatHex) {

    realpath(nomArxiuDesencriptatCodificatHex, (error, resolvedPath) => {
        if (error) {
            throw error;
        } else {
            console.log(resolvedPath + '\n');
        }
        readFile(resolvedPath, 'utf-8', (error, content) => {
            if (error) {
                throw error;
            } else {
                console.log(content + '\n');
            }

            let hexDecoded = Buffer(content, 'hex').toString('ascii');
            console.log(hexDecoded + '\n'); 

            appendFile(`deCodificat_${nomArxiuDesencriptatCodificatHex}`, hexDecoded, error => {
                if (error) {
                    throw error;
                } else {
                    console.log('arxiu hexadecimal decodificat creat!')
                }

            });
        });
    });
    
};
