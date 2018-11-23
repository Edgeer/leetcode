/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var max = Math.pow(2,31)-1;
    var num = 0, sign = 1, i = 0;
    var length = str.length;
    if (str == null){
        return 0;
    }
    while(str[i] === ' ' && i<length)i++;
    if(str[i] == '+' || str[i] == '-'){
        sign = str[i] == '+' ? 1 : -1;
        i++;
    }
    for(;i<length;i++){
        if(isNaN(parseInt(str[i]))){
           break;
        }
        num = num * 10 + parseInt(str[i]);  
        if(num > max){
            if (sign > 0){
                return sign * max;
            }else{
                return sign * max - 1;
            }
        }
    }
    return sign * num; 
};

console.log(myAtoi('   -2147483649'));