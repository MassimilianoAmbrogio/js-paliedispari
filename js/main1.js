/**
 * Pari e Dispari
 L'utente sceglie pari o dispari
 L'utente inserisce un numero da 1 a 5.
 Generiamo un numero random (sempre da 1 a 5) 
 per il computer (usando una funzione). 
 Sommiamo i due numeri
 Stabiliamo se la somma dei due numeri è pari o dispari
 (usando una funzione)
 Dichiariamo chi ha vinto in base alla scelta pari o dispari 
 fatta all'inizio dall'utente.
 */

// Dichiaro le variabili

//  Domande all'utente
var scelteGiocatore = prompt('Inserisci pari o dispari').toLowerCase().trim();
console.log('Scelta giocatore:', scelteGiocatore);

var numeroGiocatore= parseInt(prompt('Inserisci un numero da 1 a 5').trim());
console.log('Numero giocatore:', numeroGiocatore);

// Opponente
var numeroOpponente = getRandomNumber(1, 5);
console.log('Numero opponente:', numeroOpponente);

// Somma il valore dei due numeri passati
var somma = numeroGiocatore + numeroOpponente;
console.log('Somma', somma);

// Controllo
var risultato = checkPariDispari(somma);

// Vincitore 
if (scelteGiocatore === 'risultato') {
    console.log('Vince computer');
}
else {
    console.log('Vince utente');
} 

// Genera numeri random con range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Controllo natura pari o dispari di un numero
function checkPariDispari(num) {
    if (num % 2 === 0) {
        return 'pari';
    }

    return 'dispari';
}
