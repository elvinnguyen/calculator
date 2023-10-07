const numberbtn = document.querySelectorAll('.number');
const operandbtn = document.querySelectorAll('.operations');
const clearbtn = document.querySelector('.clear');

clearbtn.addEventListener("click", clearScreen);

for (let button of numberbtn) {
    button.addEventListener("click", displayNumber);
}

function displayNumber(number) {
    const value = number.currentTarget.innerHTML;
    document.querySelector('.screen').value += value;
}

for (let button of operandbtn) {
    button.addEventListener("click", displayOperand);
}

function displayOperand(operation) {
    const value = operation.currentTarget.innerHTML;
    document.querySelector('.screen').value += value;
}

function clearScreen() {
    document.querySelector('.screen').value = " ";
}