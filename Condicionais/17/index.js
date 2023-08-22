//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;
//Valor produto convertido para reais
let valorProdutoEmReais = valorDoProduto / 100;
//valor restantee em reais
let valorRestante = (valorProdutoEmReais - valorPago);
//valores finais
let ValorPorparcelas = (valorProdutoEmReais / quantidadeDoParcelamento);
let parcelasRestantes = (valorProdutoEmReais - valorPago) / ValorPorparcelas
 
console.log(`Restam ${parcelasRestantes} parcelas de R$${ValorPorparcelas.toFixed(2)}`);
  