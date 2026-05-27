//        somar números até digitar 0

let numero;
let soma = 0;

do {
  numero = Number(prompt("Digite um número: "));

  soma = soma + numero;
} while (numero != 0);

console.log(`A soma dos números é: ${soma}`);
