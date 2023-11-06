//First Class Function
//Higher Order Functions

function falarMeuNome () {
    console.log(`Meu nome é William`)
}

const referenciaNova = falarMeuNome

referenciaNova ()

console.log('---------------------------------------------------------')


//Funções recebem outra funções como parametro
function falarMeuNomeCompleto (falarMeuNome){
    falarMeuNome()
    console.log('Santos Francisco')
}

falarMeuNomeCompleto(falarMeuNome)