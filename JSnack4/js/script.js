// chiedo un numero di 4 cifre all'utente
const userNumber = prompt("Ciao!Dimmi un numero di 4 cifre");
console.log(userNumber, typeof(userNumber));

// lo scompongo in quattro elementi
let sumModule = [];
sumModule = userNumber.split("");
console.log(sumModule, typeof(sumModule));

// calcolo la somma dei singoli numeri
summedModule = 0;
for (let i = 0; i < sumModule.length; i++) {
    summedModule = summedModule + parseInt(sumModule[i]);
}

console.log(summedModule);