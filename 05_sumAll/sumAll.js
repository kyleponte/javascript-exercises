const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
        return 'ERROR';
    }
    let sum = 0
    for (let val = Math.min(start, end); val <= Math.max(start, end); val++) {
        sum += val;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
