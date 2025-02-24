// 1 - criando uma função

function minhaFuncao(){
    console.log("Testando");
}

minhaFuncao();

const minhaFuncaoEmVariavel= function(){
    console.log("Função em variável");
} // Não pode ser sobescrita

minhaFuncaoEmVariavel();

function funcaoParametro(txt){
    console.log('Olá, txt');
}

funcaoParametro("Matheus");

// 2 - Retorno

const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(a, b){
    return a + b;
}

const resultado = soma(a,b);

console.log(resultado);

// 3 - escopo

let y = 10;

function testandoEscopo(){
    let y = 20
    console.log(y);
}

console.log(y);

testandoEscopo();

// 4 - escopo aninhado

let m = 100

function escopoAninhado(){
let m = 200

if(true){
    let m = 300

    if(true){
        let m = 400

        console.log(m);

    }

    console.log(m);
}

console.log(m);

}

escopoAninhado();

console.log(m);

// 5 - ArrowFunction

const testArrow = () => {
    console.log("Esta é uma arrow function");
}

testArrow();

const parOuImpar = (n) => {
    if(n % 2 === 0) {
        console.log("Par");
        return
    }

    console.log("Impar");
}

parOuImpar(5);

parOuImpar(10);

// 6 - Mais sobre arrowFunction

const raizQuadrada = (x) => {
    return x * x;
}

console.log(raizQuadrada(4));

const raizQuadrada2 = (x) => x*x

console.log(raizQuadrada2(5));

const helloWorld = () => console.log("Hello World")

// 7 - Argumentos opcionais

const multuplicacao = function (m , n){
    if(n === undefined ){
        return m* 2;
    } else {
        return m * n;
    }
}

console.log(multuplicacao(5));

console.log(multuplicacao(2, 4));
    

const greeting = (name) => {
    if (!name){

        console.log("Olá");
    }
    console.log(`Olá ${name}!`)
}

greeting();

greeting("Matheus");

// 8 - Argumentos com valor default

const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}`;
};

console.log(customGreeting("Matheus"));

console.log(customGreeting("João", "Bom dia"));

const repeatText = (text, repeat = 2) => {
    for(let i = 0; i < repeat; i++){

    
        console.log(text);
}
}
repeatText("Oi");
repeatText("Feliz natal", 5);

// 9 - Closure

function somaFuncao(){
    let txt = "Alguma coisa"


    function display(){
        console.log(txt)
    }
    display();
}

somaFuncao();

// 10 - Mais sobre closures

const multiplicacaoClosure = (n) => {
    return (m) => {
        return n * m;
    };
};

const c1 = multiplicacaoClosure(5);

const c2 = multiplicacaoClosure(10);

console.log(c1);

console.log(c2);

console.log(c1(5));

console.log(c2(10));

// 11 - Recursão

const untilten = (n, m) => {
    if(n < 10) {
        console.log("A função parou de executar")

    } else {
        const x = n - m

        console.log(x)

        untilten(x, m)
    }
}

untilten( 100, 7);

// Infinite function

//  function run (){
// console.log("Executando..")
// return();
// }

// run()

function factorial (x){
    if (x === 0){
        return 1
    } else {
        return x * factorial(x - 1)
    }
}

const num = 6

const result = factorial(num);

console.log(`O fatorial do número ${num} é ${result}`);

// Parametros REST (não precisa especificar a quantidade de parâmetros)

function soma(...valores){
    let tam = valores.length
    let res = 0
    for ( let v of valores){
        res+=v
    } return res
}

console.log(soma(2,3,4))

// Método MAP

let el = document.getElementsByTagName("div")
el = [...el]

el.map((e, i) => {
console.log(e.innerHTML)="Matheus "
})

console.log(el)

// const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'react']
// cursos.map((el, i,) =>{
//     console.log("Curso: " + el + " - Posição do curso: " + i)
// } )