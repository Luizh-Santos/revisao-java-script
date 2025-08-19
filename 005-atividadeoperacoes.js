let entrada = require('prompt-sync')();

let n1 = entrada('Digite o 1º Número: ')
let n2 = entrada('Digite o 2º Número: ')

let soma = parseFLoat(n1) + parseFLoat(n2);

let sub = parseFLoat(n1) - parseFLoat(n2);

let mult = parseFLoat(n1) * parseFLoat(n2);

let div = parseFLoat(n1) / parseFLoat(n2);

let rest = parseFLoat(n1) % parseFLoat(n2);

console.log(`Soma = ${soma}`);
console.log(`Subtração = ${sub}`);
console.log(`Multiplicação = ${mult}`);
console.log(`Divisão = ${div.toFixed(2)}`);
console.log(`Resto = ${rest}`);

