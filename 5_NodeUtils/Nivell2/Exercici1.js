// Funció que comprimeix un arxiu.

const zlib = require('zlib');
const fs = require('fs');
const { exec } = require('child_process');

function compresioArxiu(arxiu) {
    let compresor = zlib.createGzip(),
    llegeixArxiu = fs.createReadStream(arxiu),
    escriuArxiu = fs.createWriteStream(arxiu + '.zip');

    llegeixArxiu.pipe(compresor).pipe(escriuArxiu);
    console.log(`\nArxiu zip creat!\n`);
}

compresioArxiu('creaArxiu.txt');

// Llistat per consola de el contingut del directori d'usuari.

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

// Funció que descomprimeix un arxiu.

try {

    if ( fs.existsSync('./creaArxiu.txt.zip') ) {
        console.log('Arxiu trobat!')
        decompresorArxiu('creaArxiu.txt.zip');
    } else {
        console.log('Arxiu no trobat!')
    };

} catch(err) {
    console.error(err);
};

function decompresorArxiu(arxiu) {

    let decompresor = zlib.createGunzip(),
    llegeixArxiu = fs.createReadStream(arxiu),
    escriuArxiu = fs.createWriteStream(arxiu.slice(0,9) + '_unzip.txt');

    llegeixArxiu.pipe(decompresor).pipe(escriuArxiu);
    console.log(`Arxiu unzip creat!`);
};
