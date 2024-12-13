const fibonacci = function(num) {
    if( num == 0){
        return 0;
    } else if(num < 0){
        return "OOPS"
    }
    let fib = [1,1];
    for (let i = 1; i < num - 1; i++){
        fib.push( fib[i] + fib[i-1])
    }
    return fib[fib.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
