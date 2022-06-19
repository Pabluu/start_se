//ESCOPO DE VARIAVEIS E CONSTANTES

/*let x = 10; //var global
console.log(x);

function soma(a, b){
    console.log(x);
    let z = a + b; //vars locais(z, a e b)
    return z;
}

let a;
console.log(a);
// console.log(z) //vai dar erro pois nn foi definido 
console.log(soma(4, 23));
;
*/


function calcularKmMilha(){
    let km = document.querySelector('#valorKm').value;
    console.log(km);

    document.querySelector('#resultado').textContent = km * 1.609;
}