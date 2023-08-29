

let n = [30, 10, 54, 76, 1, 4, 35];
let h = 0;
let v = 0;
let test = 0;
let perda = 50

for (let i = 0; i < n.length; i++) {
   v = n[i];
   for (let j = i + 1; j < n.length; j++) {

      const element = n[j]
      soma = v - element


      if (soma > 0 && soma < perda) {
         perda = soma

      }

   }

}
console.log(perda)