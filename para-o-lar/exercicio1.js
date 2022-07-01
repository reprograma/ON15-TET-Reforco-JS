// (num1, num2, callback) => {}
// somar = (num1, num2) => num1 + num2

// O retorno que nossa cliente deseja obter é algo como:

// `O resultado da ${operacao} é ${resultado}`

// Lembre-se, nosso time é aberto às melhores soluções, caso entenda que outra abordagem pode ser melhor aplique!

// PS.: neste exercício você pode aplicar conceitos de: estrutura condicional, funções, callbacks...


const somar = (num1, num2) => num1 + num2
const subtrair = (num1, num2) => num1 - num2
const multiplicar = (num1, num2) => num1 * num2
const dividir = (num1, num2) => num1 / num2

const calcular = (num1, num2, operacao) => {
  let resultado

  if (operacao == "somar") {
    resultado = somar(num1, num2)
  } else if (operacao == "subtrair") {
    resultado = subtrair(num1, num2)
  } else if (operacao == "multiplicar") {
    resultado = multiplicar(num1, num2)
  } else if (operacao == "dividir") {
    resultado = dividir(num1, num2)
  }
  console.log(`O resultado da operação "${operacao}" é ${resultado}`)

}

calcular(20, 4, "subtrair")
