/**
 * Palindroma
 Chiedere all'utente di inserire una parola
 Creare una funzione per invertire i caratteri di una stringa.
 Capire se la parola inserita è palindroma  
 */

// Dichiaro le variabili

// Domanda all'utente
var parola = prompt('Inserisci una parola');
console.log('PAROLA: ', parola);

// Invocazione
var parolaInvertita = invertiCaratteri(parola);
console.log('REVERSE: ', parolaInvertita);

// Definizione funzione per invertire i caratteri della stringa
function invertiCaratteri(word) {

// Include il metodo sotto
    var reverse = word.split('').reverse().join('');

    //  var reverse = '';

    //  for (var i = word.length - 1; i >= 0; i--) {
    //     reverse += word[i];
    //  }
    
// Restituiamo un valore con return...
    return reverse;
}