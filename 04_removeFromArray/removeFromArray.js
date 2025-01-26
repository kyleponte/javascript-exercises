const removeFromArray = function(arrValues, ...values) {
    return arrValues.filter((value) => {
        if (values.includes(value)) {
            return false;
        } else {
            return true;
        }
    })
};

// Do not edit below this line
module.exports = removeFromArray;
