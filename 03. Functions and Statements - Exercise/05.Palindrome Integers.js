function polindromeIntegers(arr) {
    for (let i = 0; i < arr.length; i++) {
        
        let num = arr[i].toString();
        let reversedNum = num.split('').reverse().join('');

        if (num === reversedNum) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}