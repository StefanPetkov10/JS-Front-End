function factorialDivision(a, b) {
    let result = 1;

    if (a > b) {
        for (let i = a; i > b; i--) {
            result *= i;
        }
    } else {
        for (let i = b; i > a; i--) {
            result /= i;
        }
    }

    return result.toFixed(2);
}

console.log(factorialDivision(5, 2)); // 60.00
