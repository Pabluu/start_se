const cidades = [];

// PUSH - Adiciona um item no final

cidades.push('Rio', 'São Paulo');

console.log(cidades);

cidades.push('Cuiabá', 'Parana');


// UNSHIFT - Adiciona no começo
cidades.unshift('Campinas', 'Araxa');
console.log(cidades);

// POP - Remove o ultimo elemento, e retorna elemento removido
let cidadeRemovida = cidades.pop();
console.log(cidadeRemovida);

// SHIFT - Remove o primeiro elemento, e retorna o elemento removido
cidadeRemovida = cidades.shift();
console.log(cidadeRemovida);

// SPLICE - Remove 1 ou+ itens; utiliza-se um índice
const indice = cidades.indexOf('Rio');
cidades.splice(indice);

console.log(cidades);


//CONCAT - CONCATENAÇÃO DE ARRAYS
const cidadesInterior = ['Araraquara', 'Araras', 'Limeira'];
const regioesMetropolitanas = ['Campinas', 'São Paulo'];

const cidadesInteriorMetropolitana = cidadesInterior.concat(regioesMetropolitanas);

console.log(cidadesInteriorMetropolitana);