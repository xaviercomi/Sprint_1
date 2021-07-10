let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

const getEmpleado = (id) => {
    let usuari = employees.find(item => item.id == id);
    return new Promise ((resolve, reject) => {
            if (usuari) {
                resolve(usuari);
            } else {
                reject('Usuari no trobat');
            }
    });
}

const getSalario = (employee) => {
    salari = salaries.find(item => item.id == employee.id);
    return new Promise( (resolve, reject) => {
        if (salari) {
            setTimeout( resolve(salari),2000 );   
        } else {
            reject('ID no trobada!');
        }
    });  
};

getEmpleado(2)
    .then( usuari => console.log(`Usuari: ${usuari.name} id: ${usuari.id}`) )
    .catch( error => console.log(error.message) );

getSalario(employees[0])
    .then( salari => console.log(`Usuari amb id [${salari.id}] Salari: ${salari.salary}`) )
    .catch( error => console.log(error) );

// Funció asíncrona

const fetchingEmpleat = async (id) => {
    try{
        const fitxaEmpleat = await getEmpleado(id);
        console.log(fitxaEmpleat);
        const salari = await getSalario(fitxaEmpleat);
        console.log(`Salari: ${salari.salary}`);
    } catch (err) {
        console.log(err.message);
    }    
}

fetchingEmpleat(1);
