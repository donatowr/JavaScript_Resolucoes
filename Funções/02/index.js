

const carro = {

    ligado: false,
    velocidade: 0,
    ligar: () => {
        if (carro.ligado === false){
            carro.ligado = true
            console.log(`Carro ligado. Velocidade: ${carro.velocidade} `); 
        }else{
            console.log('Este carro ja esta ligado');
        }
    },

    desligar: () => {
        if (carro.ligado === true) {
            carro.ligado = false
            carro.velocidade = 0
            console.log(`Carro Desligado. Velocidade: ${carro.velocidade} `);
        } else {
            console.log('Este carro já está desligado.')
        }
    },

    acelerar: () => {
        if(carro.ligado === true){
            carro.velocidade = carro.velocidade + 10;
            console.log(`Carro ligado. Velocidade: ${carro.velocidade} `);
        }else {
            console.log('Não é possível acelerar um carro desligado.');
        }
    },
    
    desacelerar: () => {
        if (carro.ligado === false){
            console.log('Não é possível desacelerar um carro desligado.');
        }else{
            carro.velocidade = carro.velocidade - 10;
            console.log(`Carro ligado. Velocidade: ${carro.velocidade} `); 
        }
    }
}


carro.desligar()
carro.ligar()
carro.ligar()
carro.acelerar()
carro.acelerar()
carro.desacelerar()
carro.desligar()
carro.acelerar()
carro.desacelerar()






