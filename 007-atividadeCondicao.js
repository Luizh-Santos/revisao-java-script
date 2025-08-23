let entrada = require('prompt-sync')();

console.log('Bem-Vindo');


let nome = entrada('Digite seu nome: ');
let idade = entrada('Digite sua idade: ');
let amigo = entrada('Você é amigo do dono? S/N: ');


if (amigo == 's') {
    if (idade >= 18) {
        console.log('Acesso liberado e você ganhou uma bebida grátis')
    }
    else {
        console.log('Acesso Liberado')
    }
}
else {
    console.log('Acesso negado')
}

//if (nome === " ")|| (idade === " ")||(Amigo ===" ") -- Validação vazio
