

function auto (marca, matricula) {
    this.marca = marca,
    this.matricula = matricula
}
let auto1 = new auto('Seat','345SFG');
let auto2 = new auto('Skoda','567TRY');
let auto3 = new auto('Volkswagen','789XCV')

console.log('\nMarca: ' + auto1.marca, '\nMatricula: ' + auto1.matricula);
console.log('\nMarca: ' + auto2.marca, '\nMatricula: ' + auto2.matricula);
console.log('\nMarca: ' + auto3.marca, '\nMatricula: ' + auto3.matricula);
