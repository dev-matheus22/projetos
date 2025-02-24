console.log(this);

alert('Olá');
this.alert('Olá 2');


let pessoa = {
    nome: "Maatheus",
    idade: 24,
    falar: function(){
        console.log("Olá!");
    },
    dizerNome: function(){
        console.log("O meu nome é " + this.nome);
    }, aniversario: function(){
        this.idade += 1;
    }
};

pessoa.dizerNome();

pessoa.aniversario();

console.log(pessoa.nome);
console.log(pessoa.idade);