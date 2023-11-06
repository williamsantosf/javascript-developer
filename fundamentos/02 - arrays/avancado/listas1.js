//foreach

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

lista.forEach((value, i, listRef) => {
    console.log(value + i)
})

//A assinatura do forEach tem os tres parametros: value, i, listRef. Acima estamos pegando o valor de cada item e somando
//à posição.

//O forEach equivale ao for tradicional, a função acima equivale à:

const cb = (value, i, listRef) => {
    console.log(value + i)
}

lista.forEach(cb)

for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    cb(element, i, lista)    
}

//o forEach tende a ser mais lento que o for.
//Forma mais utilizada:
lista.forEach((value) => {
    console.log(value)
})