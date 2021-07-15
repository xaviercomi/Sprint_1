const zlib = require ('zlib');
const fs = require ('fs');
let path = require ('path');
const os = require ('os');


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
function llistaDirectoriUsuari() {

    path = os.homedir();
    const arxius = fs.readdirSync(path);
    console.log(`La ruta a la carpeta del usuari actual es:\n${path}`);
    console.log(arxius);
}

llistaDirectoriUsuari();
