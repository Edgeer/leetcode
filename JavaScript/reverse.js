/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var res = 0;
    var max = Math.pow(2,31) - 1;
    while(x !== 0){
        res = res*10 + x%10;
        if (x > 0)
            x =  Math.floor(x/10);
        else
            x = Math.ceil(x/10);
        if (Math.abs(res) > max){
            return 0;
        }
    }
    return res;
};
console.log(reverse(-123));