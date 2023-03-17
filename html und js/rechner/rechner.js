function calc(operator) {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let result = 0;
    switch (operator) {
        case "+":
            result = parseInt(number1) + parseInt(number2);
            break;
        case "-":
            result = parseInt(number1) - parseInt(number2);
            break;
        case "*":
            result = parseInt(number1) * parseInt(number2);
            break;
        case "/":
            result = parseInt(number1) / parseInt(number2);
            break;
    }
    document.getElementById("result").innerHTML = result;
}