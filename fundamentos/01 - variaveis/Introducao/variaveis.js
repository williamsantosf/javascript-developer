let precoCombustivel = 5.79;
let mediaConsumo = 10;
const distancia = 100;

let gastoViagem = (distancia/mediaConsumo)*precoCombustivel

console.log("O gasto da viagem será: " + gastoViagem.toFixed(2))

//prop .toFixed para arredondamento em 02 casas decimais.
