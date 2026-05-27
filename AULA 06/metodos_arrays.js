turma02 = ["Lauane", "Rei do Chat", "Jorge_Antonio", "Lia"];

console.log(turma02);
// toString() converte um array em string.
let novaturma = turma02.toString();
console.log(turma02);
console.log(novaturma);
// join() que converte o array em string.
let turmaJoin = turma02.join(" | ");
console.log(turmaJoin);
// pop() remove o ultimo elemento dod array.
let remover = turma02.pop();
console.log(turma02);
console.log(`Aluno removido: ${remover}`);
// push() insere um elemento no final do array.
turma02.push("Roberto Carlos");
console.log(turma02);
// shift() remove o elemento no inicio do array deslocando todos os elementos em uma posição.
let remover2 = turma02.shift();
console.log(turma02);
console.log(`Aluno removido: ${remover2}`);
// unishift() insere um elemento no inicio do array.
turma02.unshift("Gabriel");
console.log(turma02);

delete turma02[2];
console.log(turma02);

turma02.splice(2, 2);
console.log(turma02);
