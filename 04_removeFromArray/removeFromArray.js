const removeFromArray = function(arrValues, ...values) {
    return arrValues.filter((value) => {
        for (const val of values) {
            if (value === val) {
                return false;
            }
        }
        return true;
    })
};

// Do not edit below this line
module.exports = removeFromArray;
