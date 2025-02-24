// 1 - adicionando eventos

const btn = document.querySelector("#my-button");

btn.addEventListener("click", function (){
    console.log("Clicou aqui");
});

// 2 - removendo eventos

const secondBtn = document.querySelector("#btn")

function imprimirMensagem(){
    console.log("Teste")
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#btn2")

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem);
});

// 3 - evento 

const myTitle = document.querySelector("#my-title")

myTitle.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.srcElement);
    console.log(e.target);
});

// 4 - Propagação

const containerBtn = document.querySelector("#btn-container")
const btnDentro = document.querySelector("#div-btn")

containerBtn.addEventListener("click", () => {
    console.log("Evento 1")
})

btnDentro.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Evento 2")
})

// 5 - removendo evento padrão

const a = document.querySelector("a")

a.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("Não alterou página")
})

// 6 - eventos de tecla 

document.addEventListener("keyup", (e) => {
    console.log(`´Soltou a tecla: ${e.key} `)
})

document.addEventListener("keydown", (e) => {
    console.log(`Pressionou a tecla: ${e.key} `)
})

// 7 - Eventos do mouse 

const mouseEvent = document.querySelector("#eventos-mouse")

mouseEvent.addEventListener("mousedown", () =>{
    console.log("Pressionou o botão");
});

mouseEvent.addEventListener("mouseup", () =>{
    console.log("Soltou o botão");
});

mouseEvent.addEventListener("dblclick", () =>{
    console.log("click duplo");
});

// 8 - Movimento do mouse

// document.addEventListener("mousemove", (e) => {
    // console.log(`No eixo X: ${e.x}`);
    // console.log(`No eixo Y: ${e.y}`);

// });

// 8 - evento de scroll

window.addEventListener("scroll",(e) => {
    if(window.scrollY > 200){
        console.log("PASSAMOS DE 200PX");
    }
});

// 10 - Evento de focus/blur

const input = document.querySelector("#my-input")

input.addEventListener("focus", (e) => {
    console.log("Entrou no input");
})

input.addEventListener("blur", (e) => {
    console.log("Saiu no blur");
})

// 11 - eventos de carregamento de página
window.addEventListener("load", () => {
    console.log("A página carregou");
});

window.addEventListener("beforeunload", (e) =>{
    e.preventDefault();
});

// 12 - debounce

const debounce = (f, delay) => {
    let timeout

    return (...arguments) => {
        if(timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            f.apply(arguments)
        }, delay );

    };
};


document.addEventListener("mousemove", debounce(() => {
    console.log("Executando evento a cada 400ms");
},400))


