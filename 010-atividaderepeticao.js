let entrada = require('prompt-sync')();
 

let n1 = entrada('Digite o 1º número: ')
let n2 = entrada('Digite o 2º número: ')

if (isNaN(n1) === '' || isNaN(n2) === '' ) {
    console.log('É necessário preencher todas as informações pedidas!');
}





parseInt(n1)
parseInt(n2)

let repeticoes = 0;





if (n1 < n2) {
    while (n1 <= n2) {
        console.log(n1);
        n1++;
        repeticoes++;
    };
    console.log(`O código foi repetido ${repeticoes} vezes`)
}
else 
{
    while (n1 >= n2) {
        console.log(n1);
        n1--;
        repeticoes++;
    };
    console.log(`O código foi repetido ${repeticoes} vezes`)
}









