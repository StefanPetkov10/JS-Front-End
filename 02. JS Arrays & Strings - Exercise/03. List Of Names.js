function printSortedNames(names) {
    names.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < names.length; i++) {
        console.log(`${i + 1}.${names[i]}`);
    }
}

printSortedNames(["John", "Bob", "Christina", "Ema"]);

function listNames(names) {
    names.sort(); // Сортиране в азбучен ред
    names.forEach((name, index) => {
        console.log(`${index + 1}.${name}`);
    });
}

// Тестови примери
listNames(["John", "Bob", "Christina", "Ema"]);