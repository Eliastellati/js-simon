var array= [];
var userNum = [];


for (i = 0; i < 5; i++) {
    numero = getRndInteger(1, 100);
    array.push(numero);
}

console.log(array[i]);
//come fare alert che espone i numeri?

alert(array);

//Timer 30 secondi?

var timer= setTimeout (userGuess, 30000);

console.log(userNum);
console.log(array);







function simonNum() {
    alert(array[i]);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function userGuess(num) {
    for (i = 0 ; i<array.length; i++) {
        guess= parseInt(prompt('inserisci i numeri uno alla volta'));
        userNum.push(guess);
    }
}
