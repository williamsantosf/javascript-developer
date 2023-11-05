/*
    VALOR A SER PAGO NO PRODUTO:
    - À vista Débito, recebe 10% de desconto;
    - À vista no dinheiro ou PIX, 'recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/

const precoProduto = 100;
const formaPgto = 2;

if (formaPgto === 1){
    console.log(precoProduto - (precoProduto * 0.1));
}else if (formaPgto === 2){
    console.log(precoProduto - (precoProduto * 0.15));
}else if(formaPgto ===3){
    console.log(precoProduto);
}else{
    console.log(precoProduto + (precoProduto * 0.1));
}