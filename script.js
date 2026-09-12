const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

const display = document.querySelector("#display");
let firstNumber = "";
let currentOperator = "";
let secondNumber = "";
let shouldResetDisplay = false;

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

// OPERATOR BUTTON EVENT LISTENERS
const operatorButtons = document.querySelectorAll(".operator-btn");

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedOperator = button.getAttribute("data-operator");

        // If consecutive operator buttons are pressed, do not evaluate.
        // Just swap the current operator for the last one entered.
        if (currentOperator !== "" && secondNumber === "") {
            currentOperator = selectedOperator;
            return;
        }

        // If a first number, operator, and second number already exist,
        // evaluate the initial pair immediately before taking the new operator!
        if (
            firstNumber !== "" &&
            currentOperator !== "" &&
            secondNumber !== ""
        ) {
            const result = operate(currentOperator, firstNumber, secondNumber);

            updateDisplay(result);

            // If the user hit division by zero, reset the calculator to prevent crashes
            if (result === "Cannot divide by zero") {
                firstNumber = "";
            } else {
                firstNumber = result.toString(); // Save the result as the next first number
            }
            secondNumber = "";
        }

        // Lock in the new operator and set the display to flash/reset for the next number entry
        currentOperator = selectedOperator;
        shouldResetDisplay = true;
    });
});

// EQUALS BUTTON EVENT LISTENER
const equalsButton = document.querySelector(".equals-btn");

equalsButton.addEventListener("click", () => {
    // Make sure the calculation only runs if we have a full equation pair
    if (firstNumber === "" || currentOperator === "" || secondNumber === "") {
        return;
    }

    const result = operate(currentOperator, firstNumber, secondNumber);
    updateDisplay(result);

    // Save the outcome as firstNumber so the user can chain math onto it
    if (result === "Cannot divide by zero") {
        firstNumber = "";
    } else {
        firstNumber = result.toString();
    }

    // Clear out the operator and secondary states for the fresh computation track
    currentOperator = "";
    secondNumber = "";
    shouldResetDisplay = true; // Overwrites the screen when a new number key is pressed
});

// CLEAR BUTTON EVENT LISTENER
const clearButton = document.querySelector(".clear-btn");

clearButton.addEventListener("click", () => {
    // Restore the global engine state back to defaults
    firstNumber = "";
    secondNumber = "";
    currentOperator = "";
    shouldResetDisplay = false;
    updateDisplay("0");
});
