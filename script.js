/* QUERY SELECTORS */

let history = document.querySelector("#history>span")
    result = document.querySelector("#result")

let clear = document.querySelector("#clear")
    percentage = document.querySelector("#percentage")
    division = document.querySelector("#division")
    multiplication = document.querySelector("#multiplication")
    subtraction = document.querySelector("#subtraction")
    addition = document.querySelector("#addition")
    equal = document.querySelector("#equal")
    point = document.querySelector("#point")
    backspace = document.querySelector("#backspace")

let numberButton2 = document.querySelector("#num-2")
let numberButton3 = document.querySelector("#num-3")

let numberButton = []
    for (let numberId = 0; numberId <=9; numberId++) {
        numberButton.push(document.querySelector("#num-" + numberId))
    }

/*OPERATIONS*/

let isDecimal = false
let hasOperator = false
let currentOperator = "0"

clear.addEventListener("click", inputClear)
function inputClear() {
    history.textContent =""
    result.textContent =""
    isDecimal = false
    hasOperator = false
}

division.addEventListener("click", inputDivision)
function inputDivision() {
    isDecimal = false
    if (history.textContent == "") {
        history.textContent = "0 /"
        currentOperator = "/"
        hasOperator = true
    } else if (hasOperator == false) {
        currentOperator = "/"
        hasOperator = true
    }
}

percentage.addEventListener("click", inputPercentage)
function inputPercentage() {
    history.append(" % ")
}

multiplication.addEventListener("click", inputMultiplication)
function inputMultiplication() {
    isDecimal = false
    if (history.textContent == "") {
        history.textContent = "0 *"
        currentOperator = "*"
        hasOperator = true
    } else if (hasOperator == false) {
        currentOperator = "*"
        hasOperator = true
    }
}

subtraction.addEventListener("click", inputSubtraction)
function inputSubtraction() {
    isDecimal = false
    if (history.textContent == "") {
        history.textContent = "0 -"
        currentOperator = "-"
        hasOperator = true
    } else if (hasOperator == false) {
        currentOperator = "-"
        hasOperator = true
    }
}

addition.addEventListener("click", inputAddition)
function inputAddition() {
    isDecimal = false
    if (history.textContent == "") {
        history.textContent = "0 +"
        currentOperator = "+"
        hasOperator = true
    } else if (hasOperator == false) {
        currentOperator = "+"
        hasOperator = true
    }
}

equal.addEventListener("click", calculate)
function calculate() {
    switch /*cada operação como um caso distinto*/
    isDecimal = false
}

point.addEventListener("click", inputPoint)
function inputPoint() {
    if (isDecimal == false && history.textContent == "") {
        history.append("0.")
        isDecimal = true
    } else if (isDecimal == false && history.endsWith(".")) {
        history.append("0.")
        isDecimal = true        
    }
}

/* NUMBER KEYS */

leftSide = 0
rightSide = 0

numberButton[0].addEventListener("click", insertNumber0)
function insertNumber0() {
    if (leftSide != 0) {
    leftSide += "1"
    history.append("0")
    hasOperator = false
    }
}

numberButton[1].addEventListener("click", insertNumber1)
function insertNumber1() {
    if (hasOperator == false) {
        leftSide += "1"
        history.append("1")
    } else {
        rightSide += "1"
        history.append("1")       
    }
}

numberButton[2].addEventListener("click", insertNumber2)
function insertNumber2() {
    if (hasOperator == false) {
        leftSide += "2"
        history.append("2")
    } else {
        rightSide += "2"
        history.append("2")       
    }
}

numberButton[3].addEventListener("click", insertNumber3)
function insertNumber3() {
    if (hasOperator == false) {
        leftSide += "3"
        history.append("3")
    } else {
        rightSide += "3"
        history.append("3")
    }
}

numberButton[4].addEventListener("click", insertNumber4)
function insertNumber4() {
    if (hasOperator == false) {
        leftSide += "4"
        history.append("4")
    } else {
        rightSide += "4"
        history.append("4")
    }
}

numberButton[5].addEventListener("click", insertNumber5)
function insertNumber5() {
    if (hasOperator == false) {
        leftSide += "5"
        history.append("5")
    } else {
        rightSide += "5"
        history.append("5")
    }
}

numberButton[6].addEventListener("click", insertNumber6)
function insertNumber6() {
    if (hasOperator == false) {
        leftSide += "6"
        history.append("6")
    } else {
        rightSide += "6"
        history.append("6")
    }
}

numberButton[7].addEventListener("click", insertNumber7)
function insertNumber7() {
    if (hasOperator == false) {
        leftSide += "7"
        history.append("7")
    } else {
        rightSide += "7"
        history.append("7")
    }
}

numberButton[8].addEventListener("click", insertNumber8)
function insertNumber8() {
    if (hasOperator == false) {
        leftSide += "8"
        history.append("8")
    } else {
        rightSide += "8"
        history.append("8")
    }
}

numberButton[9].addEventListener("click", insertNumber9)
function insertNumber9() {
    if (hasOperator == false) {
        leftSide += "9"
        history.append("9")
    } else {
        rightSide += "9"
        history.append("9")
    }
}

