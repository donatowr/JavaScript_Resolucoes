const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ], 
    
            
        
        
    
    
};


function CorrigirProva(prova){
    let corretas = 0;

    for (const questao of prova.questoes){
        if(questao.resposta === questao.correta){
           corretas++
        }
    }
    
    
 let media = (prova.valor / prova.questoes.length) * corretas

 
 
 console.log(`o aluno ${prova.aluno}, acertou ${corretas} e obteve media ${media}.`);
 
    

}

CorrigirProva(prova)