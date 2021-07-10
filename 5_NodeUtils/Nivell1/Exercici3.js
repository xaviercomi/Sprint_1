import { realpath, readFile } from 'fs';

function llegeixArxiu() {

    realpath('creaArxiu.txt', (error, resolvedPath) => { 

        if (error) {
            throw error;
        } else {
        console.log(resolvedPath);
        }

        readFile(resolvedPath, 'utf-8', (error, content) => {
                if (error) {
                    throw error;
                } else {
                    console.log(content);
                }
        });
    });  

}

llegeixArxiu();

