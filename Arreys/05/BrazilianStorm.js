

const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];

let maiorNota = 0;
let soma = 0;
let menorNota = 0;

notas.sort((a,b)=>a-b);

for (let i = 0; i < notas.length; i++) {
    const element = notas[i];
    soma += notas[i] 
    if(element > maiorNota){
        maiorNota = element;
        menorNota = notas[0];
       
        
    }    
}
let totalNotas = soma / (notas.length - 2)
console.log(((soma - maiorNota) - menorNota )/ (notas.length - 2));
