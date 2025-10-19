//instrução
/* console.log("quebre 3 ovos")
console.log("misture com a farinha")
console.log("leve ao forno") */

//Bloco de códigos
/* {
  console.log("coma 1 pedaço de pizza")
}

{
  console.log("teste")
  {
    console.log("teste")
    console.log("teste")
  }
} */

//Comentário
//console.log("comentário 1 linha")

/*
Comentário 
de 
multiplas 
linhas 
*/
/* console.log("comentário de multiplas linhas") */

/* Variáveis e Constantes */
/* let altura = 1.90
let peso = 70 */

//let resultado = peso / (altura * altura)
//const pi = 3.14
//console.log(pi)
/* let resultado = pi * 2
console.log(resultado) */

/* 
1) não iniciadas com números, apenas letras ou _
2) Não utilizar caracteres especiais como: ç ` ~
3) Não pode ser iguais as palavras reservadas
*/

/* Variáveis e seus tipos */
//let nome = "Jamilton" //String
//let numero = 1200 //Number: inteiro ou decimais
//let decimal = 1200.50 //Number: decimal
//let negativo = -1200
//let avancarProximoEpisodio = false //Boolean: booleanos true ou false

/* Operadores aritméticos
Somar (+)
Subtrair (-)
Multiplicar (*)
Dividir (/)
*/
/* let numero1 = 10
let numero2 = 5

let resultado = numero1 / numero2
console.log(resultado) */

/* Operadores relacionais e Lógicos */
/* Operadores relacionais (retorna verdadeiro ou false)
== (igual a)
!= (diferente)
> (maior que)
< (menor que)
>= (maior ou igual)
<= (menor ou igual)
*/

/* let n1 = 20
let n2 = 10 */
//let idade = 25
//let resultado = n1 <= n2
//let resultado = idade > 18
//let pedidoMinimo = 20
//let compraPessoa = 5
//let resultado = compraPessoa > pedidoMinimo
//console.log(resultado)

/* Operadores Lógicos
&& (e)
|| (ou)
! (negação) 
*/
//let idade = 15
//let resultado = 2==3 || 1==3
//let resultado = idade >= 18 && idade <= 40

/* let idade = 18
let totalCompra = 250
let resultado = idade >= 40 || totalCompra >= 200
console.log(resultado) */

/* Estruturas condicionais if else */
//let idade = 39
//let compras = 120
/* if( idade >= 18 && idade <= 25 ){
  console.log("Maior de idade")
}  */
/* if( idade >= 40 || compras >= 400 ){
  console.log("Desconto de 20%")
} else {
  console.log("Não tem desconto")
} */

/* let opcao = 0
if( opcao == 1 ){
  console.log("Saldo conta")
} else if( opcao == 2 ){
  console.log("Cartão de crédito")
}else if( opcao == 3 ) {
  console.log("Descontos indevidos")
}else {
  console.log("Opção inválida")
} */

/* Operador Ternário & Switch 
let opcao = 1

switch( opcao ){
  case 1:
    console.log("Saldo da conta")
    break
  case 2:
    console.log("Cartão de crédito")
    break
  default:
    console.log("Opção inválida")
    break
}

let idade = 15
let resultado = idade >= 18 ? "Maior de idade" : "Menor de idade"
console.log(resultado)
*/

/* Funções */
/* 
1) Desligar a torneira;
2) Pedir copo de água;
3) Ir ao mercado comprar arroz;
*/

/* function desligarTorneira () {
  console.log("Desligar a toneira")
}

desligarTorneira()

function pedirCopoAgua() {
  return "Copo Agua"
} */

//let retorno = pedirCopoAgua()
//console.log(retorno)

/* function irMercadoComprarArroz(dinheiro){
  console.log("pegar transporte")
  console.log("Produrar o arroz")

  return "arroz"
} */

//let retorno = irMercadoComprarArroz(10)
//console.log(retorno)

/* function calcularMedia(nota1, nota2) {
  let totalNotas = nota1 + nota2
  let media = totalNotas / 2

  return media
}

let media = calcularMedia(8, 8)
let novaMedia = media + 1
console.log(novaMedia) */

/* 
while(condição) {
  Executa enquanto a condição é verdadeira
}
*/
/* let postagens = [
  "Hoje passeando pela av paulista",
  "Passeando em Campos do Jordão",
  "Hoje fim um curso de criação de sites",
  "Na casa da mamãe, aproveitando o dia!",
  "postagem 5"
]
const totalPostagens = postagens.length
console.log(totalPostagens)
let numero = 0

while( numero < totalPostagens ){
  console.log("IMAGEM " + numero)
  console.log( postagens[numero] )
  console.log("----------------------------")
  numero = numero + 1
} */

/* Concatenação & Template String */
/* const nome = "Danillo";
const numero = 2;

console.log( nome + " - " + numero );
console.log( "Bem vindo " + nome );
console.log( "Bem vindo " + nome + " você tem " + numero );

const texto = `Bem vindo ${nome} você tem ${numero}`
console.log( texto ) */

/* Loops – do...while e for */
//While
/* let numero = 1
while( numero <= 5 ){
  console.log(`Executou ${numero}`)
  //numero = numero + 1
  numero++
} */

//do...while
/* let numero = 5
do{
  console.log(`Executou ${numero}`)
  numero--
} while( numero >= 1 ) */

//for
/* let numero = 1;
while (numero <= 5) {
  console.log(`Executou ${numero}`);
  numero++;
}
console.log("--------------------");
for (let numero = 1; numero <= 5; numero++) {
  console.log(`Executou ${numero}`);
}
console.log("--------------------");
let postagens = [
  "Hoje passeando pela av paulista",
  "Passeando em Campos do Jordão",
  "Hoje fim um curso de criação de sites",
  "Na casa da mamãe, aproveitando o dia!",
  "postagem 5",
]; */

/* const total = postagens.length
for( let numero = 0; numero < total; numero++  ){
  console.log(`${postagens[numero]}`)
  } */

//for main curto
/* for (indice in postagens) {
  console.log(postagens[indice]);
} */

/* Operadores de atribuição */
//let salario = 500
//let bonus = 200

//salario = salario + bonus
//salario += bonus

//let desconto = 100
//salario = salario - desconto
//salario -= desconto

//let mult = 2
//salario = salario * mult
//salario *= mult

//let div = 2
//salario = salario / div
//salario /= div

//let resto = 2
//salario = salario % resto
//salario %= resto
//console.log(salario)

/* Operadores unários */
//let numero = 1

//Pré fixado
//console.log( ++numero )


//Pos fixado
//console.log( numero++ )
//numero

/* Diferença de Var e Let (Escopo de variáveis) */
//var numero = 10
//let numero = 10 //global
/* {
  let numero = 5
  console.log(numero)
} */

/* function calcular(){
  var numero = 12
} */
//calcular()
//numero = 20
//console.log(numero)

/* Função Anônima & Arrow */
// + Função literal
/* function somar(a, b){
  console.log(a+b)
}
somar(1,2) */

// + Função anônima (sem nome) é usado mais em objetos
/* const somar = function(a, b){
  console.log(a+b)
}
somar(1,2) */

// + Função arrow ( seta ) é usado muito em Arrays
/* const somar = (a, b) => {
  console.log(a+b)
}
somar(1,2) */

// + Função arrow ( retorno implícito )
//const somar = (a, b) => console.log(a+b)
//somar(1,2)
//const exibir = n => console.log("nome: " + n)
//exibir("teste")
/* const somar = (a, b) => a + b
let resultado = somar(1, 2)
console.log(resultado) */