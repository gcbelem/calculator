/* DARK-MODE */

const darkModeButton = document.querySelector("#dark-mode-button");
darkModeButton.addEventListener ("click", toggleDarkMode);
let darkMode = false;
function toggleDarkMode() {
    darkMode = !darkMode
    document.body.classList.toggle("dark-mode", darkMode);
    document.querySelector("#dark-mode-icon").src = darkMode 
    ? "images/wb_sunny_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
    : "images/bedtime_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";
}

/* VARIABLES */

let isDecimal = false;
let hasOperator = false;
let currentOperator = undefined;
let termOne = 0;
let termTwo = 0;
let resultCalculation = 0;
let calculationDone = false;

/* ACTION BUTTONS */

const historyDisplay = document.querySelector("#history>span");
const resultDisplay = document.querySelector("#result>span");

const actionAssignment = {
    clear: "#clear",
    plusminus: "#plusminus",
    equal: "#equal",
    point: "#point",
    backspace: "#backspace"
};

const action = function(path) {
    return document.querySelector(path);
}

action(actionAssignment.clear).addEventListener("click",() => {
    historyDisplay.textContent ="";
    resultDisplay.textContent ="";
    isDecimal = false;
    hasOperator = false;
    resultCalculation = 0;
    termOne = "0";
    termTwo = "0";
    calculationDone = false;
})

action(actionAssignment.plusminus).addEventListener("click",() => {
    hasOperator == true
    ? termTwo = -termTwo
    : termOne = -termOne
});

action(actionAssignment.equal).addEventListener("click",() => {
/*EQUAL SPECIFICATION*/   
});

action(actionAssignment.point).addEventListener("click",() => {
    if (isDecimal == false && termOne == 0) {
        document.querySelector("#history>span").textContent ="0.";
        termOne += ".";
    } else if (isDecimal == false && hasOperator == true && termTwo == 0) {
        document.querySelector("#history>span").textContent ="0.";
        termTwo += ".";
    } else if (isDecimal == false && hasOperator == true && termTwo != 0) {
        document.querySelector("#history>span").append(".");
        termTwo += ".";
    } else if (isDecimal == false && termOne != result) {
        document.querySelector("#history>span").append(".");
        termOne+= ".";
    }
    isDecimal = true;
});

action(actionAssignment.backspace).addEventListener("click",() => {
/*BACKSPACE SPECIFICATION*/   
});

/*OPERATIONS*/

const listOperator = {
    division: {operation: "division", path: "#division", symbol: " / "},
    multiplication: {operation: "multiplication", path: "#multiplication", symbol: " * "},
    addition: {operation: "addition", path: "#addition", symbol: " + "},
    subtraction: {operation: "subtraction", path: "#subtraction", symbol: " - "}
};

const operationAssignment = function(path) {
    return document.querySelector(path);
}

const inputOperation = function setOperator (symbol) {
    this.symbol = symbol;
    this.runOperator = function() {
        if (termOne == "0") {
            historyDisplay.textContent = `0 ${this.symbol}`;
            currentOperator = this.operation;
        } else if (hasOperator == false) {
            historyDisplay.append(this.symbol);
            currentOperator = this.operation;
        } else if (hasOperator == true) {
            currentOperator = this.operation;
        };
        hasOperator = true;
        isDecimal = false;
}}

operationAssignment(listOperator.division.path).addEventListener("click", () => {
    inputOperation.call(listOperator.division, listOperator.division.symbol);
    listOperator.division.runOperator();
});

operationAssignment(listOperator.multiplication.path).addEventListener("click", () => {
    inputOperation.call(listOperator.multiplication, listOperator.multiplication.symbol);
    listOperator.multiplication.runOperator();
});

operationAssignment(listOperator.addition.path).addEventListener("click", () => {
    inputOperation.call(listOperator.addition, listOperator.addition.symbol);
    listOperator.addition.runOperator();
});

operationAssignment(listOperator.subtraction.path).addEventListener("click", () => {
    inputOperation.call(listOperator.subtraction, listOperator.subtraction.symbol);
    listOperator.subtraction.runOperator();
});

/* NUMBER KEYS */

let numberAssignment = [];
for (let numberId = 0; numberId <=9; numberId++) {
        numberAssignment.push(document.querySelector("#num-" + numberId));
}

numberAssignment.forEach(setNumber => {
    setNumber.addEventListener("click",() => {
        let getNumber = setNumber.id.replace("num-","");
        if (calculationDone === false && hasOperator === false) {
        termOne += getNumber
        historyDisplay.append(`${getNumber}`)
        } if (calculationDone === false && hasOperator === true) {
        termTwo += getNumber
        historyDisplay.append(`${getNumber}`) 
}})})

/* RUNNING THE EQUATION */

equal.addEventListener("click", calculate)
function calculate() {
        calculationDone = true;
        switch (currentOperator) {
            case "addition":
                resultCalculation = Number(termOne) + Number(termTwo);
                resultDisplay.textContent = resultCalculation;
                break
            case "subtraction":
                resultCalculation = Number(termOne) - Number(termTwo);
                resultDisplay.textContent = resultCalculation;
                break
            case "division":
                resultCalculation = Number(termOne) / Number(termTwo);
                resultDisplay.textContent = resultCalculation;
                break
            case "multiplication":
                resultCalculation = Number(termOne) * Number(termTwo);
                resultDisplay.textContent = resultCalculation;
                break
            default:
                resultDisplay.textContent = "error";
        }
}