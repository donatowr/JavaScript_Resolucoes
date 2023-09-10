

const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente(lista,  novoPaciente) {
   pacientes.push(novoPaciente)
   console.log(lista.join(', '));
}

function atenderPaciente(lista) {
    pacientes.shift()
    console.log(lista.join(', '));
}



function cancelarAtendimento(lista, nomePaciente) {
    const indice = pacientes.indexOf(nomePaciente)
    pacientes.splice(indice,1)
    console.log( lista.join(', '))
   
}


agendarPaciente(pacientes, 'Don')
atenderPaciente(pacientes)
cancelarAtendimento(pacientes, 'Ana')