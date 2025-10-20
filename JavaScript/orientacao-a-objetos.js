/* 
Paradigma -> exemplo ou padrão a ser seguido, não se trata de uma linguagem, mas a forma como você soluciona problemas usando uma linguagem de programação
*/

//Javascript é multi paradigma

//Procedural
//Funções que manipulam dados
/* function verificarDisponibilidade( quartos, ocupados ){
    let res = quartos - ocupados
    console.log(`Disponíveis: ${res}`)
}

let quartos = 20
let ocupados = 10
verificarDisponibilidade( quartos, ocupados ) */

//Orientado a Objetos
/* const hotel = {
    quartos: 20,
    ocupados: 10,
    verificarDisponibilidade: function(){
        let res = this.quartos - this.ocupados
        console.log(`Disponíveis: ${res}`)
    }
} */

//hotel.ocupados = 5
//hotel.verificarDisponibilidade()

/* Nenhum Paradigma resolve todos os problemas da maneira mais fácil ou mais eficiente */

//Notação Literal
/* const hotel = {
    quartos: 20,
    ocupados: 10,
    piscinas: 2,
    verificarDisponibilidade: function(){
        let res = this.quartos - this.ocupados
        return `Disponíveis: ${res}`
    }
} */

//hotel.quartos = 25
//hotel['quartos'] = 30
//delete hotel.piscinas
//console.log(hotel.piscinas)

// Notação de construtor (objetos em branco)
/* const hotel = new Object();
hotel.quartos = 30;
hotel.ocupados = 10;
hotel.verificarDisponibilidade = function () {
  let res = this.quartos - this.ocupados;
  return `Disponíveis: ${res}`;
}; */

//console.log(hotel.quartos)
//console.log(hotel.verificarDisponibilidade())


//Criando classes (mais simples)
/* class Hotel {

    constructor(){
        this.quartos = 30
        this.ocupados = 10
    }

    verificarDisponibilidade(){
        let res = this.quartos - this.ocupados
        return `Disponíveis: ${res}`
    }

} */

//const hotel = new Hotel()
//console.log(hotel.verificarDisponibilidade())
/* hotel.quartos = 10
console.log(hotel.quartos) */

// Pilar 1 - Abstração
/* 
Modelo, Entidade, Identidade, Características e Ações
*/
// class Carro {
//     constructor(){
//         this.marca = "Volkswagem",
//         this.modelo = "Gol",
//         this.cor = "prata",
//         this.placa = "EMJ-2565"
//     }
//     ligar(){
//         console.log("Ligado")
//     }
// }

// const carro = new Carro()
// carro.modelo = "Golf"
// console.log(carro.modelo)

// const carro2 = new Carro()
// console.log(carro2.modelo)

// Loja Virtual
/* class Produto {
    constructor(){

        // roupas
        this.tamanho = "M",
        this.cor = "Vermelho",
        this.preco = "45,90"

        // Eletronicos
        this.altura = "50cm",
        this.largura = "30cm"

    }
} */
    
/* Métodos - Retornos e Parâmetros */
// class Usuario {
//     constructor(){
//         this.email = "",
//         this. senha = "",
//         this.subtotalCompra = 0
//     }

//     logar(){

//         let emailBD = "ja@gmail.com"
//         let senhaBD = "1234"

//         if( senhaBD == this.senha ){
//             //console.log("senha válida")
//             return "senha válida"
//         } else {
//             //console.log("senha inválida")
//             return "senha inválida"
//         }

//     }

//     calcularDesconto( cupom ){

//         let desconto = 0
//         if( cupom == "DESC20" ) {
//             desconto = 20
//         } else if( cupom == "FESTA10" ){
//             desconto = 10
//         }

//         /* let total = this.subtotalCompra - desconto
//         return total */
//         return this.subtotalCompra - desconto

//     }
// }

// const usuario = new Usuario()
/* usuario.email = "ja@gmail.com"
usuario.senha = "1234"

let mensagem =usuario.logar()
console.log(mensagem) */

/* usuario.subtotalCompra = 500
console.log(usuario.calcularDesconto( "FESTA10" )) */

// Pilar - Encapsulamento
// class Carro {
//     constructor(){
//         this.modelo = "Gol",
//         this.cor = "Vermelho"
//     }
//     frear(){
//         /* freio com tecnologia a disco 
//         .
//         .
//         .
//         */
//         console.log("parar o carro")
//     }
// }

// const carro = new Carro()
// carro.frear()

// Encapsulamento, modificadores de acesso e getters e setters
class ContaBancaria {
    constructor(){
        // private, protected e public
        this._numeroConta = 0
        this._saldo = 0
    }

    sacar( valorSaque ){
        this._saldo = this._saldo - valorSaque
    }

    depositar( valorDeposito ){
        this._saldo += valorDeposito
    }

    get saldo(){
        return this._saldo
    }

    set saldo( novoSaldo ){
        if ( novoSaldo  > 0 ){
            this._saldo = novoSaldo
        }
    }
    get numeroConta(){
        return "Número: " + this._numeroConta
    }

    set numeroConta( numero ){
        if ( numero > 0 ){
            this._numeroConta = numero
        }
    }

}

const conta = new ContaBancaria()
//conta.numeroConta = 60
//conta.numeroConta = 60
//console.log( conta.numeroConta )

conta.saldo = 500 // segura
conta.sacar(50)
conta.depositar(100)

console.log( conta.saldo )