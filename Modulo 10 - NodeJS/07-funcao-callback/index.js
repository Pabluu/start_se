function mensagemGabriel(callback){
    setTimeout(() => {
        console.log("Bem água!");
        callback();
    }, 0);
}

function mesnsagemRafael(){
    console.log('Hidratado! Bora pra cima!!!');
}

mensagemGabriel(mesnsagemRafael);
