
palpite = 'a';
palavra = 'araraquara'
let acertos = 0;

for (let i = 0; i < palavra.length; i++) {
    const element = palavra[i];
    if (palpite === element) {
        acertos++
    }

}
console.log(acertos);
