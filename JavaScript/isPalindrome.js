/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, "");
    s = s.toLowerCase(s);
    var length = s.length;
    if (length <= 1){
        return true;
    }
    for (var i = 0,j = length-1;i<=j;i++,j--){
        if(s[i] !== s[j]){
            return s;
        }
    }
    return true;
};
console.log(isPalindrome('race a car'));