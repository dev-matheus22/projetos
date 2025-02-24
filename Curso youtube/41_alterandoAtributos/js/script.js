// Selecionar o título corretamente
var title = document.querySelector("#title");
title.setAttribute("class", "testando-o-atributo");
console.log(title); // Apenas para verificar no console

// Adicionar o atributo "disabled" ao botão
var btn = document.querySelector("#btn");
btn.setAttribute("disabled", "disabled");

// Selecionar o subtítulo corretamente pelo ID
var subtitle = document.querySelector("#subtitle");
subtitle.setAttribute("id", "título-2");

// Remover o atributo "id" da lista
var lista = document.querySelector("#lista");
lista.removeAttribute("id");
