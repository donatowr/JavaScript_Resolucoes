
const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

    function encontrarDono(nomePet) {
        let dono = 0;
      
        for (let index = 0; index < usuarios.length; index++) {
            const element = usuarios[index];
            if (element.pets.includes(nomePet)) {
                dono = element.nome
            }
        }
       
        if(dono !== 0){
            console.log(`O dono(a) do(a) ${nomePet} é o(a) ${dono}`);
        }else if(dono === 0){
            console.log(`Que pena ${nomePet}, não encontramos seu dono(a)`);
        }
    }
encontrarDono("Batata")
    