

function getName(nom) {
    return new Promise((resolve, reject) => {
        if(nom != 'Xavier') {
            reject(new Error(`Nom: ${nom}. No vàlid`))
        }
        setTimeout(() => resolve(`Nom: ${nom}. vàlid`), 2000)
    });
}

async function repNoms (nom) {
    try {
    const names = await getName(nom);
    console.log(names);
    } catch (err) {
      console.log(err.message);
    }
};

repNoms('Lucas');


setTimeout(() => repNoms('Xavier'), 2500);