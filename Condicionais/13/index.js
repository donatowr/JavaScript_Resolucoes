//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "debito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let valorDoProdutoEmReais = valorDoProduto / 100;
let valorCompraComdesconto = 0;

if(tipoDePagamento == "credito"){
valorCompraComdesconto = valorDoProdutoEmReais - valorDoProdutoEmReais / 100 * 5
console.log(`Valor a ser pago: R$${valorCompraComdesconto.toFixed(2)}`);
}else if(tipoDePagamento == "cheque"){
    valorCompraComdesconto = valorDoProdutoEmReais - valorDoProdutoEmReais / 100 * 3
    console.log(`Valor a ser pago: R$${valorCompraComdesconto.toFixed(2)}`);
}else {
    (tipoDePagamento == "debito" || tipoDePagamento == "dinheiro")
        valorCompraComdesconto = valorDoProdutoEmReais - valorDoProdutoEmReais / 100 * 10
        console.log(`Valor a ser pago: R$${valorCompraComdesconto.toFixed(2)}`);
}