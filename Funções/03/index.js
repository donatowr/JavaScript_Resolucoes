


const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    Imprimiresumo: () => {
        let toldaItens = 0;
        for (let i of carrinho.produtos) {
            const element = i.qtd
            toldaItens += element
        }
        let totalAPagar = 0;
        for (const i of carrinho.produtos) {
            const element = i.precoUnit * i.qtd
            totalAPagar += element
        }

        console.log(`
        Cliente : ${carrinho.nomeDoCliente}
        Total de itens: ${toldaItens}
        Total a pagar: ${(totalAPagar / 100).toFixed(2).replace('.', ',')} `)
    }

}



const novoItem = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}


if (carrinho.produtos.indexOf(novoItem)) {
    for (const i of carrinho.produtos) {
        if (i.id === novoItem.id) {
            i.qtd += novoItem.qtd
        } 
        
    }
}

console.log(carrinho.produtos);

carrinho.Imprimiresumo()





















