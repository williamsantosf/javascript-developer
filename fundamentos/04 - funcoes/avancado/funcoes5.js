// Invocação Direta, Call, Apply e Operador New

const pessoa = {
    nome: 'William',
    idade: 36
}


function gritar (prefixo) {
    console.log(prefixo,this.nome)
}

gritar('Olaaaa') //Invocação direta (nesse caso retorna undefined pois não está no mesmo contexto do objeto)

//Nos casos abaixo, os metodos apply e call colocam a função gritar no contexto do objeto.
//assim, a chamada da função conhece o atributo nome e concatena o parãmetro e o atributo.
gritar.apply(pessoa,['Olaaaa'])
gritar.call(pessoa, 'Olaaaa')


// Saídas:
// Olaaaa undefined
// Olaaaa William
// Olaaaa William