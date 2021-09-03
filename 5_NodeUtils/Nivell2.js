const zlib = require('zlib');
const fs = require('fs');
let path = require('path');
const { exec } = require('child_process');
const os = require('os');
const { pipeline } = require('stream');


// Funció que comprimeix un arxiu.
function compresioArxiu() {
            const compresor = zlib.createGzip();
            const llegeixArxiu = fs.createReadStream('creaArxiu.txt');
            const escriuArxiu = fs.createWriteStream('creaArxiu.txt.gz');

            pipeline(llegeixArxiu, compresor, escriuArxiu, (err) => {
                if (err) {
                    console.error('File does not exists!', err);
                    process.exitCode = 1;
                } else {
                    console.log(`\nArxiu.zip creat!\n`);
                }
            });
};    

compresioArxiu();

// Funció que llista per consola el contingut del directori d'usuari.
function llistaDirectoriUsuari() {


    const sistema = os.type();
    
    switch (sistema) {
        case 'Darwin':
            exec ('ls', (error, stdout, stderr) => {
                if (error) {
                    console.error(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    return;
                }
                console.log(`${stdout}`);
            });
            break;
        case 'Linux':
            exec ('ls', (error, stdout, stderr) => {
                if (error) {
                    console.error(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    return;
                }
                console.log(`stdout:\n${stdout}`);
            });
            break;
        case 'Windows_NT':
            exec ('dir', (error, stdout, stderr) => {
                if (error) {
                    console.error(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    return;
                }
                console.log(`stdout:\n${stdout}`);
            });
            break;
        default:
            console.log('Sistema operatiu no detectat!');
    };

}

llistaDirectoriUsuari();
