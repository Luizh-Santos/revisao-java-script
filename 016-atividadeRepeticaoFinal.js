/*
        Crie um programa que peça ao usúario um valor
        inicial e um valor final para gerar tabuadas
        do valor inicial até o final
*/



let entrada = require('prompt-sync')();

let t1 = entrada('Digite um número para ver a tabuada: ');
let t2 = entrada('Digite um número para ver a tabuada: ');
 



while (t1 <= t2) {

    for (let contador = 1; contador <= 10; contador++) {
        console.log(`${t1} x ${contador} = ${parseInt(t1 * contador)}`);
    }
    t1++;
    }


    while (t2 <= t1){

        for (let contador1 = 1; contador1 <= 9; contador1++) {
            console.log(`${t2} x ${contador1} = ${parseInt(t2 * contador1)}`);
        }
        
    t2++;
}



