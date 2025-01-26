const reverseString = function(string) {
    stringLen = string.length;
    reverseStr = '';
    let i = 0;
    while (i < stringLen) {
        reverseStr += string[stringLen - 1 - i]
        i++;
    }

    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
