/**
 * @param  {number[]} digits
 */
var plusOne = function(digits){
    var i;
    for(i = digits.length - 1; i >= 0; i--){
        if(digits[i] == 9){
            digits[i] = 0;
        }else{
            digits[i] += 1;
            break;
        }
    }
    if(i == -1){
        digits.unshift(1);
    }
    return digits;
}
var getTime = function(func, digits) {
    let start = new Date().getTime();
    console.log(func(digits));
    let end = new Date().getTime();
    console.log('运行时间: ' + (end - start));
}
getTime(plusOne,[1,2,3,9]);