//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

let rendaEmReais = rendaMensalEmCentavos / 100
let toralPagoEmRais = totalJaPagoPeloAluno / 100
let mesesTotais = 12;
let parcelaDevida =  rendaEmReais / 100 * 18
let valorPagoAteAgora = mesesTotais * parcelaDevida





if(valorPagoAteAgora >= 1800000/100 || mesesTotais >= 60 ){
    console.log('O valor da parcela desse mês é R$0')
}else {
console.log(`Valor pago até Agora R$${valorPagoAteAgora.toFixed(2)}, e o valor da parcela desse mês é R$${parcelaDevida.toFixed(2)}`);
}