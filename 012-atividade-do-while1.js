let entrada = require('prompt-sync')();

const senha = '1234';

let senhaDigitada = '';

let senhaErrada = 0;



do {
    senhaDigitada = entrada('Digite a senha para acessar: ');
    senhaErrada++


    if (senhaErrada >= 3) {

        console.log('Usúario Bloqueado!')
       return;
    };

}
while (senhaDigitada !== senha);

console.log('Bem-Vindo ao sistema de login!')









