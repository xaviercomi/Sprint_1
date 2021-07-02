function llegeixArxiu() {

const fs = require('fs');

let arxiu = fs.readdir('C:\Users\formacio\Documents\Sprint_1\creaArxiu.txt', (error) => {

        if(error) {
            throw error;
        } else {
            console.log(arxiu);
        }

    });
}

llegeixArxiu();

