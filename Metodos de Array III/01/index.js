
const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];

numeros.sort((a, b) => {
    if (a < b) {
        return - 1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
})

console.log(numeros);

const numeros2 = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];

numeros2.sort((a, b) => {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return - 1;
    } else {
        return 0;
    }
})

console.log(numeros2);

const numeros3 = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];

numeros3.sort()
console.log(numeros3);

const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

frutas.sort((a, b) => {
    return a.localeCompare(b);
});
console.log(frutas)

const frutas2 = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

const ordem = frutas2.sort((a, b) => {
    if(a.length > b.length){
        return 1
    }else if (a.length < b.length){
        return -1
    }
return 0;    
})

console.log(ordem);



