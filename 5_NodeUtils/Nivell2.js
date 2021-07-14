const zlib = require ('zlib');
const fs = require ('fs');
const { spawn } = require('child_process');


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


directori = spawn('./');

if ( directori.hasChildNodes() ) {
      let arxius = [Node.ChildNodes]

     for( let i = 0; i < arxius.length; i++) {
          console.log(arxius[i]);
     }
}



