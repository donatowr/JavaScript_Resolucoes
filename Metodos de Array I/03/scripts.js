
const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];


function encontrarCarros(nomes, posicao) {
    const posicao = 3;
   const filtro =  nomes.slice(posicao, posicao+3)
    console.log(filtro);
}

encontrarCarros(nomes, posicao)