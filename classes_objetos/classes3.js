
class Pessoa {
  nome;
  idade;
  constructor (nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2023 - idade;
  }

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

//funções também podem receber objetos e operar sobre seus atributos.
function compararPessoas(p1, p2){
  if(p1.idade > p2.idade){
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
  } else if(p2.idade > p1.idade){
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
  }else{
    console.log(`${p1.nome} e ${p1.nome} têm a mesma idade.`);
  }
}

const william = new Pessoa('William',36);
const jakson = new Pessoa('Jakson',41);

compararPessoas(william,jakson);