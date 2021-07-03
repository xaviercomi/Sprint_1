let fs = require('fs');

function codificadorBaseHexa() {

    let readFile = fs.readFileSync(creaArxiu.txt, 'uft-8', (err, data) => {
        if(err) {
            console.log(`Error! ${error.mesage}`);
        } else {
            console.log(data);
        }
    });
    
    const arxiu = 'creaArxiu.txt';
    const base64 = btoa(arxiu);

}