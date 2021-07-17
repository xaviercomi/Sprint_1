/* 
Tinc dubtes sobre la creació de classes "abstractes" a javascrip.
He vist que amb ES6 es fa com a Java. Classes abstactes amb métodes abstractes que 
cal implementar en les classes que heretan i mètodes no abstractes que no cal implementar a 
les classes que hereten. També els mètodes estàtics a javascript pertanyen a la classe i no
a l'objecte. Ho entenc millor d'aquesta forma. Ho hem de parlar Omar. Aquest exercici és del 2014 
i ho trobo una mica enrevessat. No se si he acabat d'entendre el que fa. 
*/


// Classe abstracta
let Vehiculo = function() {
    if ( this.constructor === Vehiculo) {
        throw new Error ('Classe abstracta. No puede ser instanciada');
    }
};
// Mètode abstracte
Vehiculo.prototype.ruedas = function() {
    throw new Error('Metodo abstracto!');
}

// Aquest és el constructor, entenc...
let Moto = function() {
    Vehiculo.apply();
};
// Definim la forma com l'objecte es creara. Objecte tipus Vehiculo amb el constructor de moto. 
Moto.prototype = Object.create(Vehiculo.prototype);
Moto.prototype.constructor = Moto;

// Implementa el mètode abstracte de la classe Vehiculo
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

