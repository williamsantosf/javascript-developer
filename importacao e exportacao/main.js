const { gets , print} = require('./funcoes-auxiliares');

//Vide commit para outra forma. Aqui está uma maneira mais simples.

//const numerosSorteados = []; Não criaremos essa lista vazia com os números sorteados.
//Para simplificar a lógica:

let maiorValorEncontrado = 0;    //1. criamos a variável maiorValorEncontrado

for (let i = 0; i < 5; i++) {    //2. Utilizamos o laço para chamar a função 4 vz.
    const numeroSorteado = gets(); //3. Chamada da função
    if (numeroSorteado > maiorValorEncontrado){ //4. Para cada volta do laço, comparamos o numero encontrado com o que está guardado na variável.
        maiorValorEncontrado = numeroSorteado; //5. Caso a condição seja verdadeira, atualizamos o valor da variável maiorValorEncontrado.
    }   //Desse modo, reduzimos a lógica, comparando e armazenando na variavel ao final de cada loop, No final,a  variavel terá guardado o maior valor.
}

//Eliminamos esse segundo for
/*
for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    } 
}
*/
print(maiorValorEncontrado);