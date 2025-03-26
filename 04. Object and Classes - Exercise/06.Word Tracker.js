function solve(input) {
    let words = input.join(' ').split(' '); 
    let wordsMap = new Map();

    for (let word of words) {
        if (!wordsMap.has(word)) {
            wordsMap.set(word, 0);
        }
        wordsMap.set(word, wordsMap.get(word) + 1);
    }

    let sentenceWords = input[0].split(' '); 
    
    let sortedWords = Array.from(wordsMap.keys())
        .filter(word => sentenceWords.includes(word)) 
        .sort((a, b) => wordsMap.get(b) - wordsMap.get(a));

    for (let word of sortedWords) {
        console.log(`${word} - ${wordsMap.get(word)}`);
    }
}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 
    'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
