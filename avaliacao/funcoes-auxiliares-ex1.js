
const entradas = [-3];
let i = 0;

function gets (){
    const valor = entradas;
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print};