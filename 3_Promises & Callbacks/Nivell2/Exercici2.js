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

let getSalario = (employee) => {
    let salari = salaries.find(item => item.id == employee.id);
    console.log(employee);
    console.log(`Salari de ${employee.name}: ${salari.salary}`);
}

getSalario(employees[0]);
getSalario(employees[1]);

