/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var h_length = haystack.length,n_length = needle.length;
    var j = 0,point = -1;
    if(needle == "")return 0;
    if(n_length > h_length){
        return -1;
    }
    for(var i in haystack){
        if(haystack[i] == needle[0]){
            tempStr =  haystack.substr(parseInt(i),n_length);
            if(tempStr === needle){
                return parseInt(i);
            }
        }
    }
    return -1;
};
console.log(strStr("hololl","oll"));