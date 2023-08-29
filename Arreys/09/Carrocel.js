

let sequencia = ['>','>','>','>','>','>','>','>','>','>'];

let pagina = 0;

for (let i = 0; i < sequencia.length; i++) {
    const element = sequencia[i];
    if(element == '>' && pagina >= 0 && pagina < 7 ){
        pagina++;
    }if(pagina == 7){
        pagina = 0;
    }if(element == '<' && pagina <= 6   ){
        pagina --
    }if(pagina < 0 && element == '<'){
        pagina = 6;
    }
}

console.log(pagina);




   
