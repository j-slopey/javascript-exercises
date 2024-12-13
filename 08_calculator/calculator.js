const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(nums) {
  return nums.reduce( (total, num) => total += num , 0);
};

const multiply = function(nums) {
  return nums.reduce( (total, num) => total *= num , 1);
};

const power = function(num1, num2) {
  return num1**num2;
};

const factorial = function(num) {
  let total = 1;
  while(num > 0){
      total *= num;
      num -=1;
    }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
