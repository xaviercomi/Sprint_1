
let salutacio = id => {
    if(id == 0) {
        console.log(`Hola! ${id} ets un bot.`);
    } else {
        console.log(`Hola! ${id} ets humà.`);
    }
};

function usuari (id, callback) {
   callback(id);
};

usuari(0, salutacio);
usuari(1, salutacio);
