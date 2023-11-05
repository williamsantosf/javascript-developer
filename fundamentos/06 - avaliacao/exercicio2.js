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
  const numeroRecebido = gets();
  
  if (numeroRecebido % 2 === 0) {
    if (maiorPar === null || numeroRecebido > maiorPar){
      maiorPar = numeroRecebido;
    }
    
  } else {
    if (menorImpar === null || numeroRecebido < menorImpar){
      menorImpar = numeroRecebido;
    }
  }
  
}

//USAR NO MÁXIMO DUAS CONDIÇÕES EM UM IF, NO CASO DE MAIS UMA, CONCATENAR COM UM PRÓXIMO IF. 
//Nesse caso um primeiro if pra já criar uma condição para pegar o par e em seguida avaliar o numero par.
//tudo que não for par é impar, logo, o else tem um if para avaliar o numero impar, umas vez que ele já foi encontrado
//por estar fora da condição de ser par.


//Obs.: Se temos duas situações possíveis, criamos a lógica da primeira e o que não cai nela é um else.
//dentro do else podemos colocar mais um if, e ir implementando uma outra lógica para tratar o que não caiu na primeira.
//No exemplo acima: caso o numero não fosse par, automaticamente cai na segunda lógica (else).Dentro do else, criamos mais duas condições.

print(`Maior número par é: ${maiorPar}`);
print(`Menor numero ímpar é: ${menorImpar}`);


