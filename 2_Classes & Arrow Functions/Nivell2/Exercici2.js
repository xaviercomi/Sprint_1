class Persona {

    constructor(nom) {
        this.nom = nom;
    }

    decirNombre() {
        console.log (this.nom);
    }
}

let persona = new Persona ('Xavier');
persona.decirNombre();

