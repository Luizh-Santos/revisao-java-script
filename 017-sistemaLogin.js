let entrada = require('prompt-sync')();

let usuarios = [
    { Usuario: 'admin', senha: '1234', nome: 'Adiministrador' },
    { Usuario: 'jose', senha: 'abcd', nome: 'José da Silva' },
    { Usuario: 'maria', senha: 'xyz', nome: 'Maria de Souza' }
];

function olaUsuario(pNome) {
    console.log(`Olá ${pNome}, seja Bem-Vindo(a)!`);
}

function loginUsuario(pUsuario, pSenha) {
    let logado = false
    let i = 0
    for (i; i < usuarios.length; i++) {
        if (pUsuario == usuarios[i].Usuario && pSenha == usuarios[i].senha) {
            logado = true;
            break;
        }
    }
    if (logado) {
        return { sucesso: true, txtRetorno: usuarios[i].nome };
    } else {
        return { sucesso: false, txtRetorno: 'Usuário ou senha Inválidos!' };
    }
}


const usuario = entrada('Digite seu Usuário: ');
const senha = entrada('Digite sua Senha: ');

const retorno = loginUsuario(usuario, senha);

if(retorno.sucesso){
    let nome = retorno.txtRetorno;
    olaUsuario(nome);
}else{
    console.log(retorno.txtRetorno);
}

// if (loginUsuario(Usuario, senha)) {
//     let nome = entrada('Digite seu nome: ');
//     olaUsuario(nome);
// } else {
//     console.log('Usuário ou senha Inválidos!');
// }







