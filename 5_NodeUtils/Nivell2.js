const zlib = require ('zlib');
const fs = require ('fs');
const path = require ('path');

// Funció que comprimeix un arxiu.

function compresioArxiu() {


            const compresor = zlib.createGzip();
            const llegeixArxiu = fs.createReadStream('creaArxiu.txt');
            const escriuArxiu = fs.createWriteStream('creaArxiu.txt.gz');

            llegeixArxiu.pipe(compresor).pipe(escriuArxiu);

            console.log(`\nArxiu .zip creat!\n`);
            
};    

compresioArxiu();

// Funció que llista per consola el contingut del directori d'usuari.

function llistaDirectoriUsuari(path) {


console.log(path);

}


llistaDirectoriUsuari(process.cwd());
