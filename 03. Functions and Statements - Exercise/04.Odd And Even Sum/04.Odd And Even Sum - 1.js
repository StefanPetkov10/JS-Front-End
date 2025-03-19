function oddAndEvenSum(number) {
    let odd = 0;
    let even = 0;

    let numberAsString = number.toString();

    for (let i = 0; i < numberAsString.length; i++) {
        let currentNumber = Number(numberAsString[i]);

        if (currentNumber % 2 === 0) {
            even += currentNumber;
        } else {
            odd += currentNumber;
        }
    }

    return `Odd sum = ${odd}, Even sum = ${even}`;
}

console.log(oddAndEvenSum(1000435)); // Odd sum = 9, Even sum = 4   