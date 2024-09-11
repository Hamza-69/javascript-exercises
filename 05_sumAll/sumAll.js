const sumAll = function(lower, upper) {
    if ((typeof lower) == 'number'  && (typeof upper ) == 'number') {

    if (lower % 1 != 0 || upper % 1 != 0) return "ERROR";
    if (lower < 0 || upper < 0 ) return "ERROR";
    let n = upper > lower ? upper -lower +1: lower -upper+1;
    return n*(n+1)/2 
    }
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
