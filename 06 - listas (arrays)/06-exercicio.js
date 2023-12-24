// 6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
//    Ex de lista de notas = [2, 7, 3, 8, 10, 4]

// Lista de notas dos alunos
let notasAlunos = [2, 7, 3, 8, 10, 4];

// Inicializa a variável para armazenar a maior nota
let maiorNota = notasAlunos[0];

// Itera sobre a lista para encontrar a maior nota
for (let i = 1; i < notasAlunos.length; i++) {
  if (notasAlunos[i] > maiorNota) {
    maiorNota = notasAlunos[i];
  }
}

// Imprime a maior nota
console.log("Maior nota:", maiorNota);


