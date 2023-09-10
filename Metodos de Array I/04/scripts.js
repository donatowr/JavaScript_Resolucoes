const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];



function classificarPaciente(pacientes, tipo, nomePaciente) {
 if(tipo === 'atender'){
        pacientes.shift();
    }else if (tipo === 'agendar') {
        pacientes.push(nomePaciente);
    }    
      console.log(pacientes.join(', '))  
}

classificarPaciente(pacientes, 'atender');
classificarPaciente(pacientes, 'agendar', 'Donato');
classificarPaciente(pacientes, 'atender');
classificarPaciente(pacientes, 'agendar', 'Laís');