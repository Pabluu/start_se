let nota1 = 5;
let nota2 = 5;

function media(n1, n2){
    return n1 + n2;
}

let resultado = media(nota1, nota2);

console.log(resultado);

if(resultado >= 6){
    console.log(`Aprovado com média ${resultado}.`);
}else if(resultado >= 4){
    console.log(`Em recuperação com média ${resultado}.`);
}else{
    consol.log(`Reprovado com média ${resultado}.`);
}

// pelo menos uma das comparações deve ser verdadeira
if(nota1 === 0 || nota2 === 0){
    console.log('Desclassificado, pois pelo meos uma das notas é igual a 0.')
}else{
    console.log('Classificado, pois pelo menos ambas as notas é igual a 0.');
}


// ambas as comparações devem ser verdadeiras
if(nota1 > 7 && nota2 > 7){
    console.log('Classificado, pois pelo menos ambas as notas é igual a 0.');
}else{
    console.log('Desclassificado, pois pelo meos uma das notas é igual a 0.')
}