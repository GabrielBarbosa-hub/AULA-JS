let senha;

do {
  senha = prompt(`Digite a senha`);

  if (senha != "1234") {
    console.log(`Senha incorreta`);
  }
} while (senha != "1234");

console.log(`Senha correta`);
