/*
    VALOR A SER PAGO NO PRODUTO:
    - À vista Débito, recebe 10% de desconto;
    - À vista no dinheiro ou PIX, 'recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/

let precoProduto = 100;
let isParcela = false;
let qtdParcela = 2;
let noDebito = false;
let isPix = false;
let isCash = false;
let desconto10 = (0.10) * precoProduto;
let desconto15 = (0.15)*precoProduto;
let juros = (10/100)*precoProduto;

if (noDebito){
    precoProduto = precoProduto - desconto10;
    console.log("O valor a ser pago será: " + precoProduto.toFixed(2));
}else if(isCash || isPix){
    precoProduto = precoProduto - desconto15;
    console.log("O valor a ser pago será: " + precoProduto.toFixed(2));
}else if(isParcela && qtdParcela > 2){
    precoProduto = precoProduto + juros;
    console.log("O valor a ser pago será: " + precoProduto.toFixed(2));
}else{
    precoProduto = precoProduto;
    console.log("O valor a ser pago será: " + precoProduto.toFixed(2));
}
//Uma forma mais eficiente é atribuir para cada situação um número.
