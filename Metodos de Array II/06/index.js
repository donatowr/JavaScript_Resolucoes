
const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const novoArray = cidades.filter((city)=>{
    if(city.length <=8){
        return city
        
    }
})
console.log(novoArray.join(', '));