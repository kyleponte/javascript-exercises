const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
        return 'ERROR';
    }

    let sum = 0

    if (start > end) {
        temp = start;
        start = end;
        end = temp;
    }

    for (let val = start; val <= end; val++) {
        sum += val;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
