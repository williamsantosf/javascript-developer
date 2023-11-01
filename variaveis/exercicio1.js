/*
    Calcular o conceito do aluno com base na media:
    Média  = (nota 1 + nota 2 + nota 3) / ;;

    Classificação:
    -
    Média menor que 5, reprovado;
    Média entre 5 e 7, recuperação;
    Média acima de 7, paprovado;
*/

let nota1 = 2;
let nota2 = 2;
let nota3 = 2;
const media = (nota1 + nota2 + nota3) / 3;

console.log(media.toFixed(1));

if (media < 5) {
  console.log("Aluno Reprovado");
} else if (media >= 5 && media <= 7) {
  console.log("Aluno em Recuperação!");
} else {
  console.log("Aluno Aprovado");
}
