const cpf = "011.022.033-44";

function cpfSemPontos() {

    const primeiraParte = cpf.slice(0,3);
const segundaParte = cpf.slice(4,7);
const terceiraParte = cpf.slice(8,11);
const quartaParte = cpf.slice(12)

console.log(primeiraParte + segundaParte + terceiraParte + quartaParte)

}


cpfSemPontos(cpf)