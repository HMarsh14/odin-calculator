const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by 0";
    }
    return a / b;
};

const display = document.querySelector("#display");
let firstNumber = "";
let operator = "";
let secondNumber = "";

// Performs operation based on operator provided
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

// Update the visible text viewport on the screen
function updateDisplay(value) {
    // Round long decimal numbers so they don't break the UI container box
    if (typeof value === "number") {
        display.textContent = Math.round(value * 100000) / 100000;
    } else {
        display.textContent = value;
    }
}

// DIGIT BUTTON EVENT LISTENERS
// Grab all elements with the 'digit-btn' class
const digitButtons = document.querySelectorAll(".digit-btn");

digitButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const digit = button.textContent;

        // If a calculation just finished, clear out the viewport for the fresh input
        if (shouldResetDisplay) {
            display.textContent = "";
            shouldResetDisplay = false;
        }

        // If the display currently shows just a "0", overwrite it instead of making it "05"
        if (display.textContent === "0") {
            display.textContent = digit;
        } else {
            display.textContent += digit; // Append the digit to the end of the text string
        }

        // Store the number inside the correct state variable
        if (currentOperator === "") {
            firstNumber = display.textContent;
        } else {
            secondNumber = display.textContent;
        }
    });
});

console.log(
    "DOM text selection nodes and event listeners attached successfully!",
);
