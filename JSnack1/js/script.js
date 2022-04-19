const firstWord = prompt("Dimmi la prima parola");

const secondWord = prompt("Dimmi la seconda parola");

firstWordLength = firstWord.length;
console.log(firstWordLength);

secondWordLength = secondWord.length;
console.log(secondWordLength);

let longerWord;
let shorterWord;

if ( firstWordLength > secondWordLength ) {
    longerWord = firstWord;
    shorterWord = secondWord;
} else if (firstWordLength < secondWordLength) {
    longerWord = secondWord;
    shorterWord = firstWord;
}

document.getElementById("shorter-word").innerHTML = `${shorterWord}`;
document.getElementById("longer-word").innerHTML = `${longerWord}`;