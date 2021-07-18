// Un altre funció anomenada per una funció asíncrona que retorna una promise 
// amb una demora de 2 segons
const anomenada = () => {
    return new Promise (resolve => {
        setTimeout( () => {
            resolve ('resposta amb demora de 2 segons...') 
        }, 2000);
    });
} 


// Funció asíncrona que anomena un altre. 
async function Anomena() {
    try {
        const unAltre = await anomenada();
        console.log(unAltre);
    } catch {
        console.log('funció no funciona');
    }
};

Anomena();