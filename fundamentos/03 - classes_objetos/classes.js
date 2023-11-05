//CLASSES

class Pessoa{
    nome;
    idade;
    descrever() {  //na classe, o método não precisa ser dito uma function
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

//Instanciando a classe pessoa
const william = new Pessoa();
william.nome = 'William';
william.idade = 36;

const jakson = new Pessoa();
jakson.nome = 'Jakson Paes';
jakson.idade = 41;

console.log(william);
console.log(jakson);

//chamando o método dos objetos instanciados
william.descrever();
jakson.descrever();
