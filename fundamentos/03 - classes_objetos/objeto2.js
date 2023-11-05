const pessoa = {
    nome: "William Santos",
    idade: 36,
    escolaridade: "SUP COMP",
    descrever: function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

pessoa.altura = 1.80;

delete pessoa.escolaridade;

console.log(pessoa);

pessoa.descrever(); 

pessoa.nome = "Jakson Paes"
pessoa.descrever = function() {
    console.log(`Meu nome é ${this.nome}.`);
}
pessoa.descrever();

//Outra sintaxe:

pessoa['nome'] = 'Deise Oliveira'; //acesso dinâmico ao atributo (quando não sabemos o nome do atributo)
pessoa.nome = 'Jocelaine'; //acesso direto ao atributo (necessário saber o nome do atributo)



