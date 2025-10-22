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
function processar(callbackSucesso, callbackErro){
    /* várias operações, implemetações e ações... */

    let resultadoProcessamento = true
    if( resultadoProcessamento ){
        callbackSucesso()
    } else {
        callbackErro()
    }
}

const salvarResultado = function(){
    /* várias ações de sucesso... */
    console.log("salvar resultado")
}

const erro = function(){
    /* várias ações de erro... */
    console.log("erro")
}

//() => {...} Arrow function
processar(salvarResultado, erro)