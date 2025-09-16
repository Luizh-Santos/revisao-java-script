let entrada = require('prompt-sync')();

function olaUsuario(pNome) {
    console.log(`Olá ${pNome}, seja Bem-Vindo(a)!`);
}

function loginUsuario(pUsuario, pSenha) {
    if (pUsuario == 'admin' && pSenha == '1234') {
        return true;
    } else {
        return false;
    }
}

const Usuario = entrada('Digite seu Usuário: ');
const senha = entrada('Digite sua Senha: ');


if (loginUsuario(Usuario, senha)) {
    let nome = entrada('Digite seu nome: ');
    olaUsuario(nome);
} else {
    console.log('Usuário ou senha Inválidos!');
}





