function oddAndEvenSum(number) {
    let odd = 0;
    let even = 0;

    for (let i = 0; i < number.length; i++) {

        if (number % 2 === 0) {
            even += number % 10;
        }
        else {
            odd += number % 10;
        }

        number = Math.floor(number / 10);
    }

    return `Odd sum = ${odd}, Even sum = ${even}`;
}

console.log(oddAndEvenSum(1000435)); // Odd sum = 9, Even sum = 4   