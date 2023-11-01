const numero = 20;

const IsNumeroPar = (numero % 2) === 0; //módulo da divisão, retorna true. "===" Avalia tanto o formato, quanto o conteúdo da variável.
const numeroDivisivelPor5 = (numero % 5) === 0;
console.log(IsNumeroPar); //true (a variável é um boolean)

//Se (condição avaliada for verdadeira). Apenas 1 if só avalia se e verdadeira e executa, caso contrário não executa.
if (IsNumeroPar){
    console.log("Número Par. Condição avaliada verdadeira");
}

//Se condição avaliada for falsa (!) é um operador de negação
if (!IsNumeroPar){
    console.log("Número Ímpar. Condição avaliada é falsa");
}
//Por padrão, o IF sempre testa se a expressão é verdadeira.

//IF-ELSE
if (IsNumeroPar){
    console.log("Número Par!");
}else{
    console.log("Número Ímpar");
}

//IF-ELSE IF
if(numero === 0){
    console.log("O número é inválido");
}else if(numeroDivisivelPor5){
    console.log("O Número é divisível por 5!")
}else{
    console.log("O número não é divisível por 5!")
}

/*BOAS PRÁTICAS
    É uma boa prtácia iniciar o nome de variáveis booleanad com "is"
*/