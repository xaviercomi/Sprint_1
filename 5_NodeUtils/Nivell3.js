const fs = require ('fs');
const crypto = require ('crypto');

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
function encripta(arxiu) {
    
    return new Promise( (resolve, reject) => {

        fs.readFile(arxiu, (error, contentC) => {
            if (error) {
                throw error;
            }
            let encriptador = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
            let textEncriptat = encriptador.update(contentC);

            fs.appendFile(`Encriptat_${arxiu}`, textEncriptat, (error) => {
                if (error) {
                    reject('Arxiu NO encriptat');
                } else {
                    resolve('Arxiu encriptat creat!');
                }
                
            });   
        });
    });
};        
// Funció que elimina arxius.
function elimina(arxiu) {

    return new Promise ( (resolve, reject) => {
        
        process.stdout.write('Vols eliminar arxiu codificat? [0]si [1]no: ');
        process.stdin.on('data', data => { 
            resposta = data;
            if ( resposta == 0) {

                fs.unlink(arxiu, error => {
                    if (error) {
                        reject('Arxiu NO eliminat!');                        
                    } else {
                        resolve( ('Arxiu codificat eliminat...') );             
                    }
                });   

            } else {
                process.exit()
            }
        });   
    });
};

//Funció que desencripta arxius.
function desencripta(arxiu) {

    return new Promise ( ( resolve, reject) => {

        fs.readFile(arxiu, (error, contentD) => {
            if (error) {
                throw error;
            }
            let desEncriptador = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
            let textDesEncriptat = desEncriptador.update(contentD);

            fs.appendFile(`Des${arxiu}`, textDesEncriptat, (error) => {
                if(error) {
                reject(error);
                } else {
                    resolve(`Arxiu: ${arxiu} desencriptat...`);                                     
                }           
            });                               
        });  
    });           
};

//Funció que decodifica arxius en base64.
function decodificaBase64(arxiu) {

    return new Promise ( (resolve, reject) => {

        fs.readFile(arxiu, 'utf-8', (error, contentE) => {
                if (error) {
                    throw error;
                }
                let b64Decoded = Buffer.from(contentE, 'base64').toString();

                fs.appendFile('DesEncriptat_Decodificat_b64_creaArxiu.txt', b64Decoded, error => {
                    if (error) {
                        reject('arxiu base64 no decodificat!');
                    } else {
                        resolve('arxiu base64 decodificat...')
                    }
                });
        }); 
    });           
}; 

//Funció que decodifica arxius en hexadecimal.
function decodificaHexadecimal(arxiu) {

    return new Promise ( (resolve, reject) => {

        fs.readFile(arxiu, 'utf-8', (error, contentF) => {
            if (error) {
                throw error;
            }
            let hexDecoded = Buffer.from(contentF, 'hex').toString();

            fs.appendFile('DesEncriptat_Decodificat_hex_creaArxiu.txt', hexDecoded, error => {
                if (error) {
                    reject('Arxiu hexadecimal no decodificat!');
                } else {
                    resolve('arxiu hexadecimal decodificat...');
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
        const resultatC = await encripta('Codificat_b64_creaArxiu.txt');
        console.log(resultatC);
        const resultatD = await encripta('Codificat_hex_creaArxiu.txt');
        console.log(resultatD);
        const resultatE = await elimina('Codificat_b64_creaArxiu.txt');
        console.log(resultatE);
        const resultatF = await elimina('Codificat_hex_creaArxiu.txt');
        console.log(resultatF);
        const resultatG = await desencripta('Encriptat_Codificat_b64_creaArxiu.txt');
        console.log(resultatG);
        const resultatH = await desencripta('Encriptat_Codificat_hex_creaArxiu.txt');
        console.log(resultatH);
        const resultatI = await decodificaBase64('DesEncriptat_Codificat_b64_creaArxiu.txt');
        console.log(resultatI);
        const resultatJ = await decodificaHexadecimal('DesEncriptat_Codificat_hex_creaArxiu.txt');
        console.log(resultatJ);
        process.exit();
    } catch (error) {
        console.log(error.message);     
    }  
})();

