//Parâmetros padrão
//NaN -> Not a Number (não é um número)
/* function somar(numero1, numero2){
    numero1 = isNaN(numero1) ? 0 : numero1
    numero2 = isNaN(numero2) ? 0 : numero2
    return numero1 + numero2
}
console.log(somar(2, "jamilton"))
console.log(somar(2)) */

//Valor padrão do es2025
// function somar( numero1 = 0, numero2 = 0){
//     return numero1 + numero2
// }

// console.log(somar(2, 10))

//Parâmetros e retornos opcionais
// function calcularSalario(salario, desconto){
//     //desconto = isNaN(desconto) ? 0 : desconto
//     if ( salario == 0 ){
//         console.log("Salário não informado")
//         return 0
//     } else {
//         return salario - desconto
//     }
// }

// let resultado = calcularSalario(0, 20)
// console.log(resultado)

/* Funções de Callback  */
// function processar(callbackSucesso, callbackErro){
//     /* várias operações, implemetações e ações... */

//     let resultadoProcessamento = true
//     if( resultadoProcessamento ){
//         callbackSucesso()
//     } else {
//         callbackErro()
//     }
// }

// const salvarResultado = function(){
//     /* várias ações de sucesso... */
//     console.log("salvar resultado")
// }

// const erro = function(){
//     /* várias ações de erro... */
//     console.log("erro")
// }

// //() => {...} Arrow function
// processar(salvarResultado, erro)

/* ---Funções Nativas - Manipulação de Textos--- */
/* const nome = {
    texto: "ja",
    length: 2,
    chartAt(){}
} */
//let nome = "carro do jamilton"

// console.log(nome.length) // contar a quantidade de caracteres
// console.log(nome.charAt(4)) // retorna o caractere na posição informada 
// console.log(nome.replace("jamilton", "pedro")) // substituir um caractere por outro

// let frase = "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo"
// frase.substr(0, 30) // foi depreciada, agora usaremos slice ou substring
// console.log(frase.substring(0, 30) + "...")

// let nome = "jamilton damasceno"
// let resultado = nome.split(" ") // transformar uma string em um array, separando por espaços
// console.log(resultado)

// let nome = "jamilton"
// let sobrenome = "damasceno"
// let s = sobrenome.slice(0, 6)

// let email = nome + s + "@empresa.com.br"

// console.log(email)
// let pesquisa = "PEdro SILva"
// let itemSalvoBD = "pedro silva"
// //console.log(pesquisa.toUpperCase()) // formata as letras para maiusculas
// let item = pesquisa.toLowerCase()
// if(itemSalvoBD == item) {
//     console.log("Achei: " + item)
// } else {
//     console.log("Item não encontrado")
// }

// let nome = "Pedro Silva    -"
// console.log( nome.trim() ) // remover espaços em branco

// let a = "Olá"
// let b = "Jamilton"
// let c = "Damasceno"

// console.log(a.concat(" ", b, " ", c)) // concatenar strings com espaços entre elas

/* --- Funções Nativas - Matemática --- */
// let numero = 280.50

// console.log( Math.PI ) // retorna o valor de PI
// console.log( Math.ceil(numero) ) // arredondar para cima
// console.log( Math.floor(numero) ) // arredondar para baixo
// console.log( Math.round(numero) ) // arredondar para o inteiro mais prático
// console.log( Math.random() * 100 ) // gerar um número aleatório entre 0 e 1
// console.log( Math.min(15,10) ) // retorna o menor valor
// console.log( Math.max(15,10) ) // retorna o maior valor
// console.log( Math.pow(2, 10) ) // 2 elevado a 10
// console.log( Math.sqrt(12) ) // raiz quadrada

/* --- Funções Nativas - Datas --- */
// const data = new Date()
//console.log(data.toString())

/* console.log( data.getDate() ) // dia do mês
console.log( data.getMonth() + 1 ) // mês
console.log( data.getFullYear() ) // ano
let d = data.getDate()
let m = data.getMonth() + 1
let a = data.getFullYear()
console.log(`data: ${d}/${m}/${a}`)

let h = data.getHours()
let mi = data.getMinutes()
let s = data.getSeconds()
console.log(`hora: ${h}:${mi}:${s}`)
 */
//Operações com datas
//console.log(data.setDate(data.getDate() + 300))
// console.log(data.setMonth(data.getMonth() + 2 ))
// console.log(data.setFullYear(data.getFullYear() + 2))
/* let d = data.getDate()
let m = data.getMonth() + 1
let a = data.getFullYear()
console.log(`data: ${d}/${m}/${a}`) */

// console.log( data.setHours(data.getHours() + 2))
// console.log( data.setMinutes(data.getMinutes() + 10))
// console.log( data.setSeconds(data.getSeconds() + 30))
/* let h = data.getHours()
let mi = data.getMinutes()
let s = data.getSeconds()
console.log(`hora: ${h}:${mi}:${s}`)*/

/* --- Saiba mais - Array --- */
// console.log(typeof [])
// console.log(typeof Array)
// console.log(typeof new Array)

// const nomes = ["Jamilton", "Maria"]
// const frutas = new Array("Morango", "Banana")

// console.log(frutas[0])

// const nomes = ["Jamilton", "Maria", 'Ana']
// const nomes = [3, 2, 1]
// nomes.push("Pedro")
// delete nomes[0]
// nomes[0] = 'Teste'
// console.log(nomes)
// console.log(nomes.length)
// console.log(nomes.sort()) // orneda o array em ordem alfabetica

/* --- Array - Métodos úteis --- */
// const estados = ["São Paulo", "Ceará", "Rio de Janeiro", "Bahia", "Minas Gerais"]


/* Remover elementos do array */
// console.log( estados.pop() ) // remover o ultimo elemento
// console.log( estados )
// console.log( estados.shift() ) // remover o primeiro elemento
// console.log( estados )
// console.log( estados.push("teste") )
// console.log( estados.unshift("teste") )

/* Retorna novo array */
//const novo = estados.splice(1, 1, "teste1") //emendar
// const novo = estados.slice(2, 5) //cortar

/* Converte Array / String */
/* const usuarios = ["Jamilton", 'Ana', "Carla"]
let texto = usuarios.join()
let arrayTexto = texto.split(",")

console.log( arrayTexto ) */


/* --- Array: ForEach --- */
// const lista = ["Jamilton", 'Ana', "Marcela", "Pedro"]

// // for(indice in lista){
// //     console.log(lista[indice])
// // }

// /* const percorrer = function(item, i, arr){
//     console.log(item)
// }

// lista.forEach(percorrer) */

// /* lista.forEach( function(item, i, arr){
//     console.log(item)
//     }) */
    
// // lista.forEach( item => console.log(item) )

// Array.prototype.percorrer = function(funcao){
//     // console.log(this)
//     for(let i = 0; i < this.length; i++){
//         // console.log("teste")
//         funcao(this[i], i, this)
//     }
// }

// const funcao = function(item, i, arr){
//     console.log(item)
// }

// lista.percorrer(funcao)



