

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

const getEmpleado = ( id => {
    return new Promise ( (resolve, reject) => {   
        let employee = employees.find(item => item.id == id);
        if (employee) {
            resolve(employee);
        } else {
            reject(err = new Error());
        }    
    });
});

getEmpleado(1)
    .then( employee => console.log(`Aquest ID pertany a: ${employee.name}`) )
    .catch( (err) => console.log(err.message) );



 