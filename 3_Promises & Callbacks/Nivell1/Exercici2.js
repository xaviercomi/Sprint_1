
const saludar = (id, callback) => {
    callback(id)
};


function callback (id) {
    if(id = 0) {
        console.log(`Hola! ${id} ets un bot.`);
    } else {
        console.log(`Hola! ${id} ets humà.`);
    }
};

saludar(0, callback);



