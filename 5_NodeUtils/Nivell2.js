const zlib = require ('zlib');
const fs = require ('fs');
const { exec } = require('child_process');


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

exec('ls', (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }  
    console.log(`Ficheros: ${stdout}`);
  });


