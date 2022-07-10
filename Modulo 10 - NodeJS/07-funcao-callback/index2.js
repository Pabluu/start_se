import fs from 'fs';

let alunos;

fs.readFile('./alnos.json', (erro, dados) => {
    if (erro) {
        if (erro.errno === -2) {
            console.error("Arquivo não encontrado");
        } else {
            console.error(erro);
        }
        return;
    }
    alunos = JSON.parse(dados);
    console.log('alunos:', alunos);
});
