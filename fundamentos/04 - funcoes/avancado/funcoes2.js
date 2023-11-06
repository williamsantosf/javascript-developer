//FUNCTION EXPRESSION E FUNCTION DECLARATION

//Declaration: aqui sofre hoistin
function nomeDaFuncao () {
    console.log('nomeDaFuncao')
}



//Expretion: não acontece hoistin
const nomeDeOutraFuncao = function () {
    console.log('nomeDeOutraFuncao')
}

nomeDaFuncao()
nomeDeOutraFuncao()