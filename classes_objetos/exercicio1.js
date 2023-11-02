/*
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustivel por km rodado.
Crie um método que dado a quantidade de quilometros e o preço do combustivel nos dê o valor gasto em reais para realizar esse percurso.
*/

class Carro {
    marca;
    modelo;
    cor;
    gastoMedio;

    constructor (marca, modelo, cor, gastoMedio) {
      this.marca = marca;
      this.modelo = modelo;
      this.cor = cor;
      this.gastoMedio =gastoMedio;
    }
  
    calcularGastoViagem(destino, kmTrajeto, precoCombustivel) {
        const gasto = (kmTrajeto/this.gastoMedio) * precoCombustivel;
        return `O gasto da viagem com o véiculo ${this.marca}/${this.modelo} para o destino ${destino} será de R$ ${gasto.toFixed(2)}`
    }
}

saveiro = new Carro("Volkswagen","Saveiro","Prata", 13);
console.log(saveiro);
console.log(saveiro.calcularGastoViagem("Rio de Janeiro", 800, 7));
