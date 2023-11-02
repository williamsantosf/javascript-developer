const { gets , print} = require('./funcoes-auxiliares');
/*
    Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número.
    Dados de entrada: 5, 50, 10, 98, 23. Saída esperada: 98.
*/
//Para simular as diversas chamada à função gets, que simula a entrada do usuário, criaremos um laço for para percorrer o array que contém as entradas

//Criamos uma lista vazia para receber as chamadas a função gets()
const numerosSorteados = [];

//Criamos um laço for para chamar 4 vezes a função gets(). Na variavel numeroSorteado guardamos a função, e em seguida com .push, adicionamos 
//o seu retorno no array vazio criado anteriormente.
for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}
/*
CRiamos um segundo laço for para percorrer o array criado, com os "inputs", para achar o maior número sorteado.
Criamos a variavel maiorValor, que vai o numero encontrado pra cada volta do laço.
em seguida uma condicional if, para comparar o valor encontrado com o último valor encontrado, e caso ele seja maior,
substituirá o valor da variável. Ao final da execução, teremos o maior valor armazenado na variavel maiorValor.
*/

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    } 
}

print(maiorValor);