const peliculas = [{
    id: 1,
    title: 'Iron man',
    year: 2008
},{
    id: 2,
    title: 'Spiderman : Homecoming',
    year: 2017
},{
    id: 3,
    title: 'Iron man',
    year: 2019
}];

//const peliculas = []; // para forzar el error.

const getPeliculas = () => {
    return new Promise((resolve, reject) => {
        if (peliculas.length === 0) {
            reject (new Error('No hay peliculas resgistradas'));
        }
        setTimeout(() => {
            resolve(peliculas);
        }, 5000);
    });
};

getPeliculas()
    .then( (pelis) => console.log(pelis)); //  
    //.then() puedes encadenar todas las promises necesarias.
    //.catch() en caso de tener un error.

 /* async function fechingData() { // en lugar del then.
    try {
    const pelis = await getPeliculas();
    console.log(pelis);
    } catch (err) {
        console.log(err.message);
    }
 }

 fechingData(); */