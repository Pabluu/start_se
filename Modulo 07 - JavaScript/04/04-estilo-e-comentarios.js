document.querySelector('#t1').textContent = 'JavaScript  -Introdução';

document.querySelector('#t2').textContent = 'Exemplificando algumas funcionalidades';

// apresenta uma msg e esconde o form de login

/*
function bemVindo(){
    alert(`Olá ${nome}! Seja bem-vindo`);

    document.getElementById('formulariologin').style.display = 'none';
}
*/

function mudaCorFundo(){
    const menu = document.querySelector("#coresFundo");
    const cor = menu.options[menu.selectedIndex].value;
    document.body.style.background = cor;
}