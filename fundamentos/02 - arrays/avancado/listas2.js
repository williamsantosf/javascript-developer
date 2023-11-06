//filter: retorna uma nova lista com base na validação de um boolean.

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const listaDeNumerosPares = lista.filter((element) => { //ARROW FUNCTION function(element: number): boolean
    return (element % 2 === 0)
})

console.log(lista) //saída: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(listaDeNumerosPares) //saída: [ 2, 4, 6, 8, 10 ]