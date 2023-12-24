/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100; // Substitua pelo preço real do produto
const codigoPagamento = 2; // Substitua pelo código correspondente à condição de pagamento

let precoFinal;

switch (codigoPagamento) {
  case 1: // À vista Débito
    precoFinal = precoEtiqueta - precoEtiqueta * 0.1;
    break;
  case 2: // À vista Dinheiro ou PIX
    precoFinal = precoEtiqueta - precoEtiqueta * 0.15;
    break;
  case 3: // Em duas vezes
    precoFinal = precoEtiqueta;
    break;
  case 4: // Acima de duas vezes
    precoFinal = precoEtiqueta + precoEtiqueta * 0.1;
    break;
  default:
    console.log("Código de pagamento inválido");
}

console.log(`O valor a ser pago é: R$ ${precoFinal.toFixed(2)}`);
