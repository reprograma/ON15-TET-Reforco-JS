const frutas = ['π', 'π', 'π', 'π', 'π', 'π₯']

// console.log(frutas.length)

// exemplo do uso de function anΓ΄nima coo callback:
// const encontrarPrimeiro = frutas.find(function (elemento) {
//     return elemento == 'π'
// })
// console.log(encontrarPrimeiro)

const buscarPrimeiro = frutas.find((elemento) => elemento == 'π')

// console.log(buscarPrimeiro) 

const filtrarPor = frutas.filter((elemento) => elemento == 'π')

// console.log(filtrarPor) // [3 maΓ§Γ£s]

const executarTodosComRetorno = frutas.map((elemento) => {
    let novoElemento = elemento = 'π₯'
    // console.log(novoElemento)
    return novoElemento
}) 

// console.log(executarTodosComRetorno) // [6 abacates]

const executarTodosSemRetorno = frutas.forEach((elemento) => {
    elemento = 'π₯'
    console.log(elemento)
    return elemento
}) 

console.log(executarTodosSemRetorno) // undefined







const nomes = ['brena', 'aline', 'eliza', 'brenda', 'dayane', 'amanda', 'Natalia', 'BRUNA']

const alterarNomes = nomes.map((elemento) => elemento.toLowerCase())

// console.log(alterarNomes)