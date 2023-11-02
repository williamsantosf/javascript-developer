/*
    VALOR A SER PAGO NO PRODUTO:
    - À vista Débito, recebe 10% de desconto;
    - À vista no dinheiro ou PIX, 'recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/

function aplicaDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)));
}

function aplicaJuros(valor, juros){
    return(valor + (valor * (juros / 100)));
}

function valorCompra(precoProduto, formaPgto){
    if (formaPgto === 1){
        console.log(aplicaDesconto(precoProduto,10));
    }else if (formaPgto === 2){
        console.log(aplicaDesconto(precoProduto,15));
    }else if(formaPgto ===3){
        console.log(precoProduto);
    }else{
        console.log(aplicaJuros(precoProduto,10));
    }
}

valorCompra(100,1);