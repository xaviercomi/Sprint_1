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
                resolve(console.log(`Usuari: ${usuari.name} id: ${usuari.id}`));
            } else {
                reject('Usuari no trobat');
            }
    });
}

const getSalario = (id) => {
        let salari = salaries.find(item => item.id == id);
        console.log(`Salari: ${salari.salary}`)
}

getEmpleado(2);
getSalario(2);
