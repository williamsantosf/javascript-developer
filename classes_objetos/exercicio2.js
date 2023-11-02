/*
    2. Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor de seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa, dê a ela um nome. Essa pessoa tem 70 kg e 1,75 de altura e peça para essa pessoa dizer o valor de seu IMC.
*/

class Pessoa {
    nome;
    peso;
    altura;
    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }

    classificarImc (){ //LEMBRE DE SALVAR O RETORNO DE OUTROS MÉTODOS EM VARIÁVEIS.
        const imc = this.calcularImc();
        if (imc < 18.5){
            return `Eu ${this.nome}, estou abaixo do peso!`
        }else if (imc >= 18.5 && imc < 25){
            return `Eu ${this.nome}, estou em meu peso normal!`
        }else if(imc >= 25 && imc < 30){
            return `Eu ${this.nome}, estou acima do peso!`
        }else if(imc >= 30 && imc < 40){
            return `Eu ${this.nome}, estou Obeso!`
        }else{
            return `Eu ${this.nome}, estou em obesidade grave!`
        }
           
    }
}
p1 = new Pessoa ("João",70, 1.75);
console.log(p1.classificarImc());

//MÉTODOS DE CLASSE NÃO PODEM SER PASSADOS COMO PARÂMETRO PARA OUTROS MÉTODOS DIRETAMENTE. ELES DEVEM SER CHAMADOS INTERNAMENTE.