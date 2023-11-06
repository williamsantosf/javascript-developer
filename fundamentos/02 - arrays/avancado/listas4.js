//REDUCE: Reduzir a lista á um unico valor.

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const somaDeTodosOsNumeros = lista.reduce((previous, current) => {
    console.log(previous, current)
    return previous + current
}, 0) //O "0" nesse caso é o parametro da função map que indica em qual posição do array deve começar a operação

console.log(somaDeTodosOsNumeros)

//A função vai somando os elementos e o numero final é a soma dos elementos do array.
/* Saida:
0 1
1 2
3 3
6 4
10 5
15 6
21 7
28 8
36 9
45 10
55 */
