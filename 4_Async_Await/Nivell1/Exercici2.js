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

function getEmpleatDades(id) {
    let empleat = employees.find(item => item.id == id);
    return new Promise((resolve,reject) => {
        if (empleat) {
            console.log(`Nom empleat: ${empleat.name}`)
            resolve(getSalary(id));
        } else {
            reject(new Error('Empleat no trobat'));
        }
    });
}        
    
function getSalary(id) {
    let salari = salaries.find(item => item.id == id);
        return new Promise((resolve,reject) => {
        if (salari) {
            resolve(salari);
        } else {
            reject(new Error('Salari no trobat'));
        }
    });
}

getEmpleatDades(2) 
    .then(salari => console.log(`Salari: ${salari.salary}`)) 
    .catch(err => {console.log(err.message);});

setTimeout(() => {
  getEmpleatDades(4) 
    .then(salari => console.log(salari.salary)) 
    .catch(err => console.log(err.message)), 2000
});