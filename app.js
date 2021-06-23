// Objects
let user = {
    name:  "John",
    age: 30,
    'likes birds': true // se tiene que utilizar con corchetes
};

delete user['likes birds'];

alert(user.name);
alert(user.age);
alert(user['likes birds']);