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

function cercaEmpleats(id) {

    const getEmpleado = (id) => {
        let usuariTrobat = employees.find(item => item.id == id);
        return new Promise((resolve, reject) => {
            if (usuariTrobat) {
                resolve(usuariTrobat);
            } else {
                reject(new Error(`Id:${id} no existeix.`));
            }
        });
    }      
    getEmpleado(id)
        .then((usuariTrobat) => {
            console.log(`Aquesta identificació pertany a: ${usuariTrobat.name}`);
        })
        .catch((err) => {
            console.log(err.message);
        });

};

cercaEmpleats(3);
cercaEmpleats(2);
cercaEmpleats(1);
cercaEmpleats(0);
 