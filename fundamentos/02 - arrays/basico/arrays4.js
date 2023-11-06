/*
    Imagine que tenhamos uma lista de notas, que pode variar de tamanho, de acordo com o critério de avaliação de cada professor.
    Ou seja, a quantidade de notas pode variar.
    Para isso, criaremos um laço for, que sempre irá calcular a média simples, sempre considerando o array em seu tamanho atual.
    Desse modo, podemos incluir tantas notas quanto forem necessárias, que a média se atualizará dinamicamente.
*/
//Criação de um array vazio.
const notas = [];

//inclusão das notas no array
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);
console.log(notas);

//criação d euma variável que guarda  a soma. Deve ser let pois seu conteúdo será atualizado dinamicamente
let soma = 0;

//laço que percorre cada posição do array e incremente o valor encontrado à variável soma
//lê-se: para nota na posição 0, enquanto posição menos que o tamanho do array, const nota recebe o valor na posição e incremente a variável soma
//em seguida vai para a próxima posição (i++)
for (let i = 0; i < notas.length; i++) { 
  const nota = notas[i];
  soma = soma + nota;
}

//por fim, declaramos variável média que receberá a variável soma dividida pelo tamanho do array.
const media = soma / notas.length;
console.log(media.toFixed(1));
