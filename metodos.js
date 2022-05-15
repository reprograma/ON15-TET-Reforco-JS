const frutas = ['🍎', '🍇', '🍎', '🍌', '🍎', '🥑']

// console.log(frutas.length)

// exemplo do uso de function anônima coo callback:
// const encontrarPrimeiro = frutas.find(function (elemento) {
//     return elemento == '🍇'
// })
// console.log(encontrarPrimeiro)

const buscarPrimeiro = frutas.find((elemento) => elemento == '🍇')

// console.log(buscarPrimeiro) 

const filtrarPor = frutas.filter((elemento) => elemento == '🍎')

// console.log(filtrarPor) // [3 maçãs]

const executarTodosComRetorno = frutas.map((elemento) => {
    let novoElemento = elemento = '🥑'
    // console.log(novoElemento)
    return novoElemento
}) 

// console.log(executarTodosComRetorno) // [6 abacates]

const executarTodosSemRetorno = frutas.forEach((elemento) => {
    elemento = '🥑'
    console.log(elemento)
    return elemento
}) 

console.log(executarTodosSemRetorno) // undefined







const nomes = ['brena', 'aline', 'eliza', 'brenda', 'dayane', 'amanda', 'Natalia', 'BRUNA']

const alterarNomes = nomes.map((elemento) => elemento.toLowerCase())

// console.log(alterarNomes)