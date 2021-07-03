const fs = require('fs');
const zlib = require('zlib');
const { exec } = require('child_process');


const ZipFile = () => {
    let arxiuZip = zlib.createGzip(),
        read = fs.createReadStream('creaArxiu.txt'),
        write = fs.createWriteStream('creaArxiu.txt' + '.gz');

    read.pipe(arxiuZip).pipe(write);
}

ZipFile();

exec ("tree /f", (error, stdout, stderr) => {
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



