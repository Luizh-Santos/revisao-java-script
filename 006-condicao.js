let entrada = require('prompt-sync')();

let nome = entrada('Digite seu nome: ');
let idade = entrada('Digite sua idade: ');

let validaidade = isNaN(idade);

//if (isNaN(idade))

if (validaidade)
{
    console.log(`${nome} insira um valor numérico na idade!`);
}
else {
    if (idade>18){
        console.log('Bem-Vindo ao site.');
    }
    if(idade<18){
        console.log('Você não possui idade para acessar o site');
    }
}