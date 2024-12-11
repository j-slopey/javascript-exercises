const reverseString = function(word) {
    let out = "";
    for(let i = word.length-1; i >= 0; i--){
        out += word.at(i);
    }
    return out;
};

// Do not edit below this line
module.exports = reverseString;
