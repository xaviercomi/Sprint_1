let contador = 0;
let respuesta;
let interval;

interval = setInterval(missatgeDemora, 1000);

function missatgeDemora() {

    console.log(`${contador} Hola!`)
    contador++;

    if (contador % 10 == 0) {
        stopInterval();     
    }        
}

function stopInterval(){
    process.stdout.write('¿Quieres continuar? (s/n): \n');    
    process.stdin.on('data', function(data) { 
        respuesta = data.toString().trim()
        if ( respuesta == 's')  {
            process.exit();
        }  
    });
}
