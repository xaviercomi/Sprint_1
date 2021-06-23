let contador = 0;
let interval;
let entrada;

interval = setInterval(missatgeDemora, 1000);

function missatgeDemora() {

    console.log(`${contador} Hola!`)
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
        if ( entrada == 'n')  {
             process.exit();
        } else if (entrada == 's')
            setInterval(missatgeDemora)
        }
    });       
}