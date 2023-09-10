

const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];

const progamadores = pessoas.filter((pro) => {
    return pro.profissao === 'Programador' && pro.idade > 20;
})
const jornalistas = pessoas.filter((jor) => {
    return jor.profissao === 'Jornalista' && jor.idade > 30
})
const ambos = pessoas.filter((amb)=>{
    return (amb.profissao === 'Programador' && amb.idade < 29) || (amb.profissao === 'Jornalista' && amb.idade < 29)
})



console.log(progamadores);
console.log(jornalistas);
console.log(ambos);
