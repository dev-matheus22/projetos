// length

var arr = [1,2,3,4,5];

console.log(arr.length);

// push (adicionar elementos ao fim do array)

arr.push(6);

console.log(arr);

// pop (remove do fim)

arr.pop();

console.log(arr);

// unshift (adiciona no começo)

arr.unshift(0);
arr.unshift('teste')

console.log(arr);

// shft (remover do começo)

arr.shift();

console.log(arr)

// acessar o último elemento

console.log(arr[arr.length - 1]);

// isArray

console.log(Array.isArray(arr))