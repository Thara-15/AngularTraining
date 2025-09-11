function calculate(operator) {
    var firstNumberElement = document.getElementById("num1");
    var secondNumberElement = document.getElementById("num2");
    var resultElement = document.getElementById("result");
    var num1 = parseFloat(firstNumberElement.value);
    var num2 = parseFloat(secondNumberElement.value);
    var result;
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerText = "Please please enter both numbers!";
        return;
    }
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            num2 !== 0 ? result = num1 / num2 : result = "Cannot divide by zero";
            break;
        default:
            resultElement.innerHTML = "Invalid operation";
            return;
    }
    resultElement.innerText = "Result: " + result;
}
