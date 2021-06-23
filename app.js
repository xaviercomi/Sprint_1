// El bucle for in

let user = {
    name: 'John',
    age: 30,
    isAdmin: true,
};

for (let key in user) {
    alert( key + ' : ' + user[key] )
}

let codes = {
    '+49': 'Germany',
    '+41': 'Switzerland',
    '+44': 'Great Britain',
    '+1': 'USA',
};

for (let code in codes){
    alert( code );
    alert( codes[code] );
}

// Combinar dos objetos

let coche = {color: 'rojo', puertas: 4, gasolina: true};

let todoTerreno = {cilindros: 8};
let familiar = {airbags: true};

Object.assign(coche, todoTerreno, familiar);

for(let key in coche) {
    alert( key );
    alert( coche[key] );
}