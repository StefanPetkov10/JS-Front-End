function revealWords(wordsInput, template) {
    const words = wordsInput.split(', ');
    let startIndex = -1;
    let endIndex = -1;

    for (let i = 0; i < template.length; i++) {
        if (template[i] === '*') {
            if (startIndex < 0) {
                startIndex = i;
                endIndex = i + 1;
            } else {
                endIndex = i + 1;
            }
        } else {
           
            if (startIndex >= 0) {
                let emptySpace = endIndex - startIndex;
                let wordToPaste = words.find(w => w.length === emptySpace);
                template = template.replace('*'.repeat(emptySpace), wordToPaste);

                startIndex = -1;
                endIndex = -1;
            }
        }
    }

    if (startIndex >= 0) {
        let emptySpace = endIndex - startIndex;
        let wordToPaste = words.find(w => w.length === emptySpace);
        template = template.replace('*'.repeat(emptySpace), wordToPaste);
    }

    console.log(template);
}
// Решение с {REGEX}
function revealWordsWithRegex(wordsInput, template) {
    const words = wordsInput.split(', ');

    const matches = template.matchAll(/\*/g);
    for (const match of matches) {
        const word = words.find(w => w.length === match[0].length)
        template = template.replace(match[0], words.find);
    }

    console.log(template);
}

revealWords('great',
    'softuni is ***** place for learning new programming languages'
);

revealWordsWithRegex('great, learning',
    'softuni is ***** place for ******** new programming languages'
);