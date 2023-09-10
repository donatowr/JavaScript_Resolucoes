

const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

function letrasMinusculas(lista) {
    const frutasOrganizadas = [];

    const texto = lista.toString()
    const minusculo = texto.toLocaleLowerCase()
    const novoArray = minusculo.split(',')

    for (let index = 0; index < novoArray.length; index++) {
        const element = novoArray[index];
        frutasOrganizadas.push(`${index} - ${element}`);

    }
    console.log(frutasOrganizadas);
}

letrasMinusculas(frutas)