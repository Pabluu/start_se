document.querySelector('#t1').textContent = 'JavaScript  -Introdução';

document.querySelector('#t2').textContent = 'Exemplificando algumas funcionalidades';

const nome = prompt('Qual é o seu nome');

if(nome == null){
    alert(`fiedaputa`);
}
else{
    alert(`É sempre bom ter você aqui, ${nome}! \nVamos começar?`);

}