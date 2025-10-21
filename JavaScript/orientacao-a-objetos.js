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
// class ContaBancaria {
//     constructor(){
//         // private, protected e public
//         this._numeroConta = 0
//         this._saldo = 0
//     }

//     sacar( valorSaque ){
//         this._saldo = this._saldo - valorSaque
//     }

//     depositar( valorDeposito ){
//         this._saldo += valorDeposito
//     }

//     get saldo(){
//         return this._saldo
//     }

//     set saldo( novoSaldo ){
//         if ( novoSaldo  > 0 ){
//             this._saldo = novoSaldo
//         }
//     }
//     get numeroConta(){
//         return "Número: " + this._numeroConta
//     }

//     set numeroConta( numero ){
//         if ( numero > 0 ){
//             this._numeroConta = numero
//         }
//     }

// }

// const conta = new ContaBancaria()
//conta.numeroConta = 60
//conta.numeroConta = 60
//console.log( conta.numeroConta )

// conta.saldo = 500 // segura
// conta.sacar(50)
// conta.depositar(100)

// console.log( conta.saldo )

// Herança - Reutilização e manutenção

// Classe: Cao e Passaro

/* class Animal {// superclasse - pai
    constructor( pCor, pTamanho, pPeso ){
        this.cor = pCor
        this.tamanho = pTamanho
        this.peso = pPeso
    }

    correr(){
        console.log("correr")
        console.log("como")
        console.log("um ")
        //30 linhas de códigos
    }
    dormir(){
        console.log("dormir")
    }
}
class Cao extends Animal{// subclasse - filha
    constructor( pCor, pTamanho, pPeso, pOrelha ){
        super( pCor, pTamanho, pPeso )
        //super.cor = "Cor do cão"
        this.tamanhoOrelha = pOrelha
    }

    correr(){
        super.correr() // Sobrescrever outro método -> Polimorfismo
        console.log("cao")
        // 5 linhas de códigos
    }
    latir(){
        console.log("latir")
    }
}

class Passaro extends Animal {// subclasse - filha

    constructor( pCor, pTamanho, pPeso ){
        super( pCor, pTamanho, pPeso )
    }
    correr(){
        super.correr() // Sobrescrever outro método -> Polimorfismo
        console.log("passaro")
        // 5 linhas de códigos
    }
    voar(){
        console.log("voar")
    }
}

class Papagaio extends Passaro {
    constructor( pCor, pTamanho, pPeso, pSabeFalar ){
        super( pCor, pTamanho, pPeso )
        this.sabeFalar = pSabeFalar
    }
    falar(){
        console.log("falar")
    }
} */

// Instancia
//const animal = new Animal( "Amarelo", 60, 3 )
/* const cao = new Cao( "Amarelo", 60, 3 , 5 )
const passaro = new Passaro( "Marrom", 45, 3 )
const papagaio = new Papagaio( "Verde", 35, 2, true )

console.log( papagaio.sabeFalar)
console.log( papagaio.cor )
console.log( passaro.cor) */

//cao.tamanhoOrelha = 4
//console.log( cao.tamanhoOrelha )

//animal.cor = "Amarelo"
//console.log( animal.cor )

//cao.correr()
//passaro.correr()
//cao.cor = "Marrom"
//console.log( cao.cor )

// cao.tamanhoOrelha = 50
// console.log( cao.tamanhoOrelha )

// papagaio.correr() // Animal
// papagaio.voar() // Passaro
// papagaio.falar() // Papagaio

//cao.correr()

// passaro.correr()
// passaro.voar()
//passaro.cor = "Amarelo"
//console.log( passaro.cor )

/* cao.correr()
cao.latir()
passaro.correr()
passaro.voar() */

/* Objetos literais - melhorias */
/* let nome = "Notebook"
let preco = 1200 */

//objeto literal
// const produto = {
//     nome,
//     preco: preco,
//     exibirProduto(){
//         console.log(`${this.nome}, ${this.preco}, ${this.categoria}`)
//     }
// }

// const pro = produto
// pro.preco = 2000
// produto.preco = 3000

// console.log(pro.preco)
// console.log(produto.preco)

/* produto.categoria = "Eletronicos"
produto.exibirProduto = function(){
    console.log(`Preço: ${this.preco}`)
}
produto.exibirProduto() */
// delete produto.categoria
// produto.nome = "Alterar"

// produto.exibirProduto()
// console.log(produto.categoria) 

/* Objetos constantes */
// const produto = {
//     nome: "Notebook"
// }

// //Object.freeze(produto)
// produto.nome = "Celular"
// produto.preco = 120

// console.log(produto)


// Tratamento de erros com: Try/Catch/Throw
// function contarQuantidadeLetras( produto ){
//     try {
//         console.log( produto.nome.length )
//         console.log("teste")
//     } catch(erro) {
//         //tratarErro( erro )
//         console.log("Erro ao processar, código erro: 164")
//     } /* finally {
//         console.log("Fim da execução")
//     } */
// }

/* function tratarErro( erro ){
    throw new Error("Código erro: 164")
}

const produto = {
    nom: "Notebook",
    preco: 1200
}

contarQuantidadeLetras(produto) */

// Funções construtoras
/* class Hotel {

} */

// const Hotel = function(){
//     this.nome = "Hotel do Jamilton"
//     this.quantidadeSuites = 30
//     this.suitesOcupadas = 25

//     this.reservar = function(){
//         this.suitesOcupadas++
//         console.log("ocupadas: " + this.suitesOcupadas)
//     }
// }

// const hotel = new Hotel()
// //typeof Hotel
// hotel.quantidadeSuites
// console.log(hotel.quantidadeSuites)
// hotel.reservar()
// hotel.nome = "José"
// console.log(hotel.nome)

// Funções construtoras - encapsulamento
// const Hotel = function(){

//     this.nome = "Hotel do Jamilton"
//     this.quantidadeSuites = 30
//     let suitesOcupadas = 25

//     this.reservar = function(){
//         if( suitesOcupadas < this.quantidadeSuites ){
//             suitesOcupadas++
//             console.log("ocupadas: " + suitesOcupadas)
//         }else {
//             console.log("Estamos lotados")
//         }
//     }
// }

// const hotel = new Hotel()
// //typeof Hotel
// hotel.quantidadeSuites
// console.log(hotel.quantidadeSuites)
// hotel.nome = "José"
// console.log(hotel.nome)
// hotel.reservar()
// hotel.reservar()
// hotel.reservar()
// hotel.reservar()
// hotel.reservar()
// hotel.suitesOcupadas = 20
// hotel.reservar()

//Funções Factory
// Factory - Design Pattern (padrão de design ou padrão de projetos)
// Padrão de projetos -> forma comum de resolver problemas

const produto1 = {
    nome: "Notebook",
    preco: 1200
}

const produto2 = {
    nome: "Notebook",
    preco: 1200
}

const ProdutoFactory = function(nome, preco){

    //dados

    return {
        nome,
        preco,
        recuperarAvalizacoes(){
            console.log(`Avaliações para ${this.nome}`)
        }
    
    }
}

const produto = ProdutoFactory("Notebook", 1200)
produto.recuperarAvalizacoes()

const produtoNovo = ProdutoFactory("Celular", 1200)
produtoNovo.recuperarAvalizacoes()
console.log(produtoNovo)