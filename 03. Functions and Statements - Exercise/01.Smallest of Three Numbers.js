function smallestOfThreeNumbers(num1, num2, num3) {
    let smallest = Math.min(num1, num2, num3);
    return smallest;
}

console.log(smallestOfThreeNumbers(2, 5, 3)); // 2
console.log(smallestOfThreeNumbers(600, 342, 123)); // 123