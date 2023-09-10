const numeroCartao = '1111222233334444';


function ocultarNumeroCartao(){  

const ultimosNumeros = numeroCartao.slice(12);
const PrimeirosNumeros = numeroCartao.slice(1,5);
const ocultar = ultimosNumeros.padStart(12, '*');
console.log( PrimeirosNumeros + ocultar); 

}

ocultarNumeroCartao(numeroCartao)
