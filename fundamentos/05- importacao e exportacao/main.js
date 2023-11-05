const { gets , print} = require('./funcoes-auxiliares');

//a variavel quantidadeDeAlunos será o primeiro retorno da função gets()
const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;    

//agora temos nosso laço dinâmico, de acordo com a quantidade de alunos na turma.
for (let i = 0; i < quantidadeDeAlunos; i++) {    
    const numeroSorteado = gets(); 
    if (numeroSorteado > maiorValorEncontrado){ 
        maiorValorEncontrado = numeroSorteado; 
    }   
}

print(maiorValorEncontrado);