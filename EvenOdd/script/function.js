
//==================================================================
//=====FUNZIONE PER CALCOLARE NUMERO RANDOM TRA DUE NUMERI==========

    function myRandom(minValue, maxValue) {
        return Math.floor(Math.random() *  (maxValue - minValue + 1)) + minValue; // restituisce numero random tra intervallo di numeri
    }

//==================================================================
//=====# 2 EVEN ODD CHECKER ========================================

function evenOddChecker (numberToCheck) {
    if (numberToCheck % 2 === 0) {
    isNumberEven = true;
    } else {
    isNumberEven = false;
    }
    // aggiungo terna logica per dare pari o dispari
    const evenOrOdd = (isNumberEven === true ) ? ('pari') : ('dispari');
    return evenOrOdd;
}

//===================================================================