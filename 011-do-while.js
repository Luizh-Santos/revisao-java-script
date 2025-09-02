let entrada = require('prompt-sync')();

const senha = '1475369';

let senhaDigitada ='';

do {
     senhaDigitada = entrada('Digite a senha para acessar: ');
}while (senhaDigitada !== senha);

console.log('Bem-Vindo ao sistema de login!');

