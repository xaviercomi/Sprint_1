class Vehiculo {
    constructor(marca, matricula) {
        if(new.target===Vehiculo)
            throw new Error ('Classe abstracta no puede ser instanciada');
        this.marca = marca;
        this.matricula = matricula;
    }
}

class Coche extends Vehiculo {
    constructor(marca, matricula, puertas) {
        super(marca, matricula)
        this.puertas = puertas
    }   
    getPuertas() {
        console.log(`Numero de puertas: ${this.puertas}`);
    }  
}

function creaCoche(marca, matricula, puertas) {

    let coche = new Coche(marca, matricula, puertas, puertas);

};

(() => {
    let coche = new Coche('Seat','345SFG', 5, 4);
    console.log(coche);
    coche.getPuertas();
})();    
