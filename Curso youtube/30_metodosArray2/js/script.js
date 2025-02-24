// splice (conteúdo a ser substituído, índice, conteúdo novo)

var arr = [1,2,3,4,5];

arr.splice(2,0,999);

console.log(arr);

arr.splice(4,1);

console.log(arr);

// join (transforma array em string)

var arr2 = ["O", "mago", "morreu"];

console.log(arr2.join(" "));

// reverse

console.log(arr2.reverse());