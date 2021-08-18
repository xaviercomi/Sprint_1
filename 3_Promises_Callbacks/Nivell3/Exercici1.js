
let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
}];

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}];


const getEmpleado = (id => {

    return new Promise((resolve, reject) => {
        let employee = employees.find(item => item.id == id);
        if (employee) {
            resolve(employee);
        } else {
            reject(err = new Error('empleat no trobat'));
        }
    });

});


let getSalario = (employee => {


    return new Promise((resolve, reject) => {
        let salari = salaries.find(item => item.id == employee.id);
        if (salari) {
            resolve(salari);
        } else {

            reject(err1 = new Error('salari no trobat'));
        }
    });

});


getEmpleado(3)
    .then(employee => {
        console.log(`ID[${employee.id}] pertany a: ${employee.name}`)

        getSalario(employee)
            .then(salari => console.log(`Usuari ID[${salari.id}] salari: ${salari.salary}`))
            .catch((err) => console.log("ERROR SALARIO: " + err));

    })
    .catch((err1) => console.log("ERROR EMPLEADO: " + err1));