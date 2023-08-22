
let montante = 90000;
let capital = 60000
let tempo = 24;


let juros = (((montante / capital)**(1/24)) -1) *100

console.log(`O seu financiamento de 60000 reais teve uma taxa de juros de ${juros.toFixed(3)}%, pois após 24 meses você teve que pagar 90000 reais. `);