const repeatString = function(string, num) {
    let stringReturned = "";
    if (num < 0) return "ERROR";
    for (let i = 0; i<num;i++) {
        stringReturned += string;
    }
    return stringReturned;
};

// Do not edit below this line
module.exports = repeatString;
