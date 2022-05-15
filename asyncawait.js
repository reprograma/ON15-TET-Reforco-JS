// exemplo de como um processo assíncrono bagunça a sincronicidade da execução do script

// console.log('Esse console vai retornar primeiro')

// setTimeout(() => console.log('Esse console vai retornar segundo'), 2000)

// console.log('Esse console vai retornar terceiro')

// como solucionar a bagunça com async/await

// function assincrona() {
//     return new Promise(resolve => {
//         setTimeout(() => 
//             resolve('Esse console vai retornar segundo'), 
//         2000)
//     })
// }

// async function exemplo() {
//     console.log('Esse console vai retornar primeiro')
    
//     const retornSetTimeout = await assincrona()
    
//     console.log(retornSetTimeout)
    
//     console.log('Esse console vai retornar terceiro')
// }

// exemplo()

// resolvendo exercícios semana 7 com async/await

/*
1. Precisamos calcular o valor da parcela de uma Lace de cabelo humano que a Byanka Nicoli decidiu comprar, para isso precisamos 
descobrir o preço do produto e em seguida o número de parcelas desejadas, a partir das funções a seguir, utilize qualquer uma das
ferramentas aprendidas nesta aula para resolver o código assíncrono e obter o seguinte retorno no console: 
`Sua Lace custa R$3900,00 e você pagará em 10x de R$390,00`
*/

// função que simula busca num banco que retorna o preço do produto:

function buscarPreco(produto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (produto === "hormonios") {
              return resolve({
                nome: "Hormônios",
                preco: 99.00
              })
            } else if (produto === "unhas gel") {
              return resolve({
                nome: "Unhas em Gel",
                preco: 190.00
              })
            } else if (produto === "lace"){
              return resolve({
                nome: "Lace",
                preco: 3900.00
              })
            } else {
              return reject("Produto não encontrado")
            }
        }, 2000)
    })
    
}
  
// função que simula busca num banco que retorna o valor das parcelas:
  
function calcularParcela(preco, parcelasDesejadas) {
  return new Promise((resolve) => {
    setTimeout(() => {
        return resolve(preco / parcelasDesejadas)
      }, 2000)
  }) 
}
  
async function realizarCompra(produto, numeroParcelas) {
    try {
        let dadosDoProduto = await buscarPreco(produto)
        let valorDaParcela = await calcularParcela(dadosDoProduto.preco, numeroParcelas)

        console.log(`Sua ${dadosDoProduto.nome} custa R$${dadosDoProduto.preco.toFixed(2).replace('.', ',')} e você pagará em ${numeroParcelas}x de R$${valorDaParcela.toFixed(2).replace('.', ',')}`)
    }
    catch(error) {
        console.log('capturei um erro', error)
    }
}

realizarCompra('lace', 10)

/*
2. Resolva usando async/await: 
Você quer saber quanto vai pagar em reais por um produto comprado nos EUA e para isso precisa consultar numa "API"
de cotação para descobrir o valor do Dólar no momento da compra (você deve usar o valor do dólar comercial) e calcular
o valor em Real, em seguida precisa consultar outra "API" que retorna o valor de dois juros que serão cobrados sob o 
preço em Real e retornar o valor final 
dados:
`const precoEmDolar = 1270  //preço em dólar`
valor de retorno no console: `O preço final do seu produto é R$7474,08`
dica: valor em real + (valor em real * juros1) + (valor em real * juros2) = valor final
*/

function buscarPrecoDolar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        comercial: "5.03",
        turismo: "5.17",
      });
    }, 1000);
  });
}

function buscarJurosImportacao() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        juros1: 0.06,
        juros2: 0.11,
        message:
        "os dois juros são aplicados no valor total do produto em real",
      });
    }, 1000);
  });
}

const precoEmDolar = 1270
// calcularValorEmReal(precoEmDolar)

async function calcularValorEmReal(precoEmDolar) {
  try {
    const dolar = await buscarPrecoDolar()
    const juros = await buscarJurosImportacao()
    let precoEmReal = precoEmDolar * dolar.comercial
    let precoFinal = precoEmReal + (precoEmReal * juros.juros1) + (precoEmReal * juros.juros2)

    console.log(`O preço final do seu produto é R$${precoFinal.toFixed(2).replace('.', ',')}`)
  } 
  catch (error) {
    console.log('capturei um erro', error)
  }
}
