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
        setTimeout(() => {
            if (usuari) {
                console.log(`Usuari: ${usuari.name} id: ${usuari.id}`);
            } else {
                reject('Usuari no trobat');
            }
            resolve();
        }, 1500)
        
    })
}

const getSalario = (Employee) => {
    let id = Employee.id;

}

async function cercaEmpleat(id) {
    const empleado = await getEmpleado(id);
}

cercaEmpleat(1);
getSalario()
