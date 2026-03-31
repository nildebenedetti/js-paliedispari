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

const choiceEvenOdd = prompt('Scegli:pari o dispari?','pari') 

const numberPlayer = Number(prompt('Inserisci un numero da 1 a 5','2'));
const numberCpu = myRandom(1,5);

console.log(numberPlayer);
console.log(numberCpu);

let sumNumbers = numberPlayer + numberCpu;
console.log(sumNumbers);







