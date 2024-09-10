const removeFromArray = function(array, ...args) {
    for (item of args) {
        if (array.includes(item)) {
            array = array.filter(x => x!=item)
        }
    }
    return array
};
console.log(removeFromArray([1,2,1,1], 1))
// Do not edit below this line
module.exports = removeFromArray;
