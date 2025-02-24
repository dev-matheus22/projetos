let pessoa = {
    nome: "Maatheus",
    idade: 24,
    falar: function(){
        console.log("Olá!");
    }, soma: function(a,b){
        return a+ b;
    }
};

console.log(pessoa.nome);

pessoa.falar();