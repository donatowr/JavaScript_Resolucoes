

const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];

const nomeDoLivro = "Guerra e Paz";

function encontraLivro(livros) {
    const estante = livros.indexOf(nomeDoLivro) + 1
    console.log(`O livro está na posição ${estante}`);
}

encontraLivro(livros)
    
