const evenNumbers = [];

for ( let i = 0; i < 6; i++ ) {
    const userNumber = parseInt(prompt("Dimmi un numero"));
    console.log(userNumber);
    if (userNumber % 2 === 1) {
        evenNumbers.push(userNumber);
    }
}

console.log(evenNumbers);