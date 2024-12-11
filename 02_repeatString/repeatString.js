

const repeatString = function(string1, count) {
    let output = "";
    if(count < 0){
        return "ERROR"
    }
    for(let i = 0; i < count; i++){
        output += string1;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
