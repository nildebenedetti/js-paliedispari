// # 1 
// creare uan funzioen per capire se una parola palindroma
//
// partiamo dalla stringa parola
// con il ciclo for con init i = .lenght - 1 e incremento i--
// dopo ciascun gro stampiamo il risultato in un array
// usiamo join per avere 1 stringa
// se stringaFinale === parola, allora palindromo = true

function palindromoChecker (parolaToCheck) {
    const parolaChecker = []; // init array vuoto
    let parolaReverse = ''; // init stringa vuota per pushare le lettere da array riga precedente
    let palindromo = false; // valore booleano per check finale con if

         for ( let i = parolaToCheck.length - 1; i >= 0; i-- ) { 
            let currentLetter = parolaToCheck[i]; // lettera del giro
            parolaChecker.push(currentLetter); // pusha lettera del ciclo in array
        }

        parolaToCheckReverse = parolaChecker.join(''); // unisci le lettere in una stringa

        if (parolaToCheckReverse === parolaToCheck) { // se la parola e'ugual;e in reverse
                palindromo = true;
        } else {
                palindromo = false;
        }

        return palindromo;
}