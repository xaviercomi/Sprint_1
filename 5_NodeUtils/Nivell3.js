const fs = require ('fs');
const crypto = require ('crypto');
const { Console } = require('console');

const key = crypto.randomBytes(24);
const iv = crypto.randomBytes(16);

const algorithm = 'aes-192-cbc';

//Funció que codifica un arxiu en base64.
function codificadorBase64(arxiu) {

    return new Promise( (resolve, reject) => {
        
        fs.readFile(arxiu, 'utf-8', (error, contentA) => {    
            if (error) {
                reject(error);
            }
            let b64Encoded = Buffer.from(contentA, 'utf-8').toString('base64');

            fs.appendFile(`Codificat_b64_${arxiu}`, b64Encoded, error => {
                if (error) {
                    reject(error)
                } else {
                    resolve('Arxiu codificat en base64 creat!');
                }
            });
        });
    });
};     

//Funció que codifica un arxiu en Hexadeximal.
function codificadorHexadecimal(arxiu) {

    return new Promise( (resolve, reject) => {
        
        fs.readFile(arxiu, 'utf-8', (error, contentB) => {    
            if (error) {
                reject(error);
            }
            let hexEncoded = Buffer.from(contentB, 'utf-8').toString('hex');
            
            fs.appendFile(`Codificat_hex_${arxiu}`, hexEncoded, error => {
                if (error) {
                    reject(error);
                } else {
                    resolve('Arxiu codificat en hexadecimal creat!');
                }            
            });
        });    
    });       
};

//Funció que encripta arxius i elimina els codificats.
function encriptaElimina(arxiu) {
    
    fs.readFile(arxiu, 'utf-8', (error, contentC) => {
        if (error) {
            throw error;
        }
        let encriptador = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
        let textEncriptat = encriptador.update(contentC);

        fs.appendFile(`Encriptat_${arxiu}`, textEncriptat, (error) => {
            if (error) {
                throw error;
            } else {
                console.log('\nArxiu encriptat creat!');
            }
            
            process.stdout.write('Vols eliminar arxiu codificat? (s/n): ');

            process.stdin.on('data', data => { 
                entrada = data.toString(); 

                if ( entrada == 's') {
                    fs.unlink(arxiu, error => {
                        if (error) {
                            console.log('Arxiu NO eliminat!', error.misssage);                        
                        } else {
                            console.log('Arxiu codificat eliminat...');             
                        }
                    });                  
                } else {
                    process.exit();
                }
            });
        });    
    });
};

(async () => {
    try {
        const resultatA = await codificadorBase64('creaArxiu.txt');
        console.log(resultatA);
        const resultatB = await codificadorHexadecimal('creaArxiu.txt');
        console.log(resultatB);
        const resultatC = await encriptaElimina('Codificat_b64_creaArxiu.txt');
        console.log(resultatC);
        const resultatD = await encriptaElimina('Codificat_hex_creaArxiu.txt');
        console.log(resultatD);
    } catch (error) {
        //console.log(error.message);     
    }  
})();

 
  

/* //Funció que desencripta arxius.
function desEncriptador(arxiu) {

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
                console.log('Arxiu desencriptat...');                                     
            }           
        });                               
    });         
};


function decodificadorBase64(arxiu) {

    fs.readFile(arxiu, 'utf-8', (error, contentE) => {
            if (error) {
                throw error;
            }
            let b64Decoded = Buffer.from(contentE, 'base64').toString('utf-8');

            fs.appendFile('DesEncriptat_Decodificat_b64_creaArxiu.txt', b64Decoded, error => {
                if (error) {
                    throw error;
                } else {
                    console.log('arxiu base64 decodificat...')
                }
            });
        });    
        
};     


function decodificadorHexa(arxiu) {

    fs.readFile(arxiu, 'utf-8', (error, contentF) => {
        if (error) {
            throw error;
        }
        let hexDecoded = Buffer.from(contentF, 'hex').toString('utf-8');
        console.log(hexDecoded + '\n'); 

        fs.appendFile('DesEncriptat_Decodificat_b64_creaArxiu.txt', hexDecoded, error => {
            if (error) {
                throw error;
            } else {
                console.log('arxiu hexadecimal decodificat...')
            }
        });
    });     
    
};  */ 