

function Pelota (nomInstancia, grupo, definicio) {
    this.nomInstancia = nomInstancia;
    this.definicio = definicio;
    this.grupo = grupo;
    nomInstancia = new Animal(grupo, definicio);
}
