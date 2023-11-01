/*FUNÇÕES
Blocos de códigos reutilizáveis
*/

//Podem ou não receber parâmteros, e podem ter ou não retirno.

function incrementaJuros(valor, percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementaJuros(100,10)); //valor acrescido do percentual