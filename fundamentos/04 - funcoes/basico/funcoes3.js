function calcularImc(peso, altura){
    return peso / Math.pow(altura,2)
}

function classificarImc(imc){
    if (imc < 18.5){
        return "Você está abaixo do peso!";
    }else if (imc >= 18.5 && imc < 25){
        return "Você está em seu peso normal!"
    }else if(imc >= 25 && imc < 30){
        return "Você está acima do peso!"
    }else if(imc >= 30 && imc < 40){
        return "Você está Obeso!"
    }else{
        return "Você está em obesidade grave, procure imediatamente um Médico!"
    }
}

//FUNÇÕES ANÔNIMAS:
/*
    Quando queremos executar aquela função somente uma vez.
    São funções executadas imediatamente.
    Nesse caso envolvemos a função entre parênteses, e ao fim dela insrimos ().
*/
(function (){ //função não tem nome (ANÔNIMA)
    let peso = 100;
    let altura = 1.80;

    let imc = calcularImc(peso, altura)
    console.log(classificarImc(imc));
})(); //executada imediatamente após declaração

