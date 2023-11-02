//Suponto que a quantidade de alunos possa aumentar, teremos mais números sorteados.
//Melhoramos a lógica do programa, tornando o array dinâmico.
//Para isso, a primeira posição do array deve ser a quantidade de alunos a sortearem os numeros.

let qtdAlunos = 10;
const entradas = [qtdAlunos, 5, 50, 10, 98, 23, 33, 44, 100, 1, 7]; //agora serão 10 entradas

let i = 0;

function gets () {
    const valor = entradas[i];
    i++; 
    return valor; 
}


function print (texto) {
    console.log(texto);
}


module.exports = { gets, print};