const zlib = require('zlib');
const fs = require('fs');
const { exec } = require('child_process');

function compresioArxiu(arxiu) {
    let arxiuZIP = zlib.createGzip(),
        leeArxiu = fs.createReadStream(arxiu),
        escriuArxiu = fs.createWriteStream(arxiu + '.zip');

    leeArxiu.pipe(arxiuZIP).pipe(escriuArxiu);
    console.log('Arxiu ZIP creat');
}

compresioArxiu('creaArxiu.txt');

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



