var output = "";
var x = null;
var y = null;

function displayNumber(number) {
    var result = document.querySelector(".screen");
    var numbers = document.querySelectorAll(".number");
    for (let number of numbers) {
        number.addEventListener("click", () => {
            result = numbers.innerHTML;
        })
    }
    console.log(result);
}

function displayOperand(operation) {
    const operations = document.querySelectorAll(".operations")
}

function getAnswer(operations) {
    switch(operations) {
        case "x":
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

function clear() {
    const display = "";
    display = document.querySelector(".screen").innerHTML;
    output = "";
    x = "";
    y = "";
}