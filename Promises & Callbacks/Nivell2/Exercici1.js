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
    let usuariTrobat = employees.find(item => item.id == id);
    return new Promise((resolve, reject) => {
        if (usuariTrobat) {
            resolve(usuariTrobat);
        } else {
            reject(new Error(`Id:${id} no existe.`));
        }
    });
}      
getEmpleado(0)
    .then((usuariTrobat) => {
        console.log(`Aquesta identificació pertany a: ${usuariTrobat.name}`);
    })
    .catch((err) => {
        console.log(err.message);
    });

 