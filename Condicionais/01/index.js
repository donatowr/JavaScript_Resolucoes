const jogada1 = "pedra"
const jogada2 = "tesoura"

//seu código aqui

if(jogada1=="pedra" && jogada2=="tesoura"){
    console.log("Jogada 1 ganhou com pedra");
}if (jogada1=="tesoura" && jogada2=="pedra"){
    console.log("Jogada 2 ganhou com pedra");
}
else if(jogada1 == jogada2){
    console.log("Empate");
}