
const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro"
];


let maiorTamanho = 0;
const maiorQuantidadeLetras = cidades.reduce((cidade, cidadeAtual)=>{
if(cidadeAtual.length > cidade.length){
    return cidadeAtual
}else{
    return cidade
}
})

console.log(maiorQuantidadeLetras);