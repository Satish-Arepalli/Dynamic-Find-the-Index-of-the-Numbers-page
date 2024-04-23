let numbers = [17, 31, 77, 20, 63];

let userInputEl = document.getElementById("userInput");
let findBtnEl = document.getElementById("findBtn");
let indexOfNumber = document.getElementById("indexOfNumber");

function findIndexOfNumber() {
    let input = parseInt(userInputEl.value);
    let res = numbers.indexOf(input);

    indexOfNumber.textContent = res;
}