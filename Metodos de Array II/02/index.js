

const palavras = ["livro", "caneta", "sol", "carro", "orelha"];


function validarArray(lista) {
    
    let invalidas = 0;
    for (const i of palavras) {
        if(i.length > 5){
            invalidas++
        }
    }
    if(invalidas > 0){
        console.log("existe palavra inválida");
    }else{
        console.log("array validado")
    }
}

validarArray(palavras)