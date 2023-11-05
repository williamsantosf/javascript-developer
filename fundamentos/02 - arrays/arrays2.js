//ARRAYS e estruturas de repetrição

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

console.log(notas);
console.log(notas.length); //.length retorna o tamanho do array

//FOR
/*
    for (variável de controle; condicao da repetição; ação após cada laço){
        ação a ser executada a cada volta do loop
    }
*/

const nome = 'William Santos Francisco';

console.log(nome.length);

for (let i = 0; i <nome.length; i++) {
    console.log(nome[i]);
    
}