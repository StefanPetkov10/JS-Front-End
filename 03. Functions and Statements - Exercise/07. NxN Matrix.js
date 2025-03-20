function matrix(n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += `${n} `.repeat(n).trim() + '\n';
    }

    return result;
}

console.log(matrix(3)); 