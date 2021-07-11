// Funció que comprimeix un arxiu.

const zlib = require('zlib');
const fs = require('fs');
const { exec } = require('child_process');


function compresioArxiu() {
    const compresor = zlib.createGzip();
    const llegeixArxiu = fs.createReadStream('creaArxiu.txt');
    const escriuArxiu = fs.createWriteStream('creaArxiu.zip');

    llegeixArxiu.pipe(compresor).pipe(escriuArxiu);

    console.log(`\nArxiu zip creat!\n`);
}

compresioArxiu();

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

    if ( fs.existsSync('creaArxiu.zip') ) {
        console.log('Arxiu trobat!\n')
        decompresorArxiu();
    } else {
        console.log('Arxiu no trobat!\n')
    };

} catch(err) {
    console.error(err);
};

function decompresorArxiu() {
    const decompresor = zlib.createUnzip();
    const llegeixArxiu = fs.createReadStream('creaArxiu.zip');
    const escriuArxiu = fs.createWriteStream('unzip_creaArxiu.txt');

    llegeixArxiu.pipe(decompresor).pipe(escriuArxiu);

    console.log(`Arxiu unzip creat!\n`);
};
