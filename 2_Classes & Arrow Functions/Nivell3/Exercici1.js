let stockVehiculos = [10];


class Vehiculo {
    constructor(tipo, marca, matricula) {
        this.tipo = tipo;
        this.marca = marca;
        this.matricula = matricula;
    }
}

function creaVehicle(tipo, marca, matricula) {
     
    let vehiculo = new Vehiculo(tipo, marca, matricula);
    stockVehiculos.push(vehiculo);
    console.log(stockVehiculos);

}

creaVehicle('moto', 'Seat','345SFG');
creaVehicle('triciclo', 'Skoda','567TRY');
creaVehicle('automovil', 'Volkswagen','789XCV');



