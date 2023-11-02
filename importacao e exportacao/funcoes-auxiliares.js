//A função gets() é para simular as entradas de um usuário, cada vez que ela for chamada.

//Criamos uma lista com as entradas
const entradas = [5, 50, 10, 98, 23];

//criamos um contador de chamadas para a função
let i = 0;

//a função gets () tem uma variável valor que recebe a lista e posição [i]. Essa posição está guardada na variável i criada acima
function gets () {
    const valor = entradas[i];
    i++; //incremento da variável i para que na próxima chamada, ela pegue a posição seguinte (i++)
    return valor; //retorna o valor encontrado na posição indicada pelo número na variável i.
}


function print (texto) {
    console.log(texto);
}


module.exports = { gets, print};