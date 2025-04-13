let result = 0;

function getInputValues() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    return { num1, num2 };
}

function add() {
    const { num1, num2 } = getInputValues();
    result = num1 + num2;
}

function sub() {
    const { num1, num2 } = getInputValues();
    result = num1 - num2;
}

function mul() {
    const { num1, num2 } = getInputValues();
    result = num1 * num2;
}

function div() {
    const { num1, num2 } = getInputValues();
    result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
}

function display() {
    document.getElementById("result").textContent = "Result: " + result;
}
