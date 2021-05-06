var array= [];
var attempts= [];
var rightNum = [];

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
}, 3000);

document.getElementById('result').innerHTML= 'hai indovinato ' + rightNum.length;

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
    // confronto i due array e restituisco la quantità di numeri indovinati e quali sono.
  
    for (var i = 0; i < 5; i++) {
      if (cercaElemento(attempts[i], array)){
        rightNum.push(attempts[i]);
      }
    }
  
    console.log("Hai indovinato " + rightNum.length + " numeri.");
    console.log("I numeri indovinati sono: " + rightNum);
  
}

