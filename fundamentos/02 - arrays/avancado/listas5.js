//JOIN: Junta elementos de uma lista com um separador específico e transforma numa string

const lista = [1, 2, 3]
console.log(lista.join('/'))
//saída: 1/2/3

const lista2 = [{nome: 'Renan'}, {nome: 'Andressa'}, {nome: 'Vitor'}, {nome: 'Amanda'}]
console.log(lista2.map((e) => e.nome).join('; ')) 
//aplicando map na lista, arrow function onde e é cada elemento, do qual extraimos o atributo nome, e unimos com ;
//Renan; Andressa; Vitor; Amanda

//Filtrando elementos pela letra inicial
console.log(
    lista2.map(e => e.nome)
        .filter((e) => e.startsWith('A')) //mapeia, filtra, classifica pela letra e junta pelo separador
        .join('; ')
)
//Andressa; Amanda


//Jogando em uma loista HTML
const elementosHTML =
lista2.filter((e) => e.nome.startsWith('A'))
    .map(e => `<li>${e.nome}</li>`)
    .join('') 

console.log(elementosHTML)
// <li>Andressa</li><li>Amanda</li>

//As funções map, filter, reduce sempre recebem uma arrow function.