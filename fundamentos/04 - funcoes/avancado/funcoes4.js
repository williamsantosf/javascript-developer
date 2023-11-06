//CLOSURES OU FECHAMENTOS

function soma(x) {
  return function (y) {
    return x + y;
  };
}

// console.log(soma (10)(10)) saída: 20

const somaParcial = soma(10);

console.log(somaParcial(20));
console.log(somaParcial(30));
console.log(somaParcial(40));

// // O código que você compartilhou é um exemplo de closure. Em JavaScript, uma closure é uma
// função que tem acesso a variáveis em seu escopo externo, mesmo depois que a função externa foi retornada.
// No exemplo que você compartilhou, a função soma retorna uma função anônima que recebe um argumento y e retorna
// a soma de x e y. A função somaParcial é uma referência para a função anônima retornada por soma com x definido como 10.
// Quando chamamos somaParcial(20), x é 10 e y é 20, portanto, a saída é 30. Da mesma forma, quando chamamos somaParcial(30),
//  x é 10 e y é 30, portanto, a saída é 40. Finalmente, quando chamamos somaParcial(40), x é 10 e y é 40,
//  portanto, a saída é 50.
