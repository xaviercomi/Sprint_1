
const saludar = (id, callback) => {

    if(id == 0) {
        callback(`Hola! ${id} ets un bot.`);
    } else {
        callback(`Hola! ${id} ets humà.`);
    }

};


function callback (msg) {

    console.log(msg)
    
};

saludar(0, callback);
saludar(1, callback);





