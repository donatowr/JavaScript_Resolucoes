
const numero = 4
const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];



function nomesEmGrupo(){
    const primeiraParte = nomes.slice(0,numero);
    const segundaParte = nomes.slice(numero)
    
    console.log(primeiraParte.join(", "));      
    console.log(segundaParte.join(", "))     
}


nomesEmGrupo(nomes, numero)