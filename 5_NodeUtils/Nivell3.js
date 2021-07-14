const fs = require ('fs');
const crypto = require ('crypto');
const { exit } = require('process');

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

        fs.appendFile(`Codificat_b64_${arxiu}`, b64Encoded, error => {
            if (error) {
                throw error;
            } else {
                console.log('arxiu codificat en base64 creat!\n')
            }
        });

        let hexEncoded = Buffer.from(contentA, 'utf-8').toString('hex');

        fs.appendFile(`Codificat_hex_${arxiu}`, hexEncoded, error => {
            if (error) {
                throw error;
            } else {
                console.log('arxiu codificat en hexadecimal creat!\n')
            }
        });

        if ( fs.existsSync(`Codificat_b64_creaArxiu.txt`) ) {
            encriptaBaseHexa('Codificat_b64_creaArxiu.txt');

        }
        if (fs.existsSync(`Encriptat_Codificat_b64_creaArxiu.txt`)) {
            encriptaBaseHexa('Codificat_hex_creaArxiu.txt');
        }

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
                console.log('\nArxiu encriptat creat!');
            }
            
            process.stdout.write('Vols eliminar els arxius codificats? (s/n): ');

            process.stdin.on('data', data => { 
                entrada = data.toString().trim(); 

                if ( entrada == 's') {
                    fs.unlink(arxiu, error => {
                        if (error) {
                            console.log('Arxiu NO eliminat!', error.misssage);                        
                        } else {
                            console.log('Arxiu codificat eliminat...');  
                            if ( fs.existsSync('Encriptat_Codificat_hex_creaArxiu.txt') ) {
                                desEncriptador('Encriptat_Codificat_b64_creaArxiu.txt');        
                            }   
                            if ( fs.existsSync('DesEncriptat_Codificat_hex_creaArxiu.txt') )   {
                                desEncriptador('Encriptat_Codificat_hex_creaArxiu.txt');   
                            }              
                        }
                    });                  
                } else {
                    process.exit();
                }
            });                 
        });    
    });

};  

//Funció que desencripta arxius.
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
                if ( fs.existsSync(`DesEncriptat_Codificat_hex_creaArxiu.txt`) ) {
                    decodificadorBase64('DesEncriptat_Codificat_b64_creaArxiu.txt'); 
                    decodificadorHexa('DesEncriptat_Codificat_hex_creaArxiu.txt');   
                }                                 
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
    
}; 