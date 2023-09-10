

const palavras = ["arroz", "feijão", "carne", "vodka", "macarrão"];


function verificarLista(lista) {

    const resultado = lista.some((palavra) => {
        return palavra === 'vodka' || palavra === 'cerveja'

    })
    if (resultado) {
        console.log(`revise sua lista, joão. possui bebida com venda proibida!`);
    } else {
        console.log(`tudo certo, vamos as compras!`);
    }

}

verificarLista(palavras)
