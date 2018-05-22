var sumAll = function(num1, num2) {
let sum= 0;

if((num1 < 0)||(num2 < 0)){
    return "ERROR";
} else if ((Number.isInteger(num1)) && (Number.isInteger(num2))) {
    if (num1 <= num2){
        while(num1 <= num2) {
         sum = sum + num1;
        num1++;
        };
    return sum;
    } else if (num2 <= num1){
        while(num2 <= num1) {
        sum = sum + num2;
        num2++;
        };
    return sum;
}
} else {
    return "ERROR";
}
}

module.exports = sumAll;
