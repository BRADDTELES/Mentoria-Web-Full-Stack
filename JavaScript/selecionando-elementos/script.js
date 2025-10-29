function executar(){
    console.log("Clique no botao");
    // botao.removeEventListener('click', executar)
}
function executar2(){
    console.log("Clique Body");
}

// const botao = document.getElementById('botao')
// const botao = document.querySelector('[botao-acao]')
// botao.onclick = executar
// botao.onclick = function(){èxecutar()}

const botao = document.querySelector('[botao-acao]')
const body = document.querySelector('body')

botao.addEventListener('click', executar)
// body.addEventListener('click', executar2)


if( botao.addEventListener ){
    botao.addEventListener('click', executar)
}else {
    botao.attachEvent('onclick', executar)
}