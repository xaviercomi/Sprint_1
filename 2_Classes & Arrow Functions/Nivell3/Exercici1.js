let Vehiculo = function() {
    if ( this.constructor === Vehiculo) {
        throw new Error ('Classe abstracta. No puede ser instanciada');
    }
};

Vehiculo.prototype.ruedas = function() {
    throw new Error('Metodo abstracto!');
}


let Moto = function() {
    Vehiculo.apply();
};

Moto.prototype = Object.create(Vehiculo.prototype);
Moto.prototype.constructor = Moto;

Moto.prototype.ruedas = function() {
    console.log('2 ruedas');
}

let Berlina = function() {
    Vehiculo.apply();
}

Berlina.prototype = Object.create(Vehiculo.prototype);
Berlina.prototype.constructor = Berlina;

Berlina.prototype.ruedas = function() {
    console.log('4 ruedas');
}

let moto = new Moto();
let berlina = new Berlina();

moto.ruedas();
berlina.ruedas();

