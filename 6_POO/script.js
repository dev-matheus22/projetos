// // 1 - Métodos

// const animal = {
//     nome: "Bob",
//     latir: function(){
//         console.log("Au au")
//     }
// }

// animal.latir();

// // 2 - Aprofundamentos em métodos

// const pessoa = {
//     nome: "Matheus",

//     getNome: function(){
//         return this.nome;
//     },

//     setNome: function(novNome){
//         this.nome = novNome;
//     }
// }

// console.log(pessoa.nome);

// console.log(pessoa.getNome);

// pessoa.setNome("João");

// // 3 - Prototype

// const text = "asd"

// console.log(Object.getPrototypeOf(text));

// // 4 - Mais sobre prototype

// const myObject = {
//     a: "b"
// }

// const mySecondObject = Object.create(myObject);

// console.log(mySecondObject.a);

// // 5 - classes básicas

// const cachorro = {
//     raca: null,
//     patas: 4,
// }

// const pastorAlemao = Object.create(cachorro);

// pastorAlemao.raca = "Pastor Alemao";

// console.log(pastorAlemao);

// console.log(pastorAlemao.patas);

// // 6 - Função como classe

// function criarCachorro(nome, raca){
//     const cachorro = Object.create({})

//     cachorro.nome = nome
//     cachorro.raca = raca

//     return cachorro
// }

// const bob = criarCachorro("Bob", "vira lata");

// console.log(bob);

// // 7 - Funções como classe

// function Cachorro(nome, raça){
//     this.nome = nome;
//     this.raca = raça;
// }

// const husky = new Cachorro("Uzzy", "Husky");

// console.log(husky);

// // 8 - métodos na função construtora

// Cachorro.prototype.uivar = function(){
//     console.log("Auuuuuuuuu");
// }

// husky.uivar();

// // 9 - Classes ES6

// class CachorroClasse{
//     constructor(nome, raca){
//         this.nome = nome
//         this.raca = raca
//     }
// }

// const jeff = new CachorroClasse("Jeff", "Labrador");

// // 10 - Mais sobre classes

// class Caminhao {
//     constructor(eixos,cor){
//         this.eixos = eixos;
//         this.cor = cor;
//     }
//     descreverCaminha(){
//         console.log(`Este aminhão tem ${this.eixos} eixos e é da cor ${this.cor}`)
//     }
// }

// const scania = new Caminhao(12, "Amarelo");

// scania.descreverCaminha();

// Caminhao.prototype.motor = 4.0;

// const c3 = new Caminhao(6, "Azul");

// console.log(c3.motor);

// // 11 - override

// class Humano{
//     constructor(nome, idade){
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

// const matheus = new Humano("Matheus", 25);

// Humano.prototype.idade = "Idade indefinida"

// // 12 - symbol

// class Aviao {
//     constructor(marca, turbinas){
//         this.marca = marca
//         this.turbinas = turbinas
//     }
// }

// const asas = Symbol();
// const pilotos = Symbol();

// Aviao.prototype[asas] = 2;
// Aviao.prototype[pilotos] = 3;

// const boeing = new Aviao ("Boeing", 10);

// console.log(boeing);

// console.log(boeing[asas]);

// console.log(boeing[pilotos]);

// 13 - getters e setters
class Post{
    constructor(titulo, descricao, tags){
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo(){
        return `Você está lendo: ${this.titulo}`;
    }

    set adicionarTags(tags){
        const tagsArrays = tags.split(",  ")
        this.tags = tagsArrays;
    }
}

const myPost = new Post("Algum post", "descreva seu post", "#newpost");

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "PROGRAM, JAVASCRIPT, JS";

console.log(myPost);

// 14 - herança

class Mamifero{
    constructor(patas){
        this.patas = patas;
    }
}

class Lobo extends Mamifero{
    constructor(patas, nome){
        supeer(patas, patas)
        this.nome = nome;
    }
}

const mike = new Lobo(4, "Shark");






