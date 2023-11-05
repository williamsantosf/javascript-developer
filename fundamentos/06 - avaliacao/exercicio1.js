//1. Faça um programa que receba a média de um aluno.
//Caso a média seja < 5 imprima "Reprovado".
//Caso a média seja >= 5 e < 7 imprima "Recuperação"
//Caso a média seja >= 7 imprima "Aprovado"

const { gets, print } = require("./funcoes-auxiliares-ex1");

const mediaAluno = gets();

if (mediaAluno >=0 && mediaAluno <= 5) {
  console.log("Reprovado");
} else if (mediaAluno >= 5 && mediaAluno < 7) {
  console.log("Recuperação");
} else if (mediaAluno >= 7) {
  console.log("Aprovado");
} else {
  console.log("Número Inválido");
}
