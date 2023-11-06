//CALLBACKS: Funções são objetos e podem ser passados como parâmetros para outras funções.

function adicao (x, y) {
    return x + y
}

function multiplicacao (x, y) {
    return x * y
}

function calcular (x, operacao, y){
    console.log(operacao(x, y))
}

calcular(10, adicao, 20)
calcular(10, multiplicacao, 20)

//A adição de um evento ao click de um botão é um exemplo de callback

document.getElementById('btn1').addEventListener('click', () => {
    console.log('Clicou!')
})