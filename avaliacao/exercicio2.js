/*
2. Faça um programa que receba N (quantidade de números) e seus respectivos valores.
Imprima o maior numero par e o menor numero impar.
        exemplo:
            Entrada:
                5
                3
                4
                1
                10
                8

            Saida:
                Maior numero par: 10
                Menor numero impar: 1
*/

const { gets, print } = require("./funcoes-auxiliares-ex2");

const quantidadeDeNumeros = gets();
let maiorPar = null;
let menorImpar = null;

for (let i = 0; i < quantidadeDeNumeros; i++) {
  const numeroEncontrado = gets();
  if (numeroEncontrado % 2 === 0 && numeroEncontrado > maiorPar || maiorPar === null) {
    maiorPar = numeroEncontrado;
  } else {
    if (menorImpar === null || numeroEncontrado < menorImpar) {
      menorImpar = numeroEncontrado;
    } 
  }
}

//Obs.: Se temos duas situações possíveis, criamos a lógica da primeira e o que não cai nela é um else.
//dentro do else podemos colocar mais um if, e ir implementando uma outra lógica para tratar o que não caiu na primeira.
//No exemplo acima: caso o numero não fosse par, automaticamente cai na segunda lógica (else).Dentro do else, criamos mais duas condições.

print(`Maior número par é: ${maiorPar}`);
print(`Menor numero ímpar é: ${menorImpar}`);


//OBS.: O código não está funcionando, se substituir o 1 no array por qualquer outro número impar, ele consifdera esse numero o maior.
//e desconsidera o 3.