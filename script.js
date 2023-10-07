const numberbtn = document.querySelectorAll('.number');
const operandbtn = document.querySelectorAll('.operations');
const clearbtn = document.querySelector('.clear');
const equalsbtn = document.querySelector('.answer');

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

clearbtn.addEventListener("click", clearScreen);

function clearScreen() {
    document.querySelector('.screen').value = " ";
}


equalsbtn.addEventListener("click", getAnswer);

function getAnswer() {
    const output = null;

    const equation = document.querySelector('.screen').value;

    equation.parseFloat();
    console.log(equation);

    var x = parseFloat(document.querySelector('.screen'));
    var y = parseFloat(document.querySelector('.screen'));

    switch(operations) {
        case "*":
            output = x * y;
            break; 
        case "/":
            output = x / y;
            break;
        case "+":
            output = x + y;
            break;
        case "-":
            output = x - y;
            break;
    }
}
