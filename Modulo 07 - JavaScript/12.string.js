// STRING - CADEIA DE CARACTERES

let nome = 'Ana';

let idade = 20;

let conc = `${nome}, ${idade} anos`;
console.log(conc);

console.log(nome.length);
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());

let localizacao = 'Curitiba - PR';
// pegando uma parte da string
let estado = localizacao.substring(localizacao.length - 2);
console.log(estado);

let texto = 'basquete';
// substituir uma (sub)string por outra
let novoTexto = texto.replace('bas', 'ra');
