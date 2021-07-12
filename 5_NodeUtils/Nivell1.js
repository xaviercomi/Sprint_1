import { appendFile } from 'fs';
import { realpath, readFile } from 'fs';

// Exercici1. Funció que imprimeix missatge recursivament.

let interval = setInterval(missatgeDemora, 1000);
let contador = 0;
let entrada;

function missatgeDemora() {

    console.log(`${contador} !Hola!`)
    contador++;

    if (contador % 10 == 0) {
        stopInterval();     
    }        
}

function stopInterval(){
    clearInterval(interval);
    process.stdout.write('¿Quieres continuar? (s/n): ');
    process.stdin.on('data', data => { 
        entrada = data.toString().trim();
        if ( entrada == 's')  {
            clearInterval(interval);
            interval = setInterval(missatgeDemora, 1000);
        } else {
              process.exit();  
        }                
    });          
}

// Exercici2. Funció que escriu el seu nom a un arxiu. 

function creaArxiu () {

    appendFile('creaArxiu.txt','El nom de la funció és creaArxiu.', (error) => {

        if(error) {
            throw error;
        } else {
            console.log('Arxiu creat!');
        }

    });
}

creaArxiu();

// Funció que llegueix d'un arxiu i ho imprimeix per pantalla. 

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