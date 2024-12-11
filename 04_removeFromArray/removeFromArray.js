const removeFromArray = function(array) {
    const args = [...arguments];
    values = args.slice(1);
    let out = array.filter((element) => values.indexOf(element) === -1);
    return out;
};


// Do not edit below this line
module.exports = removeFromArray;
