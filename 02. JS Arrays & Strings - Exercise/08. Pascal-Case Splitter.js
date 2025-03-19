function splitter(input) {
    const matches = input.matchAll(/[A-Z][a-z]*/g);

    const words = Array.from(matches).map(match => match[0]);
    console.log(words.join(', '));
}

splitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
splitter('HoldTheDoor');
splitter('ThisIsSoAnnoyingToDo');