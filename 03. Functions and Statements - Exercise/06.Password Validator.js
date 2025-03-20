function passwordValidator(password) {
    let result = [];

    if (!isLengthValid(password)) {
        result.push('Password must be between 6 and 10 characters');
    }

    if (!isOnlyLettersAndDigits(password)) {
        result.push('Password must consist only of letters and digits');
    }
    
    if (!isAtLeastTwoDigits(password)) {
        result.push('Password must have at least 2 digits');
    }

    function isLengthValid(password) {
        return password.length >= 6 && password.length <= 10;
    }

    function isOnlyLettersAndDigits(password) {
        return /^[0-9a-zA-Z]+$/.test(password);
    }

    function isAtLeastTwoDigits(password) {
        let digits = password.match(/\d/g);
        return digits !== null && digits.length >= 2;
    }

    if (result.length > 0) {
        console.log(result.join('\n'));
    } else {
        console.log('Password is valid');
    }
}

passwordValidator('logIn'); // Password must be between 6 and 10 characters
passwordValidator('MyPass123'); // Password is valid
