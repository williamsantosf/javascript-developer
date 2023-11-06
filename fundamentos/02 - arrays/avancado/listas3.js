//MAP

//Primeiro um exemplo usando o for:

class Pessoa {
    constructor(name) {
      this.name = name;
    }
}

const lista = [new Pessoa("Camila"), new Pessoa("Paulo"), new Pessoa("Diego"), new Pessoa("William"), new Pessoa("Deise")];

const listaNomes = [] //criação de uma lista vazia

for (let i = 0; i < lista.length; i++) { //laço que percorre a lista até seu limite
    const element = lista[i];            //variável que receberá o nome
    listaNomes.push(element.name)        //.push para incluir na lista nova o atributo coletado
}
console.log(listaNomes)


//AGORA veremos como reescrever o código acima com a função map

const listaNomes2 = lista.map((element) =>{
    return element.name
})
console.log(listaNomes2)


//MAIS UMA MANEIRA, utilizando o indice

const listaNomes3 = lista.map((element, i) => {
    return `${i} - ${element.name}`
})
console.log(listaNomes3)


//FORMA REDUZIDA DE ESCREVER ARROW FUNCTION: somente quando a função não tiver corpo.

const listaNomes4 = lista.map((element) => element.name)
console.log(listaNomes4)

//Retornando os elementos em uma lista HTML:

const listaHtml = lista.map((element) => {
    return ` 
        <li>
            ${element.name}        
        <li>  
    `
})
console.log(listaHtml)


  
  

