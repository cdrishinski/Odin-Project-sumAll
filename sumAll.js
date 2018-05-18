var sumAll = function(num1, num2) {
let i = num1;
if((num1 < 0)||(num2 < 0)){
    return "Error";
}

while(num1 <= num2) {
    let sum += num1;
    return sum;
}
};

module.exports = sumAll
