

let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";



function DadosFormatados(identificador, nome, email) {

    this.email = email
    this.nome = nome
    this.identificador = identificador

    const novoIdentificador = identificador.padStart(6, '0');

    const newName = []

    for (let i of nome.split(" ")) {
        let primeiraLetra = i.slice(0, 1).toUpperCase()
        let retante = i.slice(1)
        let nomeFormatado = primeiraLetra + retante
        newName.push(nomeFormatado)
    }

    const novoEmail = email.trim();

    console.log(`
  Id: ${novoIdentificador}
  Nome: ${newName.join(' ')}
  Email: ${novoEmail}`);
}

DadosFormatados(identificador, nome, email)
DadosFormatados("456", 'wellington donato de Sousa', 'donatowr@gmail.com  ')

