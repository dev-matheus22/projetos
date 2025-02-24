var novoParagrafo = document.createElement("p");

var texto = document.createTextNode("Este é o conteúdo do paragrafo");

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

var body = document.querySelector("body");

console.log(body);

body.appendChild(novoParagrafo);

// inserindo em um container

var container = document.getElementById("texto");

console.log(container);

var el = document.createElement("span");

el.appendChild(document.createTextNode("Texto do span"));

console.log(el);

container.appendChild(el);