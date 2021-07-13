import { createGzip, createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

// Funció que comprimeix un arxiu.

function compresioArxiu() {

            const compresor = createGzip();
            const llegeixArxiu = createReadStream('./5_NodeUtils/creaArxiu.txt');
            const escriuArxiu = createWriteStream('./5_NodeUtils/creaArxiu.txt.gz');

            llegeixArxiu.pipe(compresor).pipe(escriuArxiu);

            console.log(`\nArxiu .zip creat!\n`);
            
};    

compresioArxiu();

// Funció que descomprimeix un arxiu.

async function decompresioArxiu() {
    
    const decompresor = createGunzip();
    const llegeixArxiu = createReadStream('./5_NodeUtils/creaArxiu.txt.gz');
    const escriuArxiu = createWriteStream('./5_NodeUtils/unzip_creaArxiu.txt');

    llegeixArxiu.pipe(decompresor).pipe(escriuArxiu);

    console.log(`Arxiu unzip creat!\n`);

};

decompresioArxiu();









