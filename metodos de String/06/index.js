const celular = 99918888;

const numero = celular.toString()

function numeroCelularPadronizado() {

    if (numero.length === 10) {
        const comeco = numero.slice(0, 2)
        const final = numero.slice(2)
        const add9 = final.padStart(10, "9  ")
        const comecoEditado = comeco.padStart(3, '(')
        const comecoFinalizado = comecoEditado.padEnd(4, ")")
        const numeroeditado = `${comecoFinalizado} ${add9} `
        console.log(numeroeditado);
    } else if (numero.length === 8) {
        console.log(numero.padStart(9, "9 "));
    }
}


numeroCelularPadronizado(numero)