
const usuarios = [
  {
    nome: "André",
    idade: 29,
    habilitado: false,
  },
  {
    nome: "Marcos",
    idade: 70,
    habilitado: true,
  },
  {
    nome: "Ana",
    idade: 35,
    habilitado: true,
  },
  {
    nome: "Vinícius",
    idade: 44,
    habilitado: true,
  },
  {
    nome: "Carlos",
    idade: 17,
    habilitado: false,
  },
  {
    nome: "Maria",
    idade: 19,
    habilitado: true,
  },
];

const filtroDeIdade = (lista) => {

  const motoristas = []

  const Filtro = lista.filter((element) => {
    if (element.idade >= 18 && element.idade <= 65) {
      motoristas.push(element);
    }

  })
  const result = motoristas.every((element) => {
    return element.habilitado === true

  })
  
 if (result) {
      console.log('Todos passaram nos teste');
    } else {
      console.log('Todos Precisam estar Habilitados');

    }


}


filtroDeIdade(usuarios);