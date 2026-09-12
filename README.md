# Odin Calculator

A fully responsive, browser-based arithmetic calculator built as the final capstone project for **The Odin Project's Foundations Curriculum**. This project serves as a comprehensive integration of advanced DOM manipulation, strict layout systems using CSS Flexbox, and state-machine conditional logic in JavaScript.

## 🚀 Live Simulation

- https://hmarsh14.github.io/odin-calculator/

## 🧠 Application Engine & Logic Strategy

Rather than using dangerous parsing hacks like `eval()` or `new Function()`, this project implements a secure, custom token evaluation engine. Key engineering problems solved include:

- **Single-Pair Operator Chaining:** Automatically evaluates preceding equations when a new operator is clicked (e.g., entering `12 + 7 -` instantly updates the display to `19` before accepting the subtraction rule).
- **Interactive State Validation:** Implements strict data checks to override trailing zeros, sanitize consecutive operator inputs, and filter multiple decimal point entry attempts (`12.3.4`).
- **Graceful Error Catching:** Intercepts arithmetic division by zero errors cleanly, outputting a custom user warning without crashing the runtime loop.
- **Decimal Display Budgeting:** Dynamically scales and rounds floating-point results up to 5 decimal points to prevent viewport text overflows.

## 🛠️ Stack Architecture

- **HTML5** (Semantics and custom `data-operator` layout tags)
- **CSS3** (Responsive positioning, global padding/margin limits, and custom computed Flexbox button grid configurations via `calc()`)
- **JavaScript (ES6+)** (Event delegation modules, state machine caching, and lexical conditional blocks)

## 📈 Git Lifecycle Workflow

Developed using a strict enterprise-level **Feature-Branch Workflow**. Distinct layout boundaries and core milestones were isolated into dedicated functional branches, fully tested locally, pushed to GitHub, and systematically combined into the production `main` branch.

## ⚙️ Local Development Setup

1. Clone the repository locally:
    ```bash
    git clone https://github.com
    ```
2. Move into the working directory:
    ```bash
    cd calculator
    ```
3. Open `index.html` directly inside your web browser.
