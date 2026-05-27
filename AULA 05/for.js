// 1) A inicialização é uma atribuição e é executada uma única vez antes do laço ser iniciado
// 2) Condição que controla o laço. Repete o bloco ({}) enquanto a condição for verdadeira
// 3) O incremento é sempre a última instrução do laço (ex: cont++)

for (let contador = 0; contador <= 10; contador += 2) {
    console.log(`Contador: ${contador}`);
}