

let letra = "m";
const palavras = ["mamao", "maca", "melao", "melancia", "laranja"];
let l = 0;
let i = 0;

for (l of palavras) {

    if (l.indexOf(letra) != 0) {
        i++;
    }else if (l.indexOf(letra) === 0) {

    }
}
console.log(i);

