// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Consigli del giorno
// Scriviamo sempre in italiano i passaggi che vogliamo fare
// Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// Esercizio 

const userWord = prompt('Inserisci una parola');

function isPalindrome(word){
    let reversedWord = '';
   for (let index = word.length - 1; index > 0; index--){
     reversedWord += word[index];  
   }

   if ( reversedWord === word){
    return true;
   } else {
    return false;
   }
}

console.log(isPalindrome(userWord));

// .split splitta i caratteri sulla base dell'argomento inserito


// altra soluzione





const userChoice = prompt('Scrivi pari o dispari');
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

const aINumber = getRandomInt(1,5);

console.log('utente ha scelto: ', userChoice, userNumber);
console.log('l\ia ha scelto: ',aINumber);

let result = oddOrEven(userNumber + aINumber);

if(result == userChoice) {
    console.log('Hai vinto');
    } else {
    console.log('Ho vinto io');
    }
function getRandomInt(min, max){
    return Math.floor( Math.random() * (max - min + 1)) + min;
}

function oddOrEven(number){
    if(number % 2 === 0){
        return 'pari';
    } else {
        return 'dispari';
    }
}