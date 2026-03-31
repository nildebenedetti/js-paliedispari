// CHECK # 1 - Controlla se una parola e' un PALINDROMO

/*=== SCOMMENTA PER CHECK ==============================
const parolaTest = 'anna';


const isItPalindromo = palindromoChecker(parolaTest);
console.log(isItPalindromo);
=======================================================*/

// CHECK # 2 - Stabiliamo se la somma dei due numeri è pari o dispari

/***Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

let validChoice = false; // add valore booleano per uscire da do-while
const userChoice = []; // array per registrare scelta utente

do {
    let choiceEvenOdd = prompt('Scegli: pari o dispari?','pari') // prompt per scelta utente: pari o dispari
    if (choiceEvenOdd !== 'pari' && choiceEvenOdd !== 'dispari') { // check coerenza
        console.error('Iserisci una scelta valida!');
    } else {
        console.log(`Hai scelto ${choiceEvenOdd}`) // conferma scelta utente in console
        validChoice = true;
        userChoice.push(choiceEvenOdd);
    }
} while (validChoice === false)


const numberPlayer = Number(prompt('Inserisci un numero da 1 a 5','2')); // prompt per scelta numero utente
const numberCpu = myRandom(1,5); // generazione casuale numero cpu

console.log(`Il tuo numero e' ${numberPlayer}.`); // check
console.log(`Il numero di Cpu e' ${numberCpu}`);    // check

let sumNumbers = numberPlayer + numberCpu; // init variabile somma 
console.log(`La somma dei due numeri e' ${sumNumbers}`);  //check
 // controllo se somma numeri e'pari

 let resultChecker = evenOddChecker(sumNumbers);
 console.log(`Quindi il risultato e' ${resultChecker}`);

// andiamo a matchare scelta utente (pari/dispari) con resultchecker

if ( userChoice.toString('') === resultChecker) {
    console.log(`Vittoria! Complimenti, hai indovinato!`)
} else {
    console.log(`Stavolta hai perso...riproviamo?`)
}












