/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let str = "";
    for (let i = s.length; i >= 0; i--){
        str += s.charAt(i);
    }
    return str;
};
