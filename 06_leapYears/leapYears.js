const leapYears = function(year) {

    const isYearDivisibleByFour = year % 4 == 0;
    const isYearDivisbleByFourHundred = year % 400 == 0;
    const isYearCentury = year % 100 == 0;
    
    if (isYearDivisibleByFour && (!isYearCentury || isYearDivisbleByFourHundred)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
