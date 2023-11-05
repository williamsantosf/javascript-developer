//1. Crie um programa que, dado um número imprima sua tabuada.

function tabuada(numero) {
  const multi = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

  for (let i = 0; i < multi.length; i++) {
    result = multi[i] * numero;
    console.log(`${numero} * ${multi[i]} = ${result}`);
  }
}

//refatorando

function tabuada2(numero) {
  
    for (let i = 1; i <= 10; i++) {
      result = i * numero;
      console.log(`${numero} * ${i} = ${result}`);
    }
  }
  
tabuada2(7);