//ARRAYS Listas

const funcionarios = ['Willaim','Jocelaine','Deise'];

console.log(funcionarios[0]);

//adicionando itens ao array

funcionarios.push('Keven');
console.log(funcionarios);

funcionarios[4] = 'Iasmin';
console.log(funcionarios);

//substituindo itens no array
funcionarios[3] = 'Josmar';
console.log(funcionarios);

//listas podem iniciar vazias
const alunos = [];
console.log(alunos);

alunos.push('Anna Carolina');
alunos.push(10);
console.log(alunos);

//removendo itens

const frotas = ['241', '242','243'];
console.log(frotas);

frotas.pop(); //.pop remove o último item
console.log(frotas);

frotas.shift(); //shift remove o primeiro
console.log(frotas);

delete frotas[0]; //o delete apaga o conteúdo da posição mas mantém a posição
console.log(frotas); //<1 empty item>



