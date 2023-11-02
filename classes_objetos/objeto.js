//OBJETOS
//Objetos pode conter funções. Nesse contexto, funções são métodos dos objetos.
const pessoa = {
    nome: "William Santos",
    idade: 36,
    escolaridade: "SUP COMP",
    descrever: function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

//podemos atribuir dinamicamente novos atributos aos objetos
pessoa.altura = 1.80;

//Podemos também deletar atributos dinamicamente
delete pessoa.escolaridade;

console.log(pessoa);

pessoa.descrever(); //chamada do método

//assim como os atributos, os métodos dos objetos também podem ser sobrescritos
pessoa.nome = "Jakson Paes"
pessoa.descrever = function() {
    console.log(`Meu nome é ${this.nome}.`);
}

pessoa.descrever();

//Outra sintaxe:



