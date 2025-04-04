function subtract() {
    let firstNumber = document.getElementById('firstNumber');
    let secondNumber = document.getElementById('secondNumber');

    let num1 = parseFloat(firstNumber.value);
    let num2 = parseFloat(secondNumber.value);

    let result = num1 - num2;

    let output = document.getElementById('result');
    output.textContent = result;
}