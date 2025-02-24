// toLowerCase e toUpperCase


var frase = "Esta é uma frase que vamo manipular";

var fraseCaixaAltaa = frase.toUpperCase();

console.log(fraseCaixaAltaa)

console.log(frase.toLowerCase())

// trim (útil para formulários; remove espaços extras)

var nome = "          Matheus";

var nomeTrim = nome.trim();

console.log(nomeTrim);

// slip (separa as palavras e forma um array)

console.log(frase.split(", "));

// lastIndexOF

var fraseDois = "Eu quero a última palavra teste desta frase de teste";

console.log(fraseDois.lastIndexOf("teste"))
