const fs = require ('fs');
const crypto = require ('crypto');

const key = crypto.randomBytes(24);
const iv = crypto.randomBytes(16);

const algorithm = 'aes-192-cbc';
           
function codificadorBaseHexa() {

    const nomArxiu = 'creaArxiu.txt';
    fs.readFile('./5_NodeUtils/creaArxiu.txt', 'utf-8', (error, contentA) => {
        
        if (error) {
            throw error;
        } else {
            console.log(contentA + '\n');
        }

        let b64Encoded = Buffer.from(contentA, 'utf-8').toString('base64');
        console.log(b64Encoded + '\n'); 

        fs.appendFile(`./5_NodeUtils/Codificat_b64_${nomArxiu}`, b64Encoded, error => {
            if (error) {
                throw error;
            } else {
                console.log('arxiu codificat en base64 creat!')
            }
        });


        let hexEncoded = Buffer.from(contentA, 'utf-8').toString('hex');
        console.log(hexEncoded + '\n'); 

        fs.appendFile(`./5_NodeUtils/Codificat_hex_${nomArxiu}`, hexEncoded, error => {
            if (error) {
                throw error;
            } else {
                console.log('arxiu codificat en hexadecimal creat!')
            }

        })

    });    

}

codificadorBaseHexa();


/*     encripta22('Codificat_b64_creaArxiu.txt'), 
    encripta22('Codificat_hex_creaArxiu.txt')}, 5000);

function encripta22(nomArxiuCodificat) {

    realpath(nomArxiuCodificat, (error, resolvedPath) => {
        if (error) {
            throw error;
        } else {
            console.log(resolvedPath + '\n');
        }
        
        readFile(resolvedPath, 'utf-8', (error, contentC) => {
            if (error) {
                throw error;
            } else {
                console.log(contentC + '\n');
            }  
            
            let encriptador = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
            let textEncriptat = encriptador.update(contentC);

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
    desEncriptador22('Encriptat_Codificat_b64_creaArxiu.txt');
    desEncriptador22('Encriptat_Codificat_hex_creaArxiu.txt')}, 7000);

function desEncriptador22(nomArxiuEncriptatCodificat) {

    realpath(nomArxiuEncriptatCodificat, (error, resolvedPath) => {
        if (error) {
            throw error;
        } else {
            console.log(resolvedPath + '\n');
        }
        
        readFile(resolvedPath, 'utf-8', (error, contentD) => {
            if (error) {
                throw error;
            } else {
                console.log(contentD + '\n');
            }  
            
            let desEncriptador = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
            let textDesEncriptat = desEncriptador.update(contentD);

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
    decodificadorBase('desEncriptat_Codificat_b64_creaArxiu.txt')}, 9000);

function decodificadorBase (nomArxiuDesencriptatCodificatB64) {

    realpath(nomArxiuDesencriptatCodificatB64, (error, resolvedPath) => {
        if (error) {
            throw error;
        } else {
            console.log(resolvedPath + '\n');
        }
        readFile(resolvedPath, 'utf-8', (error, contentE) => {
            if (error) {
                throw error;
            } else {
                console.log(contentE + ' \n');
            }

            let b64Decoded = Buffer.from(contentE, 'base64').toString('utf-8');
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
    decodificadorHexa('desEncriptat_Codificat_hex_creaArxiu.txt')}, 11000);

function decodificadorHexa (nomArxiuDesencriptatCodificatHex) {

    realpath(nomArxiuDesencriptatCodificatHex, (error, resolvedPath) => {
        if (error) {
            throw error;
        } else {
            console.log(resolvedPath + '\n');
        }
        readFile(resolvedPath, 'utf-8', (error, contentF) => {
            if (error) {
                throw error;
            } else {
                console.log(contentF + '\n');
            }

            let hexDecoded = Buffer.from(contentF, 'hex').toString('utf-8');
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
    
}; */
