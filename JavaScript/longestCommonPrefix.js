/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var result = ''
    if (!strs.length){
        return result;
    }
    var length = strs[0].length,strlen = strs.length;
    for(var i = 0;i < length; i++){
        for(var j = 0; j < strlen - 1; j++){
            if(strs[j][i] == '' || strs[j+1][i] == ''|| strs[j][i] !== strs[j+1][i]){
                return result;
            }
        }
        result += strs[0][i];
    }
    return result;
};

console.log(longestCommonPrefix([]));