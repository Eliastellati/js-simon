var array= [];
var attempts= [];

while (array.length < 5){
    var nuovoNum = Math.floor(Math.random()*100) + 1;
    if(!cercaElemento(nuovoNum, array)){
      array.push(nuovoNum)
    }
  }

console.log(array);
//come fare alert che espone i numeri?

alert(array);

//Timer 30 secondi?

setTimeout(function(){
    while (attempts.length < 5) {
        var guess= parseInt(prompt('inserisci un numero che ricordi'));
        if (!cercaElemento(guess, attempts) && !isNaN(guess)) {
            attempts.push(guess);
        }
        console.log(attempts);
        controllo(array, attempts);
    }
}, 30000);


//Functions
function cercaElemento(elem, array){
    for (var i = 0; i < array.length; i++) {
      if (elem == array[i]) {
        return true;
       }
    }
    return false;
  
}

function controllo(numeri, tentativi){

    var rightNum = [];
  
    for (var i = 0; i < 5; i++) {
      if (cercaElemento(attempts[i], array)){
        rightNum.push(attempts[i]);
      }
    }
  
    console.log("Hai indovinato " + rightNum.length + " numeri.");
    console.log("I numeri indovinati sono: " + rightNum);
  
}

