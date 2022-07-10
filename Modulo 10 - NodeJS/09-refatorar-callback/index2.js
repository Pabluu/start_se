import fs from 'fs';
import { promisify } from 'util';

const readFilePromise = promisify(fs.readFile);

let alunos;

// fs.readFile('./alnos.json', (erro, dados) => {
//     if (erro) {
//         if (erro.errno === -2) {
//             console.error("Arquivo não encontrado");
//         } else {
//             console.error(erro);
//         }
//         return;
//     }
//     alunos = JSON.parse(dados);
//     console.log('alunos:', alunos);
// });

readFilePromise('./aluns.json').then((dados) => {
    alunos = JSON.parse(dados);
    console.log('alunos:', alunos);
}).catch((error) =>{
    console.error(error);
})