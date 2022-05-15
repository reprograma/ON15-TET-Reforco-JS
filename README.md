# On15-TodasEmTech-extra-revisaoJS

Esta revisão foi criada para a turma online: Todas em Tech on15 - Back-end, nesta aula do dia 15/05/2022 teremos os seguintes conteúdos:

- Funções;
- Objetos;
- Métodos de Array;
- Async/Await;
    - Try/catch;
- Seção de dúvidas síncronas;

<br>

## Apresentações

### Quem é a professora Lilit?

<img src='./assets/lilit.jpeg' width=400 alt='selfie de Lilit, que tem cabelos longos, pretos e cacheados, amarrados num coque acima da cabe~ca caídos para o lado direito, usa blusa verde e tem ao fundo uma parede branca'>

[Lilit Bandeira](https://www.instagram.com/lilitbandeira), é uma travesti paraibana residente em São Paulo, trabalha como Software Engineer no Nubank, ex-aluna e professora {reprograma} e professora também no minas programam;

#### Contatos

- devlilitbandeira@gmail.com
- [LinkedIn](https://www.linkedin.com/in/lilitbandeira)
- [GitHub](https://github.com/lilitbandeira)

### Quem são as monitoras?

<img src='./assets/ayanami.jpg' width=500 alt='personagem Ayanami Rei do anime Neon Genesis Evangelion, ela tem cabelos cinzas em corte chanel com franja, olhos vermelhos, um deles tapado por um curativo, veste um traje escolar tradicional do Japão, ao fundo o o teto de uma sala de aula'>

### Quem são as alunas?

<img src='./assets/jujutsu.jpg' width=500 alt='3 personagens do anime Jujutsu Kaisen, todas vestem terno colegial preto, cada uma está deferindo seu golpe, da esquerda para direita temos a primeira com cabelos longos verdes amarrados e olhos amarelos, segunda com cabelos castanhos claros chanel  e olhos da mesma cor e a terceira tem cabelos azuis clarinhos longos e soltos e olhos da mesma cor, a imagem é dividida em três partes por linhas pretas e o fundo tem fagulhas de poder do golpe de cada uma'>

## Acordos

- Manter atenção nas explicações e codar nos momentos definidos;
- Enviar dúvidas no chat para as monitoras ajudarem;
- Levantar a mão sempre que desejar falar, o que pode ser feito a qualquer momento;
- Manter microfones desligados sempre que alguém estiver falando;
- As câmeras ligadas serão de grande apoio para mim!

## Plano de aula

### 1. Funções
- É um bloco de comandos a serem executados quando solicitado, através de uma chamada direta ou em decorrência de um evento;
  - Uma função é o menor bloco de execução/construção no JavaScript, um conjunto de instruções que executa uma tarefa ou calcula um valor;
  - Uma função quando é chamada, pausa a thread (script) para realizar seu processamento, depois retorna o valor final e continua a execução da linha de código na sequência;

#### 1.1. Declarando uma função

- O método mais comum de criar uma função no JS consiste no uso da palavra reservada `function`;
- Em seguida nomeamos a função, é uma boa prática nomear com verbo para indicar a ação realizada pela função;
- `()` com a lista de argumentos, caso seja necessário, separados por vírgulaç
- `{}` definição do escopo que recebe a o código que será executado quando a função foi invocada;
- `return` é a indicação do que a função deve retornar, também interrompendo o a execução do trecho de código em que está inserida;

```js
  
  // funcao sem argumentos

  function funcaoUm() {
    return console.log(`retorno da função que não recebe argumentos`)
  }

  // funcao com um único argumento

  function funcaoDois(argumento) {
    return console.log(`retorno da função que recebe um argumentos, neste caso foi ${argumento}`)
  }

  // funcao com mais de um argumento

  function funcaoTres(numeroUm, numeroDois) {
    let soma = numeroUm + numeroDois
    return console.log(`soma = ${soma}`)
  }

  funcaoUm();
  funcaoDois('reprograma');
  funcaoTres(2, 7);

  // funcao anonima

  let funcao4 = function () {
    return console.log('retorno da função anônima')
  } // muito utilizado quando vamos passar a função como parâmetro para outra função

  let soma = function(numero) {return numero * numero};
  console.log(soma(3))
```

#### 4.2. Arrow Function

- Uma sintaxe mais curta e moderna em relação a expressão `function` e podem substituir em quase todos os casos de forma a diminuir a complexidade de leitura em diversos casos;
- As arrow functions são geralmente anônimas, mas podem ser nomeadas* ou atribuidas a variáveis para que possam ser invocadas; 
- Estas expressões de funções tem algumas limitações e são melhor utilizadas em funções que não sejam métodos e nem devem ser usadas como construtores;

```js
  function somar(x, y) {
    return console.log(x + y)
  }

  // sintaxe () => {}
  let somar = (x, y) => console.log(x + y)
  // quando a execução da função ocupa apenas uma linha de código não há neessidade nem do uso do {} e nem do return, simplificando ainda mais a sintaxe
```

- A sintaxe das arrow functions é bastante comum em padrões funcionais como muito do que aprenderemos em métodos de arrays nas próximas aulas;

---

### 2. Objetos
Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos). (MDN) Os objetos são formados por chave e valor

#### 2.1. Criando um objeto:

```js

const professora = new Object()
  professora.nome = "Lilit"
  professora.sobrenome = "Bandeira"
  professora.cidade = "São Paulo"

const aluna = {
  nome: { primeiro: "Gabriela", segundo: "Lemos" },
  idade: 20,
  cidade: "São Paulo",
  interesses: ["música", "animes"],
  saudacao: () => console.log("olá meninas"),

};
```

#### 2.2. Acessando o valor de uma propriedade ou método de objetos usando:

##### 2.2.1. Notação de ponto - Digitando o ponto, podemos acessar todos as propriedades e métodos encapsuladas dentro do objeto

```js
console.log(aluna.nome.primeiro);
aluna.saudacao();
```

##### 2.2.2. Notação de cochetes - Usamos as chaves (como strings) para acessar o valor de um item

```js
console.log(aluna["nome"]["primeiro"]);
console.log(aluna["idade"]);
console.log(aluna["interesses"][0]);
```

#### 2.3. Desestruturando um objeto:

```js
const { idade, saudacao } = aluna;
```

### 3. Array (métodos)

#### 3.1. Criando uma array:

```
const alunas = ["Lilit, Analu, Beatriz, Simara"]
const cidades = new Array('Recife', 'São Paulo', 'Manaus')
const cursos = "frontend backend".split(' ')
const tecnologias = Array.of('HTML', 'CSS', JS)
```

#### 3.2. Acessando o valor de um elemento da array:
  
```
console.log(alunas[1])
```

#### 3.3. Interando uma array (Métodos)

arrays para exemplos:
```
const frutas = ['🍎', '🍇', '🍎', '🍌', '🍎', '🥑']
```

`find:`

```
const encontrarPrimeiro = frutas.find(element => element == 🍇')
console.log(encontrarPrimeiro) // retorno 🍇
```

`filter:`

```
const filtrarPor = frutas.filter(element => element == "🍎")
console.log(filtrarPor) // retorno ['🍎', '🍎', '🍎']
```

`map:` 

```
const executarTodos = frutas.map(element => element = "🍇")
console.log(executarTodos) // retorno  ['🍇', '🍇', '🍇', '🍇', '🍇', '🍇']
```

`forEach:`

```
const verTodos = frutas.forEach(element => console.log(element))
console.log(verTodos) // retorno  🍎🍇🍎🍌🍎🥑
```

### 4. Async/Await

- As palavra-chaves async e await atuam como um 'açúcar sintático' em cima de promises, faciltando a visualização e tornando a leitura do código assíncrono mais próxima do código síncrono;
- Toda função que recebe o `async` se torna uma função assíncrona, que passa a retornar uma promise ao invés de retornar um valor diretamente, como uma promise o retorno desta função pode ser tratado com um then() normalmente;
- Uma função assíncrona espera a possibilidade de a palavra-chave await ser usada para invocar código assíncrono;
- `await` indica que o JavaScript deve esperar o retorno de uma promise para continuar a execução, importante usar apenas quando necessário tratar respostas de uma promise para não paralizar o fluxo, quando usado da maneira correta não altera a performance da aplicação;
-  o await só funciona dentro de funções assíncronas e é colocada na frente de qualquer função que retorne promise para pausar o código até que a promise seja resolvida, retornando o valor resultante; 
- Não precisa de funções para sincronizar os resultados;
- Outro método importante da promise é o `Promisse.all()` que recebe uma array de funções assincronas independentes entre si, evitando o uso de awaits que não sejam necessários;
- Facilita o tratamento de erros seja com menor encadeamento do .then() ou ainda com o uso de `try/catch`;

<img src='./assets/asyncawait.png' width=500 alt='bloco de texto com código javascript'>
<br>

#### 4.1. try/catch

- É usado para marcar um bloco que será testado (try) e especifica uma ação para que uma possível exceção(erro) seja capturada(catch);
- Ao usar o try é criado um bloco de código protegido, que caso ocorra algum erro neste bloco, a execução é desviada para o catch(), desta forma a aplicação não será quebrada e o erro poderá ser tratado e o código segue sua execução;
- O catch() é executado somente quando há alguma exceção no bloco try, caso contrário ele será ignorado, o argumento recebido pelo catch é a exceção ocorrida no bloco try e costuma ser chamada de err/error;

### 5. Seção de dúvidas

- Momento aberto para dúvidas específicas e sobre todo o assunto de JS;

### 6. Exercícios de revisão

- ANos próximos dias os exercícios serão adicionados neste espaço do repositório e no classroom com todas as explicações de como realizá-los, além de comentários com dicas. Os exercícios não são entregáveis e devem ser utilizdos para reforçar o aprendizado