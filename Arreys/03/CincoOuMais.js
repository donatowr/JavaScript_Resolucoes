
const preco = [100, 500, 200];

function compareNumber(a, b) {
    return a - b
}

preco.sort(compareNumber);

let soma = 0;

if (preco.length >= 5) {
    for (let i = 1; i < preco.length; i++) {
        const valor = preco[i];
        soma += valor;
    }
}else{
for(l of preco){
    soma += l
}
} 

console.log(soma);