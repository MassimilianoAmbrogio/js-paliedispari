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
var pariDispari = prompt('Inserisci pari o dispari');
var utente = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(utente);

var computer = Computer(1, 5);
console.log(computer);

/**
 * Generazione numero random con range
 * @param {} min 
 * @param {*} max 
 */

function Computer(min, max) {
    var computerRand = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return computerRand;
}

// Somma il valore dei due numeri passati
var res = utente + computer;
console.log('Risultato:', res);

// Stabilire se il risultato è pari o dispari
var res = somma(utente + computer);

if (res === 'pari') {
    console.log('La somma dei due numeri è pari');
} else {
    console.log('La somma dei due numeri è dispari');
}

//definizione
function somma(numero) {
    if (numero % 2 == 0) {
        return 'pari';
    }

    return 'dispari';
}

// Vincitore 
if (pariDispari != 'pari') {
    console.log('Vince computer');
}
else if (pariDispari == 'pari') {
    console.log('Vince utente');
} 



