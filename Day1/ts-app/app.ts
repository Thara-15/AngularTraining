function calculate(operator:string):void
{
    const firstNumberElement = document.getElementById("num1") as HTMLInputElement;
    const secondNumberElement = document.getElementById("num2") as HTMLInputElement;
    const resultElement=document.getElementById("result") as HTMLElement;

    const num1:number= parseFloat(firstNumberElement.value);
    const num2:number=parseFloat(secondNumberElement.value);

    let result:number | string;
    if(isNaN(num1) || isNaN(num2))
    {
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
            num2 !== 0 ? result = num1 / num2 : result ="Cannot divide by zero";
            break;
        default:
            resultElement.innerHTML= "Invalid operation";
            return
    }
    resultElement.innerText = "Result: " + result;
    
}




