const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by 0";
    }
    return a / b;
};

let firstNumber = "";
let operator = "";
let secondNumber = "";

function operate(op, num1, num2) {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    switch (op) {
        case "+":
            return add(n1, n2);
        case "-":
            return subtract(n1, n2);
        case "*":
            return multiply(n1, n2);
        case "/":
            return divide(n1, n2);
        case "default":
            return "ERROR";
    }
}

console.log("Calculator core engine loaded and ready for testing");
