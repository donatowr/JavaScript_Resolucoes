
const numeros = [10, 987, -886, 0, 12, 199, -45, -67];

const novoArray = numeros.filter((element)=>{
    return element >= 0;    
})
console.log(novoArray);