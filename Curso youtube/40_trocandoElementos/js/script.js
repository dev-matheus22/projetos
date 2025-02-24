// Criar elemento

var el = document.createElement("h3");

el.classList = "Testando classe";

var texto = document.createTextNode("Este é o texto do h3");

el.appendChild(texto);

console.log(el);

// Selecionar o elemento para trocar

var title = document.querySelector("#title");

// Selecionar o pai do elemento

var pai = title.parentNode;

// Trocando os elementos

pai.replaceChild(el, title);