//Agora vamos incrementar o preço condicionado ao tipo de combustivel.

let precoGasolina = 7.00;
let precoEtanol = 4.00;
let tipoCombustivel ="gnv"
const mediaConsumo = 12;
const distancia = 100;
let gastoViagem = 0;
const consumo = (distancia/mediaConsumo)


if(tipoCombustivel === "gasolina"){
    gastoViagem = consumo * precoGasolina;
    console.log("O gasto da viagem será: " + gastoViagem.toFixed(2))

}else if (tipoCombustivel === "etanol"){
    gastoViagem = consumo * precoEtanol;
    console.log("O gasto da viagem será: " + gastoViagem.toFixed(2))

}else{
    console.log("Combustível informado não é válido!")
}

//OBS: let e const restringem a viusibilidade da varável
//var tem escopo global.

