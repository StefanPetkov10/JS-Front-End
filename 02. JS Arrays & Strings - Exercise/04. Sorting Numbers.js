function sortedNumbers(numbers) {
    const sortedNumbers = numbers.sort((a, b) => a - b);
    const result = [];

    while (sortedNumbers.length > 0) {
        let firstNumber = sortedNumbers.shift();
        let lastNumber = sortedNumbers.pop();

        result.push(firstNumber);

        if (lastNumber) {
            result.push(lastNumber);
        }
    }

    return result;
}

sortedNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);

function sortingNumbers(arr) {
    arr.sort((a, b) => a - b); // Сортиране във възходящ ред

    let result = [];
    while (arr.length > 0) {
        result.push(arr.shift()); // Взима най-малкия елемент
        if (arr.length > 0) {
            result.push(arr.pop()); // Взима най-големия елемент
        }
    }

    return result;
}

sortedNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
