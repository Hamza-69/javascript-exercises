const reverseString = function(string) {
    let returned = "";
    for (let i =1; i <= string.length; i++) {
        returned = returned + string.at(string.length - i)
    }
    return returned
};

// Do not edit below this line
module.exports = reverseString;
