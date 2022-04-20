// chiedo all'utente un numero di 4 cifre
// controllo che l'input sia un numero (isNaN) e che sia di 4 cifre
let userNumber;
do {
    userNumber = prompt("Dimmi un numero di 4 cifre");
    console.log(userNumber, typeof(userNumber));
} while ( isNaN(parseInt(userNumber)) || (userNumber.length !== 4) )

// calcolo la somma delle singole cifre del numero
let sum = 0;
for ( let i = 0; i < userNumber.length; i++) {
    const thisDigit = parseInt(userNumber[i]);
    sum += thisDigit;
    console.log(thisDigit, typeof(thisDigit));
}

// stampo la somma
console.log(sum, typeof(sum));