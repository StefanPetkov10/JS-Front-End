function solve(commands) {
    let parking = new Set();

    for (let row of commands) {
        let [direction, carNumber] = row.split(', ');

        if (direction === 'IN') {
            parking.add(carNumber);
        } else if (direction === 'OUT') {
            parking.delete(carNumber);
        }
    }

    let sortedCars = Array.from(parking).sort((a, b) => a.localeCompare(b));

    if (sortedCars.length > 0) {
        console.log(sortedCars.join('\n'));
    } else {
        console.log('Parking Lot is Empty');
    }
}

// Тестови случаи
solve([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);


solve(
    [
        'IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU'
    ]
);