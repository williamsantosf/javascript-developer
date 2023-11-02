
const nome = 'William';

for (let i = 0; i <nome.length; i++) {
    const letra = nome[i];              //dentro do laço, podemos declarar a variavel que recebere o iterável
    console.log(letra);                 //exibimos a variável que guarda o iterável na posição indicada no loop.
}



const placas = ['RPD-1F94','RPD-8A61','RPD-8E24'];

for (let i = 0; i < placas.length; i++) {
    const placa = placas[i];
    console.log(placa);
}

const modelos = ['Volvo','Scania','Daft','Man','Mercedez'];

for (let i = 0; i < modelos.length; i++) {
    const modelo = modelos[i];
    console.log(modelo);  
}