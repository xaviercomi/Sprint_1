// Funció que comprimeix un arxiu.

const zlib = require('zlib');
const fs = require('fs');
const { exec } = require('child_process');

function compresioArxiu(arxiu) {
    let arxiuZIP = zlib.createGzip(),
    llegeixArxiu = fs.createReadStream(arxiu),
    escriuArxiu = fs.createWriteStream(arxiu + '.zip');

    llegeixArxiu.pipe(arxiuZIP).pipe(escriuArxiu);
    console.log('\nArxiu ZIP creat!\n');
}

compresioArxiu('creaArxiu.txt');

// Llistat per consola de el contingut del directori d'usuari

exec ("tree", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

// Descomprimir l'arxiu i mostrar contingut per consola. 

fs.createReadStream('creaArxiu.txt.zip').pipe(unzip.Extract({path: 'creaArxiu.txt' }));
