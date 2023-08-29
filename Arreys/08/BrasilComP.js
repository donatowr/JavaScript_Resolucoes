

let primeiraLetra =  "a";
let segundaLetra =  "v";
let soma = 0;

let palavras = ["aveia","manha","ave", "avenida", "avacalhar"];

for (let i = 0; i < palavras.length; i++) {
    const element = palavras[i];
    if(element.indexOf(primeiraLetra) == 0 && element.substring(2,1) == segundaLetra){
        console.log(element);
        soma++
    } 
    
}
if(soma == 0){
    console.log('NENHUMA')
}


