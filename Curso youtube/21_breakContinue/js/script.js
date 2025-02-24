for ( var i = 10; i > 0; i--){

    console.log(i);

    if (i === 5){
        break;
    }
}

console.log("Break");

var x = 10;

while (x < 100){

    x+= 10;

    if (x === 6000){
        console.log("CONTINUE");
        continue;
    }
    console.log("Testando o continue " + x);
}
