const fs = require('fs');
const zlib = require('zlib');
const list = require('child_process');

const ZipFile = () => {
const arxiuZip = zlib.createGzip();
const write = fs.createWriteStream('/Users/Comi/Documents/CODE/Sprint_1/creaArxiu.txt.gz')
console.log(write);
}

ZipFile();