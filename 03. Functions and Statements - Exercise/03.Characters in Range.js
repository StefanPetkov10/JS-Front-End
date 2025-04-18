function charactersInRange(char1, char2) {
    let start = char1.charCodeAt(0);
    let end = char2.charCodeAt(0);

    let result = [];

    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    for (let i = start + 1; i < end; i++) {
        result.push(String.fromCharCode(i));
    }

    return result.join(' ');
}

console.log(charactersInRange('a', 'd')); // b c
console.log(charactersInRange('#', ':')); // $ % & ' ( ) * + , - . /