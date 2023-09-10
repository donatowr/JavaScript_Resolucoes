
const numeros = [0, 122, 4, 6, 7, 8, 44];

const verificacaoNumerosPares = (lista) => {
 
    const resultado = lista.every((numero) => {
    return numero % 2 === 0
 })         
          
 console.log(resultado);
}

verificacaoNumerosPares(numeros)

     

    
