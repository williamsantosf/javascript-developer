/*

    2. O IMC - Índice de Massa Corporal é um critério da OMS para indicar a condição do peso de uma pessoa.
    Formula IMC:
    IMC = peso / (altura * altura)
    Elabore um algoritmo que, dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo:

    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso Normal;
    - Entre 25 e 30 Acima do Peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obesidade Grave;
*/

let peso = 100;
let altura = 1.80;
let imc = peso / (altura * altura);

console.log("O IMC com os dados informados é igual à: " + imc.toFixed(1));

if (imc < 18.5){
    console.log("Você está abaixo do peso!");
}else if (imc >= 18.5 && imc < 25){
    console.log("Você está em seu peso normal!")
}else if(imc >= 25 && imc < 30){
    console.log("Você está acima do peso!")
}else if(imc >= 30 && imc < 40){
    console.log("Você está Obeso!")
}else{
    console.log("Você está em obesidade grave, procure imediatamente um Médico!")
}
