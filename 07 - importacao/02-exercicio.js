// 2) Faça um programa que receba a quantidade de números e seus respectivos valores.
// Imprima o maior e o menor número deste conjunto.

// Exemplo:
//     Entrada:
//         4
//         100
//         150
//         90
//         200

//     Saída:
//         Maior número: 200
//         Menor número: 90

// Sample input array
const numbers = [4, 100, 150, 90, 200];

// Initialize max and min variables
let max = numbers[0];
let min = numbers[0];

// Loop through array
for (let i = 0; i < numbers.length; i++) {
  // Check if current element is greater than max
  if (numbers[i] > max) {
    max = numbers[i];
  }

  // Check if current element is less than min
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

// Print output
console.log(`Number bigger: ${max}`);
console.log(`Number smaller: ${min}`);
