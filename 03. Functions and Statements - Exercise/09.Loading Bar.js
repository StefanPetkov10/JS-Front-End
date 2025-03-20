function loadingBar(num) {
    let filled = '%'.repeat(num / 10);
    let empty = '.'.repeat(10 - num / 10);
    let bar = `[${filled}${empty}]`;

    if (num === 100) {
        return `${num}% Complete!\n${bar}`;
    } else {
        return `${num}% ${bar}\nStill loading...`;
    }
}

// Тестови случаи
console.log(loadingBar(30)); 
console.log(loadingBar(100));
console.log(loadingBar(70));
