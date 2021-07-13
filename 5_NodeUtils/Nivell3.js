const fs = require ('fs');
const crypto = require ('crypto');

const key = crypto.randomBytes(24);
const iv = crypto.randomBytes(16);

const algorithm = 'aes-192-cbc';

//Funció que codifica el mateix arxiu en base64 i hexadecimal.

codificadorBaseHexa('creaArxiu.txt');

function codificadorBaseHexa(arxiu) {

    fs.readFile(arxiu, 'utf-8', (error, contentA) => {
        
        if (error) {
            throw error;
        }

        let b64Encoded = Buffer.from(contentA, 'utf-8').toString('base64');
        console.log(`\n ${b64Encoded}  \n`); 

        fs.appendFile(`Codificat_b64_${arxiu}`, b64Encoded, error => {
            if (error) {
                throw error;
            } else {
                console.log('arxiu codificat en base64 creat!\n')
            }
        });

        let hexEncoded = Buffer.from(contentA, 'utf-8').toString('hex');
        console.log(hexEncoded + '\n'); 

        fs.appendFile(`Codificat_hex_${arxiu}`, hexEncoded, error => {
            if (error) {
                throw error;
            } else {
                console.log('arxiu codificat en hexadecimal creat!\n')
            }
        });

        const path = `Codificat_hex_${arxiu}`;
        if ( fs.existsSync(path) ) {
            encriptaBaseHexa('Codificat_b64_creaArxiu.txt');
            encriptaBaseHexa('Codificat_hex_creaArxiu.txt');
        };

    });   

}

//Funció que encripta dos arxius codificats en base64 i hexadecimal.
function encriptaBaseHexa(arxiu) {
    
    fs.readFile(arxiu, 'utf-8', (error, contentC) => {
        if (error) {
            throw error;
        } else {
            console.log(contentC + '\n');
        }  
        
        let encriptador = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
        let textEncriptat = encriptador.update(contentC);

        fs.appendFile(`Encriptat_${arxiu}`, textEncriptat, (error) => {
            if (error) {
                throw error;
            } else {
                console.log('Arxiu encriptat creat!');
            }
            
            process.stdout.write('Vols eliminar els arxius codificats?: ');
            process,stdin.on('data', data => { 
                entrada = data.toString().trim(); 

            if ( entrada = 's') {
                fs.unlink(arxiu, error => {
                    if (error) {
                        console.log('Arxiu NO eliminat!', error.misssage);
                        
                    } else {
                        console.log('arxiu codificat eliminat');
                    }
                });                  
            } else {
                process.exit
            }              
        });                               
    });      
};  


/* function desEncriptadorBaseHexa(arxiu) {

    fs.readFile(arxiu, 'utf-8', (error, contentD) => {
        if (error) {
            throw error;
        }
        let desEncriptador = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
        let textDesEncriptat = desEncriptador.update(contentD);

        fs.appendFile(`Des${arxiu}`, textDesEncriptat, (error) => {
            if(error) {
               throw error;
            } else {
                console.log('Arxiu desencriptat creat!');
            }           
        });                               
    });
              
};

desEncriptadorBaseHexa('Encriptat_Codificat_b64_creaArxiu.txt');
desEncriptadorBaseHexa('Encriptat_Codificat_hex_creaArxiu.txt');
 */
/* setTimeout( () => { 
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