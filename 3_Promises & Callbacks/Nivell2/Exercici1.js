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

let getEmpleado = ( (id) => {
    let empleatTrobat = employees.find(item => item.id === id);
    return new Promise ( (resolve, reject) => {   
        if (empleatTrobat) {
            resolve(empleatTrobat);
        } else {
            reject(err = new Error());
        }    
    });
});

getEmpleado()
    .then(  empleatTrobat => console.log(`Aquesta identificació pertany a: ${empleat.name}`) )
    .catch( (err) => console.log(err.message));

getEmpleado(2);

 