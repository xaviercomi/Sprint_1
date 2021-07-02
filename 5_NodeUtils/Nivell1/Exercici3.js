function llegeixArxiu() {

const fs = require('fs');
let path = fs.realpath(creaArxiu.txt);
fs.readFile(path, 'utf-8', (error, content) => {

        if(error) {
            throw error;
        } else {
            console.log(content);
        }

    });
}

llegeixArxiu();

