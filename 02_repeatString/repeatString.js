const repeatString = function(string, num) {

    if (num < 0) {
        return 'ERROR';
    }
    finalString = '';

    let i = 0
    while (i < num) {
        finalString += string
        i++;
    }

    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
