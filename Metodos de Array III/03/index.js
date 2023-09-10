

const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const resultado = numeros.reduce((numero, numeroAtual)=>{
    return numero > numeroAtual ? numero : numeroAtual
})

console.log(resultado);
