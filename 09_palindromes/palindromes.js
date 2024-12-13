
const palindromes = function (word) {
    let noPunctLower = word.replace(/[ !"#$%&'()*+,-./:;<=>?@^_`{|}~]/g, '').toLowerCase();
    console.log(noPunctLower)
    return ( noPunctLower === noPunctLower.split('').reverse().join('') )

};


// Do not edit below this line
module.exports = palindromes;
