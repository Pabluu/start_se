function mensagemGabriel() {
    const promiseMensagemGabriel = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Bem água!");
            resolve();
        }, 0);
    });

    return promiseMensagemGabriel;
}

function mesnsagemRafael() {
    console.log('Hidratado! Bora pra cima!!!');
}

mensagemGabriel().then(mesnsagemRafael);
// mesnsagemRafael();