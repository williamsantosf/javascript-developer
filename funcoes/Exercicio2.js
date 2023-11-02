function sayMyName(nome){
    return "Meu nome é " + nome;
}

function verificarIdade (idade){
    if (idade < 18){
        console.log(sayMyName("William") + " É menos de Idade.")
    }else{
        console.log(sayMyName("William") +" É maior de Idade.")
    }
}

verificarIdade(25);