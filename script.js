/*
DARK-MODE
*/

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

/* 
VARIABLES 
*/

let isDecimal = false;
let hasOperator = false;
let currentOperation = "";
let displaySymbol = "";
let termOne = "";
let termTwo = "";
let resultCalculation = 0;

/* 
UTILITY FUNCTIONS 
*/

function buttonAssignment(path) {
    return document.querySelector(path);
}

function resetCalculator() {
    resultDisplay.textContent ="";
    historyDisplay.textContent = "";

    termOne = "";
    termTwo = "";
    resultCalculation = 0;

    hasOperator = false;
    isDecimal = false;
}

function isValidNumber(value) {
    return Number.isFinite(value);
}

/*
RESULT & HISTORY DISPLAY
*/

const historyDisplay = document.querySelector("#history>span");
const resultDisplay = document.querySelector("#result>span");

function updateCalculationDisplay(container) {
    const equationParts = [];

    if (termOne) {
        equationParts.push(termOne);
    }

    if (hasOperator) {
        equationParts.push(displaySymbol);
    }

    if (termTwo) {
        equationParts.push(termTwo);
    }

    container.textContent = equationParts.join(" ");
}

const updateDisplay = {
    result: () => updateCalculationDisplay(resultDisplay),
    history: () => updateCalculationDisplay(historyDisplay)
}

/*
ACTION BUTTONS
*/


const actionId = {
    clear: "#clear",
    plusminus: "#plusminus",
    equal: "#equal",
    point: "#point",
    backspace: "#backspace"
};

buttonAssignment(actionId.clear).addEventListener("click",() => {
    resetCalculator();
})

buttonAssignment(actionId.plusminus).addEventListener("click",() => {
    hasOperator === true
    ? termTwo = -termTwo
    : termOne = -termOne;

    updateDisplay.result();
});

buttonAssignment(actionId.point).addEventListener("click",() => {    
    handleDecimal();

    isDecimal = true;
    updateDisplay.result();
});

function handleDecimal() {
    if (isDecimal) {
        return
    }

    if (termOne === "0" || termOne === "") {
        return termOne = "0.";
    }

    if (hasOperator === true && (termTwo === "0" || termTwo === "")) {
        return termTwo = "0.";
    }

    if (hasOperator === true) {
        return termTwo += ".";
    }

    if (!hasOperator) {
        return termOne += "."
    }
}

buttonAssignment(actionId.backspace).addEventListener("click",() => {
    if (termTwo) {
        const slicedTerm = deleteEquationTerm(termTwo);
        termTwo = slicedTerm;
        updateDisplay.result();
        return
    }

    if (hasOperator) {
        deleteOperator();
        updateDisplay.result();
        return
    }

    if (termOne) {
        const slicedTerm = deleteEquationTerm(termOne);
        termOne = slicedTerm;
        updateDisplay.result();
        return
    }
});

function deleteEquationTerm(term) {
    if (!term) {
        return
    }

    return term.slice(0,-1);
}

function deleteOperator() {
    hasOperator = false;
    
    currentOperation = "";
    displaySymbol = "";

    updateDisplay.result();
}

/*
OPERATIONS
*/

const operatorList = {
    division: {
        id: "division", 
        path: "#division", 
        symbol: "/"
    },

    multiplication: {
        id: "multiplication", 
        path: "#multiplication", 
        symbol: "*"
    },
    
    addition: {
        id: "addition", 
        path: "#addition", 
        symbol: "+"
    },
    
    subtraction: {
        id: "subtraction", 
        path: "#subtraction", 
        symbol: "-"
    }
};

function inputOperation(operator) {
    if (!termOne) {
        return
    }

    hasOperator = true;
    
    currentOperation = operator.id;
    displaySymbol = operator.symbol;

    isDecimal = false;

    updateDisplay.result();
}

function operationAssignment() {
    for (const operator of Object.values(operatorList)) {
               
        buttonAssignment(operator.path).addEventListener("click",() => {
            inputOperation(operator);
            isDecimal = false;
        });
    };
}

operationAssignment();

/*
NUMBER KEYS
*/

function numberAssignment() {
    let numbers = [];

    for (let numberId = 0; numberId <=9; numberId++) {
        numbers.push(document.querySelector("#num-" + numberId));
    }

    numbers.forEach(setNumber => {
        setNumber.addEventListener("click",() => {
            const getNumber = setNumber.id.replace("num-","");

            !hasOperator
            ? termOne += getNumber
            : termTwo += getNumber

        updateDisplay.result();
        });
    });
}

numberAssignment();

/* 
RUNNING THE EQUATION 
*/

buttonAssignment(actionId.equal).addEventListener("click", calculate)
function calculate() {
        switch (currentOperation) {
            case "addition":
                resultCalculation = Number(termOne) + Number(termTwo);
                break
            case "subtraction":
                resultCalculation = Number(termOne) - Number(termTwo);
                break
            case "division":
                resultCalculation = Number(termOne) / Number(termTwo);
                break
            case "multiplication":
                resultCalculation = Number(termOne) * Number(termTwo);
                break
        }

        handleResult(resultCalculation);
}

function handleResult(result) {
    const isValidCalculation = isValidNumber(result);

    if (isValidCalculation) {
        
        termOne = String(result);
        termTwo = "";
        hasOperator = false;
        currentOperation = "";
        isDecimal = false;

        resultDisplay.textContent = result;
        updateDisplay.history();

    } else {
        resetCalculator();
        resultDisplay.textContent = "Error"
    };
}