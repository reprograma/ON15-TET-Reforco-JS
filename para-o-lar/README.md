# <div align = "center"> # On15-TodasEmTech-extra-revisaoJS </div>




<div align = "center">
    <p>
        Esta revisão foi criada para a turma online: Todas em Tech on15 - Back-end, nesta aula do dia 15/05/2022 tivemos os seguintes conteúdos: 
<b>
</div>

- Funções;
- Objetos;
- Métodos de Array;
- Async/Await;
    - Try/catch;
- Seção de dúvidas síncronas;

</b>.
    </p>


<br>

## TAREFA

<div align = "justify">

No dia 15 de maio de 2022, tivemos uma aula de revisão sobre funções, objetos, métodos de arrays e async/await. Como tarefa opcional, foram atribuidos dois exercícios a fim de exercitar os assuntos revistos durante a aula. Nesse repositório, é possível encontrar dos exercícios clicando: [exercício1](https://github.com/BrunaCelestino/ON15-TET-Reforco-JS/blob/BrunaCelestino/para-o-lar/exercicio1.js) e [exercicio2](https://github.com/BrunaCelestino/ON15-TET-Reforco-JS/blob/BrunaCelestino/para-o-lar/exercicio2.js).

<br>

</div>
<br>
<div align = "justify">

## Exercício 1: 

1. Uma cliente pediu para criarmos uma aplicação simples que realizasse as 4 operações básicas (+, -, * e /) onde a usuária da aplicação nos passaria 3 informações: os dois valores que devem ser calculados e uma string com o nome da operação que será realizada, 
dica 1:
calcular(3, 5, 'multiplicar')
Nossa equipe entendeu que criaríamos a função principal acima que implementaria uma outra função que receberia uma callback como argumento de acordo com a string passada, assim poderíamos reutilizar nossas funções e expandir a aplicação no futuro, 
dica 2:
(num1, num2, callback) => {}
somar = (num1, num2) => num1 + num2
O retorno que nossa cliente deseja obter é algo como:
`O resultado da ${operacao} é ${resultado}`
Lembre-se, nosso time é aberto às melhores soluções, caso entenda que outra abordagem pode ser melhor aplique!
PS.: neste exercício você pode aplicar conceitos de: estrutura condicional, funções, callbacks...
</div>

## Exercício 2: 

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

```javascript

let obterToken = () => new Promisse((resolve) => setTimeout(() => {resolve('EabKDDtC_Q93WmuPQQuNun@L-TAFXG')}, 1000))

let endPointListaNotas = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(id != 'EabKDDtC_Q93WmuPQQuNun@L-TAFXG') {
        reject({
          status: 403,
          message: 'Forbiden: Token inválido'});
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
```

PS.: neste exercício você pode aplicar conceitos de: estrutura condicional, estruturas de repetição, métodos de array, funções, promises, async/await e try/catch...


</div>