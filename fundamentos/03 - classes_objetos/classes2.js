//CLASSES
/*Utilizamos o método contrutor quando queremos forçar que a estrutura da classe seja cumprida. 
ou seja, atributos obrigatórios que devem ser passados como parametro
*/
class Pessoa {
  nome;
  idade;
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2023 - idade;
  }

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

const william = new Pessoa('William',36);
const jakson = new Pessoa('Jakson',41);

console.log(william);
console.log(jakson);

william.descrever();
jakson.descrever();
