var array= [];
var rightNum =[];
score= 0;

for (i = 0; i < 5; i++) {
    numero = getRndInteger(1, 100);
    array.push(numero);
}

console.log(array[i]);
//come fare alert che espone i numeri?

alert(array);

//Timer 30 secondi?

var timer= setTimeout (userGuess, 3000);

console.log(array);

// verificare quanti numeri sono stati azzeccati

console.log(rightNum);






function simonNum() {
    alert(array[i]);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function userGuess(num) {
    for (i = 0 ; i<array.length; i++) {
        guess= parseInt(prompt('inserisci i numeri uno alla volta'));
        if (guess == array[i]) {
            rightNum.push(guess);
        }
    }
}

