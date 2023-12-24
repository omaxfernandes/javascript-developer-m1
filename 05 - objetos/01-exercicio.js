// 1) Crie uma classe para representar carros.
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor
// gasto em reais para realizar este percurso.

class Carro {
  marca;
  cor;
  kmPorLitro;

  constructor(marca, cor, kmPorLitro) {
    this.marca = marca;
    this.cor = cor;
    this.kmPorLitro = kmPorLitro;
  }

  calcularGastoPercurso(distanciaKm, precoCombustivel) {
    return distanciaKm * this.kmPorLitro * precoCombustivel;
  }
}

const palio = new Carro("Fiat", "Prata", 1 / 12);

const resultado = palio.calcularGastoPercurso(70, 5);

// console.log(palio.calcularGastoPercurso(70, 5).toFixed(2));

console.log(`Economia do palio R$${resultado.toFixed(2)}`);

const corsa = new Carro("Chevrolet", "Prata", 1 / 17);

const resultadoCorsa = corsa.calcularGastoPercurso(70, 5);
console.log(`Economia do corsa R$${resultadoCorsa.toFixed(2)}`);
