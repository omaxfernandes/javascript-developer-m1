// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

// Criando uma lista de nomes
let nomes = ["Vitor", "Vanessa", "João", "Maria", "Vinícius"];

// Filtrando os nomes que começam com a letra 'V'
let nomesComV = nomes.filter((nome) => nome.charAt(0) === "V");

// Imprimindo os nomes que começam com a letra 'V'
console.log("Nomes que começam com a letra 'V':");
nomesComV.forEach((nome) => {
  console.log(nome);
});
