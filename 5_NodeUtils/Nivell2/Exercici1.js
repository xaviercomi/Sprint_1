const zlib = require('zlib');
const fs = require('fs');
const { exec } = require('child_process');

const AdmZip = require('adm-zip');


/* // Funció que comprimeix un arxiu.

function compresioArxiu() {
    const compresor = zlib.createGzip();
    const llegeixArxiu = fs.createReadStream('creaArxiu.txt');
    const escriuArxiu = fs.createWriteStream('creaArxiu.zip');

    llegeixArxiu.pipe(compresor).pipe(escriuArxiu);

    console.log(`\nArxiu zip creat!\n`);
}

compresioArxiu();

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
    const llegeixArxiu = fs.createReadStream('creaArxiu.zip');
    const escriuArxiu = fs.createWriteStream('unzip_creaArxiu.txt');
    const decompresor = zlib.createGunzip();

    llegeixArxiu.pipe(decompresor).pipe(escriuArxiu);
    if( fs.existsSync('unzip_creaArxiu.txt') ) {
        console.log(`Arxiu unzip creat!\n`);
    } else {
        console.log('Arxiu NO decomprimit');
    }    
};
 */

// Funcio que crea arxiu comprimit i el decomprimeix.

const gestionaZip = () => {
    const zip = new AdmZip();
    zip.addLocalFile('creaArxiu.txt');

    zip.writeZip('creaArxiu.zip');
    console.log('Arxiu comprimt!\n');
    
    zip.extractAllTo('unzip_creaArxiu.txt');
    console.log('Arxiu decomprimit!\n');
}

gestionaZip();

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

