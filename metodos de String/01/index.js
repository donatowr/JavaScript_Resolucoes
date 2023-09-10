const comentario = "Esse covid é muito perigoso!";

if(comentario.includes('COVID') || comentario.includes('covid') === true){
    console.log('Comentário bloqueado por conter palavras proibidas');
}