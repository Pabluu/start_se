// OPERADOR TERNÁRIO

let nota1 = 5;
let nota2 = 5;

function media(n1, n2) {
    return n1 + n2;
}

let resultado = media(nota1, nota2);

let situacao = resultado >= 6 ? 'Aprovado' :
    resultado >= 4 ? 'Em recuperação' :
        'Reprovado';

console.log(situacao);



// SWITCH

let opcao = 2;

switch (opcao) {
    case 1:
        console.log('Cadastrando...');
        break;

    case 2:
        console.log('Consultando...');
        break;

    case 3:
        console.log('Atualizando...');
        break;

    case 4:
        console.log('Apagando...');
        break;
    default:
        console.log('Saindo');
}