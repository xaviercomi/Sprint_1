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

let getSalario = (id) => {
    let salari = salaries.find(item => item.id == id);
    console.log(salari.salary);
}

getSalario(1);
getSalario(2);
getSalario(3);