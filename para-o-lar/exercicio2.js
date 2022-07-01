/* 
2. Outra cliente solicitou a criação de uma aplicação que calcula a média das notas das alunas em cada tema de uma prova de vestibular da sua faculdade de Medicina e classifique as aprovadas, reprovadas e quem ficou na lista de espera. Ela nos forneceu as seguintes informações:

- As 5 com melhores notas estão aprovadas;
- As 3 que tiverem melhores notas além das aprovadas ficam na lista de espera;
- São 5 notas (Redaçao, Inglês, Exatas, Humanas, Biológicas) que variam entre 0 e 100 pontos;
- Quem tiver alguma nota 0 está eliminada
- O retorno da aplicação deve ser uma lista em ordem de pontuação, com as pessoas que tiveram algum 0 nas últimas colocações e com as tags: 'aprovada', 'lista de espera' e 'reprovada', exemplo:
Maria 87 (Aprovada)
Maria 85 (Aprovada)
Maria 81 (Aprovada)
Maria 73 (Aprovada)
Maria 69 (Aprovada)
Maria 67 (Lista Espera)
Maria 52 (Lista Espera)
Maria 39 (Reprovada)
[...]

- Bateremos em dois endpoints, o primeiro para obter o token válido que será usado no segundo que bate um banco de dados para obter a lista com todas as notas das alunas, seguem os endpoints(FAKEs):
*/

let obterToken = () => new Promise((resolve) => setTimeout(() => { resolve('EabKDDtC_Q93WmuPQQuNun@L-TAFXG') }, 1000))

let endPointListaNotas = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id != 'EabKDDtC_Q93WmuPQQuNun@L-TAFXG') {
        reject({
          status: 403,
          message: 'Forbiden: Token inválido'
        });
      }
      resolve([
        {
          aluna: 'Bianca',
          notas: {
            redacao: 57,
            ingles: 83,
            exatas: 64,
            humanas: 73,
            biologicas: 42,
          }
        },
        {
          aluna: 'Gabriela',
          notas: {
            redacao: 81,
            ingles: 67,
            exatas: 50,
            humanas: 82,
            biologicas: 39,
          }
        },
        {
          aluna: 'Luana',
          notas: {
            redacao: 0,
            ingles: 90,
            exatas: 87,
            humanas: 34,
            biologicas: 42,
          }
        },
        {
          aluna: 'Ana',
          notas: {
            redacao: 90,
            ingles: 78,
            exatas: 45,
            humanas: 95,
            biologicas: 50,
          }
        },
        {
          aluna: 'Alana',
          notas: {
            redacao: 91,
            ingles: 62,
            exatas: 72,
            humanas: 58,
            biologicas: 60,
          }
        },
        {
          aluna: 'Lisboa',
          notas: {
            redacao: 79,
            ingles: 39,
            exatas: 0,
            humanas: 98,
            biologicas: 90,
          }
        },
        {
          aluna: 'Jessica',
          notas: {
            redacao: 38,
            ingles: 90,
            exatas: 72,
            humanas: 68,
            biologicas: 65,
          }
        },
        {
          aluna: 'Isabela',
          notas: {
            redacao: 10,
            ingles: 98,
            exatas: 100,
            humanas: 70,
            biologicas: 72,
          }
        },
        {
          aluna: 'Luzia',
          notas: {
            redacao: 92,
            ingles: 83,
            exatas: 73,
            humanas: 70,
            biologicas: 52,
          }
        },
        {
          aluna: 'Bianca',
          notas: {
            redacao: 30,
            ingles: 100,
            exatas: 75,
            humanas: 75,
            biologicas: 80,
          }
        }
      ]);
    }, 4.5 * 1000)
  });
}

/* 
PS.: neste exercício você pode aplicar conceitos de: estrutura condicional, estruturas de repetição, métodos de array, funções, promises, async/await e try/catch...
*/


async function fazerCalculo() {
  try {
    const id = await obterToken()
    const dataBase = await endPointListaNotas(id)
    const mediasOrder = []
    let status = []


    const calculo = dataBase.map((item) => {
      let redacao = item.notas.redacao
      let ingles = item.notas.ingles
      let exatas = item.notas.exatas
      let humanas = item.notas.humanas
      let biologicas = item.notas.biologicas
      let aluna = item.aluna

      if (redacao == 0 || ingles == 0 || exatas == 0 || humanas == 0 || biologicas == 0) {
        let media = (redacao + ingles + exatas + humanas + biologicas) / 5

        status.push({
          nome: aluna,
          media: media,
          status: `reprovada`
        })

      } else {
        let media = (redacao + ingles + exatas + humanas + biologicas) / 5

        return mediasOrder.push({
          nome: aluna,
          media: media
        })

      }
    })

    mediasOrder.sort(function (a, b) {
      if (a.media < b.media) {
        return 1
      } if (a.media > b.media) {
        return -1
      }
      return 0
    })

    status.push({
      nome: mediasOrder[0].nome,
      media: mediasOrder[0].media,
      status: "lista de espera"
    },
      {
        nome: mediasOrder[1].nome,
        media: mediasOrder[1].media,
        status: "lista de espera"
      },
      {
        nome: mediasOrder[2].nome,
        media: mediasOrder[2].media,
        status: "lista de espera"
      },
      {
        nome: mediasOrder[3].nome,
        media: mediasOrder[3].media,
        status: "aprovada"
      },
      {
        nome: mediasOrder[4].nome,
        media: mediasOrder[4].media,
        status: "aprovada"
      },
      {
        nome: mediasOrder[5].nome,
        media: mediasOrder[5].media,
        status: "reprovada"
      },
      {
        nome: mediasOrder[6].nome,
        media: mediasOrder[6].media,
        status: "reprovada"
      },
      {
        nome: mediasOrder[7].nome,
        media: mediasOrder[7].media,
        status: "reprovada"
      },
    )

    status.sort(function (a, b) {
      if (a.media < b.media) {
        return 1
      } if (a.media > b.media) {
        return -1
      }
      return 0
    })
    console.log(status)
  }


  catch (error) {
    console.log(error)
  }
}

fazerCalculo()

