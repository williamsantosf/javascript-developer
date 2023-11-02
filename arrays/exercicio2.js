//2. Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada numero par encontrado.

function pairNumsIn (ini, end){
  for (let i = ini; i <= end; i++) {
    if ( i % 2 === 0){
      console.log(i);
    }
  }
}

pairNumsIn(10,50);


function numerosPares(numero) {
  for (let i = 0; i <= numero; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

const notas = [2, 7, 3, 8, 10, 4];
let maiorNota = notas[0];

for (let i = 1; i < notas.length; i++) {
  if (notas[i] > maiorNota) {
    maiorNota = notas[i];
  }
}