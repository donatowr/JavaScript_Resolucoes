

const resultados = ["V", "E", "E",'V',"D", "V","E"]

let pontos = 0;

for (r of resultados){
    if (r === "V"){
        pontos = pontos + 3;
    }if (r === "E"){
        pontos = pontos  + 1
    }
}
console.log(pontos);

