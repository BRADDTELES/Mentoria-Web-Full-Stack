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

let n1 = 20
let n2 = 10
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

let opcao = 0
if( opcao == 1 ){
  console.log("Saldo conta")
} else if( opcao == 2 ){
  console.log("Cartão de crédito")
}else if( opcao == 3 ) {
  console.log("Descontos indevidos")
}else {
  console.log("Opção inválida")
}