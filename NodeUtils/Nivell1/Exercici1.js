// ATENCIO - Cal executar al terminal.

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