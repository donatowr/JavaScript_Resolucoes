const email = "aluno@cubos.academy";

function emailPadronizado() {
    
    if(email.includes('@') && email.includes('.') && email.lastIndexOf('@') !== 0 && email.lastIndexOf('.')){
        console.log('E-mail válido');
    }else if(email.lastIndexOf('@') === 0 || email.lastIndexOf('.') === 0 || email.includes('@') === false || email.includes('.') === false){
        console.log('E-mail inválido');
    }
    
}

emailPadronizado(email)