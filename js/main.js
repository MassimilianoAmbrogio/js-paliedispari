/**
 * Palindroma
 Chiedere all'utente di inserire una parola
 Creare una funzione per invertire i caratteri di una stringa.
 Capire se la parola inserita è palindroma  
 */

// Dichiaro le variabili

// Ottenere parola da utente
var parola = prompt('Inserisci una parola').toLowerCase.trim();
console.log(parola);

// Invertire caratteri parola
var parolaInvertita = invertiCaratteri(parola);
console.log(parolaInvertita);

// Comparazione 
if (parola === parolaInvertita) {
    console.log('Palindroma');
} else {
    console.log('NON Palindroma');
}

// Invertire caratteri stringa
function invertiCaratteri(word) {

// Include il metodo sotto
    //var reverse = word.split('').reverse().join('');

      var result = '';

      for (var i = word.length - 1; i >= 0; i--) {
         result += word[i];
      }
    
// Restituiamo un valore con return...
    return result;
}