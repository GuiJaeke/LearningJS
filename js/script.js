console.log("script linkado na casa do krl")

 var a = 68+97
 var b = a / 5
 var batata = "batata"
 var andre = "andré gosta de "
 var nome = "guilherme"
 var idade = 1
 if(b < a) {
    console.log(a)
 }
 else {
    console.log(b)
 }
 console.log(andre + batata)
 
 var verd = true
 console.log(verd)
 console.log(typeof verd)

 var arr = ["guitop", 22, "olhador", true]
 console.log(arr[1])
 console.log(arr)

 var form = {
   nome: "guilherme",
   idade: 22,
   profissao: "top demais"
 }
 if (form.idade > 18) {
   console.log("acesso permitido ao site!")
 }
 else {
   console.log("acesso negado!")
 }
 console.log(form)
 var num = '5';

 if (num == 5) {
   console.log("mesma função")
 }
 if (num !== 5) {
   console.log("não é a mesma função");
   }
 if (nome == "guilherme" && idade >= 18) {
   console.log("que coisa linda cara, meu deus!!")
 }
 else{
   console.log("não foi otário")
 }
 if (nome == "guilherm" || idade >= 18) {
   console.log("que coisa linda cara, meu deus!!")
 }
 else{
   console.log("não foi otário")
 }
 if (!(nome == "guilherm" && idade >= 18)) {
   console.log("que coisa linda cara, meu deus!!")
 }
 else{
   console.log("não foi otário")
 }
 while (idade < 18) {
  idade = idade + 1,
  console.log(idade)
 }
 console.log(idade)
// While e For
 var x = 0
 while (x <= 3) {
  console.log(arr[x])
  x = x +1
 }
 for (var i = 0; i < arr.length; i++) {
  console.log(arr[i])
 }
function primfunc() {
  console.log(form.idade)
 }
 primfunc()

function dizerNome(nome) {
  console.log(nome)

 }
dizerNome("guizindabros")

function soma (a, b) {
  var soma = a + b
  return soma
}

var res = soma (55, 88)
console.log(res)

//                 DOM                 //
function ulSite() {
var lista = ['bros', 'titan', 'fan', 'start', 'hornet']

var listaul = document.createElement('ul'); // cria uma ul basica no HTML

var body = document.getElementsByTagName('body'); // pega o 'body' criado em HTML e insere no JS

body[0].appendChild(listaul) // insere a ul criada na var listaul no 'body' do HTML

var listaNoBody = document.getElementsByTagName('ul') // pega a ul basica criada na var listaul

for (var i = 0; i < lista.length; i++) {
  var liFor = document.createElement('li'); // cria uma li basica para cada indice da lista

  var textLI = document.createTextNode(lista[i]); //escreve cada indice da lista e fica armazenado no textLI

  liFor.appendChild(textLI); // pega o que ta escrito no textLI e coloca na li basica criada na primeira variável do 'for'

  listaNoBody[0].appendChild(liFor); // acrescenta o li com o texto pronto na ul basica criada pela variável listaNoBody fora do 'for'

}
}

let y = 3;

y = 33;

const z = 50

console.log(y)
if (true) {
  let y = 72
  console.log(y)
}

// parsefloat

console.log(parseFloat('10.56544'))
console.log(Number.parseFloat('10.56544'))

// parseint

console.log(parseInt('52'))
console.log(parseInt(2.688))

// tofixed

console.log(25.65885.toFixed(2))

// isNaN

console.log(isNaN("teste"))
console.log(isNaN("55"))
console.log(isNaN(55))

//MAX_VALUE e MIN_VALUE

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

// // indexOf

// lista = "frase top demais ta louco demais"

// console.log(lista.indexOf("demais"))

// // slice

// var ret = lista.slice(10, 16)

// console.log(ret)

// // replace

// var rep = lista.replace("demais", "demasiado")

// console.log(rep)

// //toLowerCase e ToUpperCase

// var frase = "Dede10 não é poderoso fodão"

// console.log(frase.toLowerCase())
// console.log(frase.toUpperCase())

// // trim

// var nometrim = "     dedeu      "
// var mod = nometrim.trim()


// console.log(nometrim)
// console.log(mod)

// // split

// listasplit = lista.split(" ")
// console.log(listasplit)
// console.log(listasplit[1])

// // lastIndexOf

// console.log(lista.lastIndexOf("demais"))

// // push

// listasplit.push("guimaneirão")

// console.log(listasplit)

// // pop

// listasplit.pop()
// listasplit.pop()

// console.log(listasplit)

// // unshift

// listasplit.unshift("essa")

// console.log(listasplit)

// // função console.log

function cl(a) {
  console.log(a)
}

// cl(listasplit[5]);

// // shift

// listasplit.shift()

// cl(listasplit)

// // splice

// listasplit.splice(3, 0, "você")
// cl(listasplit)

// // join

// cl(listasplit.join(" "))

// objetos e this

let pessoa = {
  nome: "marqueens",
  idade: 32,
  falar: function() {
    cl("olá mi amigo")
  },
  sum: function (a, b) {
    return a + b
  },
  dznome: function() {
    console.log("O meu nome é " + this.nome)
  }
};

cl(pessoa)
pessoa.dznome()
let sum = pessoa.sum(65, 22);

cl(sum)

// acessando tags

var lis = document.getElementsByTagName('li')

cl(lis)

// querySelector e querySelectorAll

var liqs = document.querySelector('ul')

cl(liqs)

var liqs = document.querySelectorAll('li')

cl(liqs)

//textContent e innerHTML

var alth1 = document.querySelector('h1')
cl(alth1)

alth1.innerHTML = "foi quase vai"

var alth2 = document.querySelector('h2')
cl(alth1)

alth2.textContent = "parte2"

ulSite()

// criando novos elementos via DOM

/*var newP = document.createElement('p')
var textoP = document.createTextNode("Ao observar as intenções das pessoas no dia a dia")

newP.appendChild(textoP)

var body = document.querySelector('body')

body.appendChild(newP)
*/
// inserindo em div

var divi = document.querySelector('div')
var newP2 = document.createElement('p')
var textoP2 = document.createTextNode("denota")
newP2.appendChild(textoP2)
divi.appendChild(newP2)

// removeChild e remove
//divi.removeChild(newP2)

var estouro = document.querySelector('h2')

estouro.remove()

// diferença appendChild e insertBefore

var criaDiv = document.createElement('div')

criaDiv.classList = "js"

criaDiv.appendChild(newP2)

cl(criaDiv)

divi.appendChild(criaDiv)


array = [1,2,3,4, 5, 6, 7]

let lista = array.filter((numero) => {

  return numero % 2 == 1
})

console.log(lista);

// setAtribute e removeAtribute

var title = document.getElementById("h123");
cl(title)
title.setAttribute("class", "testenome");

cl(title)

title.removeAttribute("class");

cl(title)

// adicionando CSS com JS

title.style.color="white"
title.style.textDecoration="underline"

// TimeOut e interval

setTimeout(function(){
  console.log("1, 2 e 3")
},3000)

var inter = setInterval(function(){ 
  console.log("1,5 e 3")
},1500)

setTimeout(function(){
  console.log("acabooooooooooou")
  clearInterval(inter)
}, 8000)

// keydown

document.addEventListener("keydown", function(event) {
  cl(event.key)
  if (event.key === Enter) {
    cl('Faaaaaaaaaaaaaaaaaaala timóteo.')
  }

})